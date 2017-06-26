import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';

import NewEventsReducer from './reducers/NewEventsReducer';
import SearchEventsReducer from './reducers/SearchEventsReducer';
import EventDetailReducer from './reducers/EventDetailReducer';
import FavoritesReducer from './reducers/FavoritesReducer';

const logger = createLogger();

export default () => {
	const store = createStore(
		combineReducers({
			newEvents: NewEventsReducer,
			searchEvents: SearchEventsReducer,
			eventDetail: EventDetailReducer,
			favorite: FavoritesReducer,
		}),
		undefined,
		compose(
			applyMiddleware(
				logger,
				promiseMiddleware,
				thunkMiddleware),
			autoRehydrate()),
	);

	persistStore(store, {
		storage: AsyncStorage,
		// whitelist: [
		// 	'favorite',
		// ]
	}, () => {
		console.log('rehydration compolete');
	})

	return store;
}