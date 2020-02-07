import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers/root_reducer.js"


const middlewares = [thunk]

if (process.env.NODE_ENV !== "production") {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}



//store takes in (reducer, [preloadedState, [enhancer] function])
const configureStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;



// store methods W13D3
// getState() - returns current state
// dispatch(action) - passes action into store's reducer telling it what information to update.
