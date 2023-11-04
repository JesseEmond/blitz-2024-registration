// Search specific to performing Monte Carlo Tree Search (MCTS).
use std::collections::HashSet;
use std::time::{Duration, Instant};

use rand::Rng;
use rand::prelude::SliceRandom;

use crate::search::SearchState;

pub struct MCTSOptions {
    pub exploration_multiplier: f64,
    pub random_action_prob: f32,
    // 'D' in https://dke.maastrichtuniversity.nl/m.winands/documents/CGSameGame.pdf
    pub uncertainty_d: f64,
    pub print_every_n_rounds: Option<usize>,
}

type NodeIdx = usize;
type ChildIdx = usize;

struct Child<S: SearchState> {
    node_idx: NodeIdx,
    /// Action taken to get to this child.
    action: S::Action,
    expanded: bool,
}

struct NodeData<S: SearchState> {
    children: Vec<Child<S>>,
}

struct Node<S: SearchState> {
    data: Option<NodeData<S>>,
    fully_expanded: bool,
    /// Max possible score seen in this branch, used to normalize scores for UCT.
    max_score: u64,
    sum_scores: u64,
    sum_squared_scores: u64,
    num_sims: u64,
}

impl<S: SearchState> Node<S> {
    fn new(max_score: u64) -> Self {
        Self {
            data: None,
            fully_expanded: false,
            max_score,
            sum_scores: 0,
            sum_squared_scores: 0,
            num_sims: 0,
        }
    }

    fn generate(&mut self, children: Vec<Child<S>>) {
        self.data = Some(NodeData { children });
    }

    fn is_generated(&self) -> bool {
        self.data.is_some()
    }

    fn data(&self) -> &NodeData<S> {
        assert!(self.is_generated());
        self.data.as_ref().unwrap()
    }

    fn data_mut(&mut self) -> &mut NodeData<S> {
        assert!(self.is_generated());
        self.data.as_mut().unwrap()
    }

    fn update_stats(&mut self, score: u64) {
        self.sum_scores += score;
        self.sum_squared_scores += score * score;
        self.num_sims += 1;
        self.max_score = self.max_score.max(score);
    }

    fn uct(&self, parent_sims: u64, max_score: u64, exploration: f64, uncertainty_d: f64) -> f64 {
        assert!(self.num_sims > 0);
        // Treat our win ratio as the sum of total scores normalized by the max
        // possible score (times the number of sims).
        let win_ratio = self.sum_scores as f64 / (self.num_sims * max_score) as f64;
        let c: f64 = exploration * 2.0_f64.sqrt();
        let uct = win_ratio + c * ((parent_sims as f64).ln() / (self.num_sims as f64)).sqrt();
        // https://dke.maastrichtuniversity.nl/m.winands/documents/CGSameGame.pdf
        let sp_uct = ((self.sum_squared_scores as f64 - self.num_sims as f64
                       * win_ratio * win_ratio + uncertainty_d) / (self.num_sims as f64)).sqrt();
        uct + sp_uct
    }
}

/// Sequence of child node indices, used in backprop.
type Path = Vec<ChildIdx>;

pub struct MCTS<S: SearchState> {
    start_state: S,
    root_idx: NodeIdx,
    nodes: Vec<Node<S>>,
    // Node indices that we are free to re-use when generating new nodes.
    free_list: Vec<NodeIdx>,
    options: MCTSOptions,
    rounds: usize,
    pub best_seen_score: u64,
    best_path: Path,
}

