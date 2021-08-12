import { combineReducers } from 'redux';
import switchReducer from './switchReducer';
import changeClipTextReducer from './changeClipTextReducer';

export default combineReducers({
	switchStatus: switchReducer,
	clipTextStatus: changeClipTextReducer,
})