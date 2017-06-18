import axios from 'axios';

import * as API from '../consts/API';

export const ActionTypes = {
	ACTION_LOADING_EVENTS: "action_loading_events",
	ACTION_LOADED_EVENTS: "action_loaded_events",
}

const PER_PAGE = 10;

const fetchNewEvents = (page) => {
	return new Promise((resolve, reject) => {
		const url = API.GET_NEW_EVENTS.replace("0", page * PER_PAGE);
		axios.get(url)
			.then((response) => {
				resolve(response);

			}).catch((error) => {
				reject(error);
			})
	})
}

export const loadNewEvents = (page) => {
	return (dispatch, getState) => {
		dispatch({ type: ActionTypes.ACTION_LOADING_EVENTS });

		fetchNewEvents(page)
			.then((response) => {
				dispatch({
					type: ActionTypes.ACTION_LOADED_EVENTS,
					payload: response.data.events,
					nextPage: page + 1,
				})
			})
			.catch((error) => {
				dispatch({
					type: ActionTypes.ACTION_LOADED_EVENTS,
					payload: [],
				})
			});
	}
}