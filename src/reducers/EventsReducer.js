import {
	ActionTypes as NewEventActionTypes,
} from '../actions/NewEventsAction';
import {
	ActionTypes as EventActionTypes,
} from '../actions/EventAction';

let initialState = {
	newEvents: [],
	eventDetail: {},
}

export default (state = initialState, action = {}) => {
	let newState = Object.assign({}, state);

	switch (action.type) {
		case NewEventActionTypes.ACTION_LOAD_NEW_EVENTS:
			let events = action.payload.data.events || newState.newEvents;
			newState.newEvents = [...newState.newEvents, ...events];
			return newState;
			
		case EventActionTypes.ACTION_OPEN_EVENT:
			newState.eventDetail = action.payload || {};
			return newState;

		default:
			return newState;
	}
}