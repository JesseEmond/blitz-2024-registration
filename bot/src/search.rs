use std::collections::HashSet;

pub trait SearchState {
    type Action;

    fn generate_actions(&self) -> Vec<Self::Action>;
    fn apply_action(&mut self, action: &Self::Action);
    fn is_final(&self) -> bool;
    fn evaluate(&self) -> u64;  // higher is better
    fn heuristic(&self) -> u64;  // higher is better

    // Mostly a debugging tool, to check how many states in our beam are dupes.
    fn is_equivalent(&self, other: &Self) -> bool;

    // States that have the same hash will be skipped.
    fn transposition_hash(&self) -> u64;
}

#[derive(Clone)]
struct Node<S> where S: SearchState {
    state: S,
    actions: Vec<S::Action>,
}

impl<S> Node<S> where S: SearchState {
    fn new(state: S, actions: Vec<S::Action>) -> Self {
        Self { state, actions }
    }
}

// Beam search where we only keep states that have the same top potential score.
pub struct BeamSearch {
}

impl BeamSearch {
    pub fn search<S>(&self, start_state: S, verbose: bool) -> Vec<S::Action>
        where S: SearchState + Clone, S::Action: Clone {
        let mut beam = vec![Node::new(start_state, Vec::new() )];
        let mut seen_hashes = HashSet::new();
        while !beam.is_empty() {
            let mut new_beam = Vec::new();
            for node in &beam {
            }
            let mut best_node: Option<Node<S>> = None;
            for node in beam.drain(..) {
                for action in node.state.generate_actions() {
                    let mut state = node.state.clone();
                    state.apply_action(&action);
                    let best_heuristic = best_node.as_ref().map_or(0, |best| best.state.heuristic());
                    if state.heuristic() < best_heuristic { continue; }
                    if !seen_hashes.insert(state.transposition_hash()) { continue; }
                    let mut actions = node.actions.clone();
                    actions.push(action);
                    let heuristic = state.heuristic();
                    let score = state.evaluate();
                    let new_node = Node::new(state, actions);
                    let best_score = best_node.as_ref().map_or(0, |best| best.state.evaluate());
                    if heuristic > best_heuristic || score > best_score {
                        best_node = Some(new_node.clone());
                    }
                    new_beam.push(new_node);
                }
            }
            // TODO: re-include prints
            // let best_score = best_node.state.evaluate();
            let best_node = best_node.unwrap();
            if best_node.state.is_final() {
                // TODO: move to verbose
                println!(" Final score: {}", best_node.state.evaluate());
                return best_node.actions.clone();
            }
            new_beam.retain(|n| n.state.heuristic() == best_node.state.heuristic());
            beam = new_beam;
        }
        panic!("Beam empty, game never ended!");
    }
}
