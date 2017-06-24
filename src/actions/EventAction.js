import { types } from '../consts/ActionTypes';

export const openEvent = (navigation, event) => {
	console.log('event is :', event)
	navigation.navigate('EventScreen', {event: event});
	
	return {
		type: types.ACTION_OPEN_EVENT,
		payload: event,
	}
}