import axios from 'axios';

import * as API from '../consts/API';

export const ActionTypes = {
	ACTION_NEW_SEARCH: "action_new_search",
	ACTION_SEARCHING_EVENTS: "action_searching_events",
	ACTION_SEARCHED_EVENTS: "action_searched_events",
}

const searchEvents = (page, keywordList) => {
	return new Promise((resolve, reject) => {
		const url = API.SEARCH_EVENTS
			.replace("p0", page)
			.replace("p1", keywordList.join(','));
		console.log(url);
		axios.get(url)
			.then((response) => {
				resolve(response);

			}).catch((error) => {
				reject(error);
			})
	})
}

export const searchEvent = (page, keywordList) => {
	return (dispatch, getState) => {
		if (page == 1) {
			dispatch({ type: ActionTypes.ACTION_NEW_SEARCH });
		}

		dispatch({ type: ActionTypes.ACTION_SEARCHING_EVENTS });

		searchEvents(page, keywordList)
			.then((response) => {
				dispatch({
					type: ActionTypes.ACTION_SEARCHED_EVENTS,
					payload: response.data.events,
					nextPage: page + 1,
				})
			})
			.catch((error) => {
				dispatch({
					type: ActionTypes.ACTION_SEARCHED_EVENTS,
					payload: [],
				})
			});
	}
}