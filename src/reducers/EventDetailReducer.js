import { types } from '../consts/ActionTypes';

const initialState = {
	event: {},
}

export default (state = initialState, action = {}) => {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.ACTION_OPEN_EVENT:
			newState.event = action.payload || {};
			return newState;

		default:
			return newState;
	}
}