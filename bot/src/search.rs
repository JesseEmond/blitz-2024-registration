pub trait SearchState {
    type Action;

    fn generate_actions(&self) -> Vec<Self::Action>;
    fn apply_action(&mut self, action: &Self::Action);
    fn is_final(&self) -> bool;
    fn evaluate(&self) -> u64;  // higher is better
    fn heuristic(&self) -> u64;  // higher is better
}

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
    pub fn search<S>(&self, start_state: S) -> Option<Vec<S::Action>>
        where S: SearchState + Clone, S::Action: Clone {
        let mut beam = vec![Node::new(start_state, Vec::new() )];
        while !beam.is_empty() {
            let mut new_beam = Vec::new();
            let mut best_node: Option<&Node<S>> = None;
            print!("Beam size: {}", beam.len());
            for node in &beam {
                if best_node.as_ref()
                    .map(|b| b.state.heuristic() > node.state.heuristic())
                    .unwrap_or(true) {
                    best_node = Some(node);
                }
            }
            let best_node = best_node.unwrap();
            if best_node.state.is_final() {
                println!(" Final score: {}", best_node.state.evaluate());
                return Some(best_node.actions.clone());
            }
            let best_score = best_node.state.heuristic();
            print!("  heuristic: {}", best_score);
            print!("  (score: {})", best_node.state.evaluate());
            beam.retain(|n| n.state.heuristic() >= best_score);
            println!("  after pruning: {}", beam.len());
            for node in beam.drain(..) {
                for action in node.state.generate_actions() {
                    let mut state = node.state.clone();
                    let mut actions = node.actions.clone();
                    state.apply_action(&action);
                    actions.push(action);
                    let new_node = Node::new(state, actions);
                    new_beam.push(new_node);
                }
            }
            beam = new_beam;
        }
        None
    }
}
