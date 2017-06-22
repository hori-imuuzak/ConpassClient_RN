import axios from 'axios';

import * as API from '../consts/API';

import { types } from '../consts/ActionTypes';

const fetchNewEvents = (page) => {
	return new Promise((resolve, reject) => {
		const url = API.GET_NEW_EVENTS.replace("p0", page);
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
		dispatch({ type: types.ACTION_LOADING_EVENTS });

		fetchNewEvents(page)
			.then((response) => {
				dispatch({
					type: types.ACTION_LOADED_EVENTS,
					payload: response.data.events,
					nextPage: page + 1,
				})
			})
			.catch((error) => {
				dispatch({
					type: types.ACTION_LOADED_EVENTS,
					payload: [],
				})
			});
	}
}