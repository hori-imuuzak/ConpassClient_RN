import { ActionTypes } from '../actions/NewEventsAction';

let initialState = {
	events: [],
	isLoading: false,
	nextPage: 1,
}

export default (state = initialState, action = {}) => {
	let newState = Object.assign({}, state);

	switch (action.type) {
		case ActionTypes.ACTION_LOADING_EVENTS:
			newState.isLoading = true;
			return newState;

		case ActionTypes.ACTION_LOADED_EVENTS:
			let events = action.payload || newState.events;
			newState = {
				events: [...newState.events, ...events],
				isLoading: false,	
				nextPage: action.nextPage,
			};
			return newState;

		default:
			return newState;
	}
}