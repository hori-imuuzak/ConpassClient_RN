import { types } from '../consts/ActionTypes';

const initialState = {
	events: [],
	isLoading: false,
	nextPage: 1,
}

export default (state = initialState, action = {}) => {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.ACTION_LOADING_EVENTS:
			newState.isLoading = true;
			return newState;

		case types.ACTION_LOADED_EVENTS:
			const events = action.payload || newState.events;
			return {
				events: [...newState.events, ...events],
				isLoading: false,	
				nextPage: action.nextPage || newState.nextPage,
			};

		default:
			return newState;
	}
}