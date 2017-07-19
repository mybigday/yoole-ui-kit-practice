import { combineReducers } from 'redux';
import routerReducer from './router';

export default combineReducers({
	routerStore: routerReducer,
})