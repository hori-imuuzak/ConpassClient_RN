import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import NewEventsReducer from './reducers/NewEventsReducer';
import EventDetailReducer from './reducers/EventDetailReducer';

const logger = createLogger();

export default (initialState = {}) => (
	createStore(
		combineReducers({
			newEvents: NewEventsReducer,
			eventDetail: EventDetailReducer,
		}),
		initialState,
		applyMiddleware(
			logger, 
			promiseMiddleware, 
			thunkMiddleware)
	)
)