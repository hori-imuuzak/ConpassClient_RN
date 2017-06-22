import { types } from '../consts/ActionTypes';

let initialState = {
	events: [],
	isLoading: false,
	nextPage: 1,
}

export default (state = initialState, action = {}) => {
	let newState = Object.assign({}, state);

	switch (action.type) {
		case types.ACTION_NEW_SEARCH:
			newState.events = [];
			return newState;

		case types.ACTION_SEARCHING_EVENTS:
			newState.isLoading = true;
			return newState;

		case types.ACTION_SEARCHED_EVENTS:
			let events = action.payload || newState.events;
			newState = {
				events: [...newState.events, ...events],
				isLoading: false,	
				nextPage: action.nextPage || newState.nextPage,
			};
			return newState;

		default:
			return newState;
	}
}