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

const store = createStore(
	combineReducers({
		newEvents: NewEventsReducer,
		eventDetail: EventDetailReducer,
	}),
	{},
	applyMiddleware(
		logger,
		promiseMiddleware,
		thunkMiddleware)
);

export default store;