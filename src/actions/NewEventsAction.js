import axios from 'axios';

import * as API from '../consts/API';

export const ActionTypes = {
	ACTION_LOAD_NEW_EVENTS: "action_load_new_events",
}

export const loadNewEvents = () => {
	return {
		type: ActionTypes.ACTION_LOAD_NEW_EVENTS,
		payload: axios.get(API.GET_NEW_EVENTS)
			.then((response) => {
				console.log(response);
				return response;
			}).catch((error) => {
				console.log(error);
				return {}
			})
	}
}