impl<S: SearchState + Clone> MCTS<S>
where S::Action: Clone {
    pub fn new(start_state: S, options: MCTSOptions) -> Self {
        Self {
            start_state,
            nodes: vec![Node::new(/*max_score=*/1)],
            free_list: Vec::new(),
            options,
            root_idx: 0,
            rounds: 0,
            best_seen_score: 0,
            best_path: Path::new(),
        }
    }

    pub fn run_with_budget(&mut self, budget: Duration) {
        let start = Instant::now();
        let mut rounds = 0;
        while start.elapsed() < budget {
            self.run_round(&mut rand::thread_rng());
            rounds += 1;
        }
        let duration = start.elapsed();
        if self.options.print_every_n_rounds.is_some() {
            println!("Ran {} rounds in {:?}", rounds, duration);
        }

    }

    pub fn run_round(&mut self, noise_rng: &mut impl Rng) {
        let mut state = self.start_state.clone();
        let (mut path, leaf_idx) = self.select_node(&mut state, noise_rng);
        let node_idx = self.expand_node(&mut state, leaf_idx, &mut path);
        self.rounds += 1;
        let score = self.playout(&mut state, node_idx, &mut path, noise_rng);
        self.backprop(score, &path);
        if self.options.print_every_n_rounds.is_some() && self.rounds % self.options.print_every_n_rounds.unwrap() == 0 {
            println!("Rounds: {}, best score: {}, nodes: {} ({} free)",
                     self.rounds, self.best_seen_score, self.nodes.len(),
                     self.free_list.len());
        }
    }

    pub fn best_actions_sequence(&self) -> Vec<S::Action> {
        let mut actions = Vec::new();
        let mut node_idx = self.root_idx;
        for &child_idx in &self.best_path {
            let child = &self.nodes[node_idx].data().children[child_idx];
            actions.push(child.action.clone());
            node_idx = child.node_idx;
        }
        actions
    }

    pub fn best_action(&self) -> S::Action {
        let child_idx = self.best_uct(
            self.root_idx, /*exploration_multiplier=*/0.0,
            &mut rand::thread_rng());
        self.nodes[self.root_idx].data().children[child_idx].action.clone()
    }

    pub fn pick_best_action(&mut self) -> Option<S::Action> {
        if self.best_path.is_empty() {
            return None;
        }
        // TODO: pick based on # visits?
        let child_idx = self.best_path.remove(0);
        // The other children nodes can now be re-used.
        for other in self.nodes[self.root_idx].data().children.iter().enumerate()
            .filter(|&(i, _)| i != child_idx).map(|(_, other)| other) {
            self.free_list.push(other.node_idx);
        }
        let child = &self.nodes[self.root_idx].data().children[child_idx];
        self.start_state.apply_action(&child.action);
        self.root_idx = child.node_idx;
        Some(child.action.clone())
    }

    /// Selects (path, leaf_node_idx), using UCT.
    fn select_node(&self, state: &mut S, noise_rng: &mut impl Rng) -> (Path, NodeIdx) {
        let mut node_idx = self.root_idx;
        let mut path = Path::new();
        while self.nodes[node_idx].fully_expanded {
            let child_idx = self.best_uct(
                node_idx, self.options.exploration_multiplier, noise_rng);
            path.push(child_idx);
            let child = &self.nodes[node_idx].data().children[child_idx];
            state.apply_action(&child.action);
            node_idx = child.node_idx;
        }
        (path, node_idx)
    }

    fn expand_node(&mut self, state: &mut S, node_idx: NodeIdx, path: &mut Path) -> NodeIdx
    where S::Action: Clone {
        assert!(!self.nodes[node_idx].fully_expanded);
        if state.is_final() {
            return node_idx;  // Nothing to expand.
        }
        if !self.nodes[node_idx].is_generated() {
            self.generate_node(state, node_idx);
        }
        let unexpanded: Vec<ChildIdx> = (0..self.nodes[node_idx].data().children.len())
            .filter(|&i| {
                let child = &self.nodes[node_idx].data().children[i];
                !child.expanded
            }).collect();
        let unexpanded_actions = unexpanded.iter()
            .map(|&i| &self.nodes[node_idx].data().children[i].action)
            .collect();
        let unexpanded_idx = state.greedy_pick_action(&unexpanded_actions);
        let child_idx = unexpanded[unexpanded_idx];
        path.push(child_idx);
        let child = &mut self.nodes[node_idx].data_mut().children[child_idx];
        child.expanded = true;
        state.apply_action(&child.action);
        let child_node_idx = child.node_idx;
        if unexpanded.len() == 1 {  // that was the last remaining one
            self.nodes[node_idx].fully_expanded = true;
        }
        child_node_idx
    }

    /// Generates the possible children for a give node.
    fn generate_node(&mut self, state: &S, node_idx: NodeIdx) {
        assert!(!self.nodes[node_idx].is_generated());
        let mut children = Vec::new();
        for action in state.generate_actions() {
            let (new_idx, _) = self.new_node(self.nodes[node_idx].max_score);
            children.push(Child { node_idx: new_idx, action, expanded: false });
        }
        assert!(!children.is_empty(), "No action possible for node_idx: {}", node_idx);
        self.nodes[node_idx].generate(children);
    }

    fn playout(&mut self, state: &mut S, node_idx: NodeIdx, path: &mut Path,
               noise_rng: &mut impl Rng) -> u64 {
        let mut current_path = path.clone();
        let mut node_idx = node_idx;
        while !state.is_final() {
            if !self.nodes[node_idx].is_generated() {
                self.generate_node(state, node_idx);
            }
            let actions: Vec<&S::Action> = self.nodes[node_idx].data().children.iter()
                .map(|c| &c.action).collect();
            assert!(!actions.is_empty());
            let child_idx = if noise_rng.gen::<f32>() < self.options.random_action_prob {
                *(0..actions.len()).collect::<Vec<ChildIdx>>().choose(noise_rng).unwrap()
            } else {
                state.greedy_pick_action(&actions)
            };
            current_path.push(child_idx);
            let child = &self.nodes[node_idx].data().children[child_idx];
            state.apply_action(&child.action);
            node_idx = child.node_idx;
        }
        let score = state.evaluate();
        if score >= self.best_seen_score {
            *path = current_path.clone();  // backprop through this entire strong path
        }
        // TODO verbose setting
        if score > self.best_seen_score {
            println!("Score: {} ({} rounds)", score, self.rounds);
            self.best_seen_score = score;
            self.best_path = current_path;
        }
        score
    }

    fn backprop(&mut self, score: u64, path: &Path) {
        let mut node_idx = self.root_idx;
        for &child_idx in path {
            self.nodes[node_idx].update_stats(score);
            node_idx = self.nodes[node_idx].data().children[child_idx].node_idx;
        }
        self.nodes[node_idx].update_stats(score);
    }

    /// Select child index with the best UCT score.
    fn best_uct(&self, parent_idx: NodeIdx, exploration: f64,
                noise_rng: &mut impl Rng) -> ChildIdx {
        let parent_max_score = self.nodes[parent_idx].max_score;
        let parent_sims = self.nodes[parent_idx].num_sims;
        let d = self.options.uncertainty_d;
        let max_uct = self.nodes[parent_idx].data().children.iter()
            .map(|c| self.nodes[c.node_idx].uct(parent_sims, parent_max_score, exploration, d))
            .max_by(|u1, u2| u1.partial_cmp(u2).unwrap())
            .unwrap();
        let options: Vec<ChildIdx> = self.nodes[parent_idx].data().children.iter().enumerate()
            .filter(|(_, c)| self.nodes[c.node_idx].uct(
                    parent_sims, parent_max_score, exploration, d) == max_uct)
            .map(|(idx, _)| idx).collect();
        *options.choose(noise_rng).unwrap()

    }

    fn new_node(&mut self, max_score: u64) -> (NodeIdx, &mut Node<S>) {
        let idx = if let Some(idx) = self.free_list.pop() {
            // The node's children are now in the free list.
            if self.nodes[idx].is_generated() {
                for child in &self.nodes[idx].data().children {
                    self.free_list.push(child.node_idx);
                }
            }
            self.nodes[idx] = Node::new(max_score);
            idx
        } else {
            let idx = self.nodes.len();
            self.nodes.push(Node::new(max_score));
            idx
        };
        (idx, &mut self.nodes[idx])
    }
}

// TODO: Add a meta search? reset MCTS and run multiple times
// https://dke.maastrichtuniversity.nl/m.winands/documents/CGSameGame.pdf
