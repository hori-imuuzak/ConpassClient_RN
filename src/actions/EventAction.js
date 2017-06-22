import { types } from '../consts/ActionTypes';

export const openEvent = (navigation, event) => {
	navigation.navigate('EventScreen');
	
	return {
		type: types.ACTION_OPEN_EVENT,
		payload: event,
	}
}