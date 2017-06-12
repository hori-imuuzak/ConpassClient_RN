import {
	ActionTypes,
} from '../actions/NewEventsAction';

let initialState = {
	newEvents: [],
}

export default (state = initialState, action = {}) => {
	let newState = Object.assign({}, state);

	switch (action.type) {
		case ActionTypes.ACTION_LOAD_NEW_EVENTS:
			let events = action.payload.data.events || newState.newEvents;
			newState.newEvents = [...newState.newEvents, ...events];
			return newState;

		default:
			return newState;
	}
}