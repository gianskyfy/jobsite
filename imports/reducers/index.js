import { combineReducers } from 'redux'
import authReducer from './authReducer';
import componentReducer from './componentReducer';

export default combineReducers({
    auth: authReducer,
    component: componentReducer
});