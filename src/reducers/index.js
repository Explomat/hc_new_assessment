import { combineReducers } from 'redux';
import app from './app';
import assessment from './assessment';

export default combineReducers({
	app,
	assessment
});