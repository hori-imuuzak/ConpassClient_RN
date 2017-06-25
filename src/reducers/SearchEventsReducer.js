import { types } from '../consts/ActionTypes';

const initialState = {
	events: [],
	isSearching: false,
	nextPage: 1,
	isShowNotFound: false,
}

export default (state = initialState, action = {}) => {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.ACTION_CLEAR_SEARCH:
			return Object.assign({}, initialState);

		case types.ACTION_SEARCHING_EVENTS:
			newState.isSearching = true;
			newState.isShowNotFound = false;
			return newState;

		case types.ACTION_SEARCHED_EVENTS:
			const events = action.payload || newState.events;
			const isShowNotFound = (events.length === 0);
			let nextPage = action.nextPage || newState.nextPage;

			if (isShowNotFound) {
				nextPage = 1;
			}

			newState.events = [...newState.events, ...events];
			newState.isSearching = false;
			newState.nextPage = nextPage;
			newState.isShowNotFound = isShowNotFound;
			return newState;

		default:
			return newState;
	}
}