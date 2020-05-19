import { RECEIVE_WALK, RECEIVE_WALKS } from "../../actions/walk_actions";

const walkReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WALK:
            //whatever is return becomes new slice of state in redux store
            return Object.assign({}, state, { [action.walk.id]: action.walk });

        case RECEIVE_WALKS:
            // return Object.assign({}, state, action.walks)
            return action.walks;
        default:
            return state;
    }
}
            
export default walkReducer;