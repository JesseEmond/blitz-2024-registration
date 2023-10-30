// Search specific to performing Monte Carlo Tree Search (MCTS).
use std::collections::HashSet;
use std::time::{Duration, Instant};

use rand::Rng;
use rand::prelude::SliceRandom;

use crate::search::SearchState;

struct Child<S: SearchState> {
    node_idx: usize,
    /// Action taken to get to this child.
    action: S::Action,
}

struct NodeData<S: SearchState> {
    children: Vec<Child<S>>,
}

struct Node<S: SearchState> {
    data: Option<NodeData<S>>,
    fully_expanded: bool,
    sum_scores: u64,
    num_sims: u64,
    skipped: bool,
    // TODO: keep min/max scores, used in UCT
}

impl<S: SearchState> Node<S> {
    fn new() -> Self {
        Self {
            data: None,
            fully_expanded: false,
            sum_scores: 0,
            num_sims: 0,
            skipped: false,
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

    fn update_stats(&mut self, sims: u64, sum_scores: u64) {
        self.sum_scores += sum_scores;
        self.num_sims += sims;
    }

    fn uct(&self, parent_sims: u64, max_score: u64) -> f64 {
        if self.skipped { return 0.0; }
        assert!(self.num_sims > 0);
        // TODO try single player MCTS UCT?
        // https://dke.maastrichtuniversity.nl/m.winands/documents/CGSameGame.pdf
        // Treat our win ratio as the sum of total scores normalized by the max
        // possible score (times the number of sims).
        let win_ratio = self.sum_scores as f64 / (self.num_sims * max_score) as f64;
        let c: f64 = 2.0_f64.sqrt();  // TODO: make configurable
        win_ratio + c * ((parent_sims as f64).ln() / (self.num_sims as f64)).sqrt()
    }
}

/// Sequence of child node indices, used in backprop.
type Path = Vec<usize>;

pub struct MCTS<S: SearchState> {
    start_state: S,
    root_idx: usize,
    nodes: Vec<Node<S>>,
    /// Max possible score, used to normalize scores for UCT.
    max_score: u64,
    rounds: usize,
    seen_hashes: HashSet<u64>,
    skipped_rounds: usize,  // rounds we skipped thanks to hashes
    pub best_seen_score: u64,
    best_path: Path,
}

impl<S: SearchState + Clone> MCTS<S>
where S::Action: Clone {
    pub fn new(start_state: S) -> Self {
        let root = Node::new();
        let theoretical_max = start_state.theoretical_max();
        assert!(theoretical_max > 0);
        Self {
            start_state,
            nodes: vec![root],
            max_score: theoretical_max.into(),
            root_idx: 0,
            rounds: 0,
            skipped_rounds: 0,
            seen_hashes: HashSet::new(),
            best_seen_score: 0,
            best_path: Path::new(),
        }
    }

    pub fn run_with_budget(&mut self, budget: Duration) {
        let start = Instant::now();
        let mut rounds = 0;
        while start.elapsed() < budget {
            self.run_round();
            rounds += 1;
        }
        let duration = start.elapsed();
        // TODO verbose setting
        println!("Ran {} rounds in {:?}", rounds, duration);
    }

    pub fn run_round(&mut self) {
        let mut state = self.start_state.clone();
        let (mut path, leaf_idx) = self.select_node(&mut state);
        let node_idx = self.expand_node(&mut state, leaf_idx, &mut path);
        self.rounds += 1;
        if !self.seen_hashes.insert(state.transposition_hash()) {
            self.skipped_rounds += 1;
            self.nodes[node_idx].skipped = true;
            return;  // Already played out this state -- skip it
        }
        self.playout(&mut state);
        let score = state.evaluate();
        self.backprop(score, &path);
        // TODO verbose setting
        if score > self.best_seen_score {
            println!("Score: {} ({} rounds ({} skipped))", score, self.rounds,
                     self.skipped_rounds);
            self.best_seen_score = score;
            self.best_path = path.clone();
        }
    }

    pub fn best_actions_sequence(&self) -> Vec<&S::Action> {
        let mut seq = Vec::new();
        let mut node_idx = self.root_idx;
        for &child_idx in &self.best_path {
            let child = &self.nodes[node_idx].data().children[child_idx];
            seq.push(&child.action);
            node_idx = child.node_idx;
        }
        seq
    }

    /// Selects (path, leaf_node_idx), using UCT.
    fn select_node(&self, state: &mut S) -> (Path, usize) {
        let mut node_idx = self.root_idx;
        let mut path = Path::new();
        while self.nodes[node_idx].fully_expanded {
            let child_idx = self.best_uct(node_idx);
            path.push(child_idx);
            let child = &self.nodes[node_idx].data().children[child_idx];
            state.apply_action(&child.action);
            node_idx = child.node_idx;
        }
        (path, node_idx)
    }

    fn expand_node(&mut self, state: &mut S, node_idx: usize, path: &mut Path) -> usize
    where S::Action: Clone {
        assert!(!self.nodes[node_idx].fully_expanded);
        if state.is_final() {
            return node_idx;  // Nothing to expand.
        }
        if !self.nodes[node_idx].is_generated() {
            self.generate_node(state, node_idx);
        }
        let unexpanded: Vec<usize> = (0..self.nodes[node_idx].data().children.len())
            .filter(|&i| {
                let child = &self.nodes[node_idx].data().children[i];
                !self.nodes[child.node_idx].is_generated()
            }).collect();
        let unexpanded_actions = unexpanded.iter()
            .map(|&i| self.nodes[node_idx].data().children[i].action.clone())
            .collect();
        let unexpanded_idx = state.greedy_pick_action(&unexpanded_actions);
        let child_idx = unexpanded[unexpanded_idx];
        path.push(child_idx);
        let child = &self.nodes[node_idx].data().children[child_idx];
        state.apply_action(&child.action);
        let child_node_idx = child.node_idx;
        self.generate_node(state, child_node_idx);
        if unexpanded.len() == 1 {  // that was the last remaining one
            self.nodes[node_idx].fully_expanded = true;
        }
        child_node_idx
    }

    /// Generates the possible children for a give node.
    fn generate_node(&mut self, state: &S, node_idx: usize) {
        assert!(!self.nodes[node_idx].is_generated());
        let mut children = Vec::new();
        for action in state.generate_actions() {
            let new_idx = self.nodes.len();
            let new_node = Node::new();
            self.nodes.push(new_node);
            children.push(Child { node_idx: new_idx, action });
        }
        assert!(!children.is_empty(), "No action possible for node_idx: {}", node_idx);
        self.nodes[node_idx].generate(children);
    }

    fn playout(&mut self, state: &mut S) {
        while !state.is_final() {
            let actions = state.generate_actions();
            // TODO configurable
            let pick_idx = if rand::thread_rng().gen::<f32>() < 0.1 {
                *(0..actions.len()).collect::<Vec<usize>>()
                    .choose(&mut rand::thread_rng()).unwrap()
            } else {
                state.greedy_pick_action(&actions)
            };
            state.apply_action(&actions[pick_idx]);
        }
    }

    fn backprop(&mut self, score: u64, path: &Path) {
        let mut node_idx = self.root_idx;
        for &child_idx in path {
            self.nodes[node_idx].update_stats(/*sims=*/1, score);
            node_idx = self.nodes[node_idx].data().children[child_idx].node_idx;
        }
        self.nodes[node_idx].update_stats(/*sims=*/1, score);
    }

    /// Select child index with the best UCT score.
    fn best_uct(&self, parent_idx: usize) -> usize {
        let parent_sims = self.nodes[parent_idx].num_sims;
        self.nodes[parent_idx].data().children.iter().enumerate()
            .max_by(|(_, a), (_, b)| {
                self.nodes[a.node_idx].uct(parent_sims, self.max_score)
                    .total_cmp(&self.nodes[b.node_idx].uct(parent_sims, self.max_score))
            }).map(|(idx, _)| idx).unwrap()
    }
}

// TODO: Add a meta search? reset MCTS and run multiple times
// https://dke.maastrichtuniversity.nl/m.winands/documents/CGSameGame.pdf
