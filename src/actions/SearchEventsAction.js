import axios from 'axios';

import * as API from '../consts/API';

import { types } from '../consts/ActionTypes';

import consts from '../consts';

const searchEvents = (page, keywordList) => {
	return new Promise((resolve, reject) => {
		const url = API.SEARCH_EVENTS
			.replace("p0", page * consts.perPage)
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
	return fetchEvents(page, keywordList, types.ACTION_SEARCHING_EVENTS, types.ACTION_SEARCHED_EVENTS);
}

export const loadEvent = (page, keywordList) => {
	return fetchEvents(page, keywordList, types.ACTION_SEARCHING_NEXT, types.ACTION_SEARCHED_NEXT);
}

const fetchEvents = (page, keywordList, proccesingAction, doneAction) => {
	return (dispatch, getState) => {
		dispatch({ type: proccesingAction });

		searchEvents(page, keywordList)
			.then((response) => {
				dispatch({
					type: doneAction,
					payload: response.data.events,
					nextPage: page + 1,
				})
			})
			.catch((error) => {
				dispatch({
					type: doneAction,
					payload: [],
				})
			});
	}
}