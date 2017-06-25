import { types } from '../consts/ActionTypes';

export const loadFavorites = () => {
  return {
    type: types.ACTION_LOAD_FAVORITES,
    payload: [],
  }
}

export const addFavorite = (event) => {
	return {
		type: types.ACTION_ADD_FAVORITE,
		payload: event,
	}
}

export const removeFavorite = (event) => {
  return {
    type: types.ACTION_REMOVE_FAVORITE,
    payload: event,
  }
}