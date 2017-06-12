export const ActionTypes = {
	ACTION_OPEN_EVENT: "action_open_event",
}

export const openEvent = (navigation, event) => {
	navigation.navigate('EventScreen');
	
	return {
		type: ActionTypes.ACTION_OPEN_EVENT,
		payload: event,
	}
}