import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/root_reducer.js"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';




//store takes in (reducer, [preloadedState, [enhancer] function])
const configureStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, logger))
    );
export default configureStore



// store methods W13D3
// getState() - returns current state
// dispatch(action) - passes action into store's reducer telling it what information to update.
