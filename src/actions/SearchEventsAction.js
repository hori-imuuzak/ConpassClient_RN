import axios from 'axios';

import * as API from '../consts/API';

import { types } from '../consts/ActionTypes';

const searchEvents = (page, keywordList) => {
	return new Promise((resolve, reject) => {
		const url = API.SEARCH_EVENTS
			.replace("p0", page)
			.replace("p1", keywordList.join(','));
		
		axios.get(url)
			.then((response) => {
				resolve(response);

			}).catch((error) => {
				reject(error);
			})
	})
}

export const clearSearch = () => {
	return {
		type: types.ACTION_CLEAR_SEARCH,
	};
}

export const searchEvent = (page, keywordList) => {
	return (dispatch, getState) => {
		dispatch({ type: types.ACTION_SEARCHING_EVENTS });

		searchEvents(page, keywordList)
			.then((response) => {
				dispatch({
					type: types.ACTION_SEARCHED_EVENTS,
					payload: response.data.events,
					nextPage: page + 1,
				})
			})
			.catch((error) => {
				dispatch({
					type: types.ACTION_SEARCHED_EVENTS,
					payload: [],
				})
			});
	}
}