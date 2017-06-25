import { types } from '../consts/ActionTypes';

const initialState = {
	events: [],
	isLoading: false,
	nextPage: 1,
	isShowNotFound: false,
}

export default (state = initialState, action = {}) => {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.ACTION_NEW_SEARCH:
			return {
				events: [],
				isLoading: true,
				nextPage: 1,
				isShowNotFound: false,
			}

		case types.ACTION_SEARCHING_EVENTS:
			newState.isLoading = true;
			return newState;

		case types.ACTION_SEARCHED_EVENTS:
			const events = action.payload || newState.events;
			return {
				events: [...newState.events, ...events],
				isLoading: false,	
				nextPage: action.nextPage || newState.nextPage,
				isShowNotFound: (events.length === 0),
			}

		default:
			return newState;
	}
}