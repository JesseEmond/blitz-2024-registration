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
    pub fn search<S>(&self, start_state: S) -> Vec<S::Action>
        where S: SearchState + Clone, S::Action: Clone {
        let mut beam = vec![Node::new(start_state, Vec::new() )];
        while !beam.is_empty() {
            let mut new_beam = Vec::new();
            let mut best_node: Option<&Node<S>> = None;
            print!("Beam size: {}", beam.len());
            for node in &beam {
                if best_node.as_ref()
                    .map(|best| node.state.heuristic() > best.state.heuristic() ||
                         (node.state.heuristic() == best.state.heuristic()
                          && node.state.evaluate() > best.state.evaluate()))
                    .unwrap_or(true) {
                    best_node = Some(node);
                }
            }
            let best_node = best_node.unwrap();
            if best_node.state.is_final() {
                println!(" Final score: {}", best_node.state.evaluate());
                return best_node.actions.clone();
            }
            let best_heuristic = best_node.state.heuristic();
            let best_score = best_node.state.evaluate();
            print!("  heuristic: {}", best_heuristic);
            print!("  (score: {})", best_score);
            beam.retain(|n| n.state.heuristic() == best_heuristic);
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
        panic!("Beam empty, game never ended!");
    }
}
