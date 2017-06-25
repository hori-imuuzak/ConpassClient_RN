import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import NewEventsReducer from './reducers/NewEventsReducer';
import SearchEventsReducer from './reducers/SearchEventsReducer';
import EventDetailReducer from './reducers/EventDetailReducer';
import FavoritesReducer from './reducers/FavoritesReducer';

const logger = createLogger();

const store = createStore(
	combineReducers({
		newEvents: NewEventsReducer,
		searchEvents: SearchEventsReducer,
		eventDetail: EventDetailReducer,
		favorite: FavoritesReducer,
	}),
	{},
	applyMiddleware(
		logger,
		promiseMiddleware,
		thunkMiddleware)
);

export default store;