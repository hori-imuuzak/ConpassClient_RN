import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import EventsReducer from './reducers/EventsReducer';

const logger = createLogger();

export default (initialState = {}) => (
	createStore(
		combineReducers({
			events: EventsReducer,
		}),
		initialState,
		applyMiddleware(
			logger, 
			promiseMiddleware, 
			thunkMiddleware)
	)
)