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

import reducers from './reducers';

const logger = createLogger();

export default () => {
	const store = createStore(
		combineReducers(
			reducers
		),
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