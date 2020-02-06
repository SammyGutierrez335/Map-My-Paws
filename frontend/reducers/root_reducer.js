import { combineReducers } from 'redux';
import entities from './entities/entities_reducer';
import session from './session/session_reducer'
import errors from './errors/errors_reducer'

//entities stores relational data
//session stores current user info
//errors stores errors

const RootReducer = combineReducers({
    entities,
    session,
    errors
})

export default RootReducer


//RootReducer determines what the store will look like after we have made changes to it