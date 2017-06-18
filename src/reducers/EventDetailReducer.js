import { ActionTypes } from '../actions/EventAction';

let initialState = {
	event: {},
}

export default (state = initialState, action = {}) => {
	let newState = Object.assign({}, state);

	switch (ActionTypes.type) {
		case ActionTypes.ACTION_OPEN_EVENT:
			newState.event = action.payload || {};
			return newState;

		default:
			return newState;
	}
}