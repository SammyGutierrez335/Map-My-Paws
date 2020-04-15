import { RECEIVE_WALK } from "../../actions/walk_actions";

const walkReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WALK:
            return action.walk;
        case 
        default:
            return state;
    }
}

export default walkReducer;