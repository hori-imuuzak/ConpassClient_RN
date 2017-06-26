import { types } from '../consts/ActionTypes';

const initialState = {
	events: [],
	favorites: [],
	isLoading: false,
	nextPage: 0,
}

export default (state = initialState, action = {}) => {
	const newState = Object.assign({}, state);

	switch (action.type) {
		case types.ACTION_LOADING_EVENTS:
			newState.isLoading = true;
			return newState;

		case types.ACTION_LOADED_EVENTS:
			const events = action.payload || newState.events;
			newState.events = [...newState.events, ...events];
			newState.isLoading = false;
			newState.nextPage = action.nextPage || newState.nextPage;
			return newState;

		case types.ACTION_ADD_FAVORITE:
			newState.favorites = [].concat(newState.favorites, action.payload);
			return newState;

		case types.ACTION_REMOVE_FAVORITE:
			const removeIndex = newState.favorites.findIndex((i) => (i.event_id === action.payload.event_id));
			newState.favorites = newState.favorites.slice(removeIndex + 1);
			return {
				...newState,
			};

		default:
			return newState;
	}
}