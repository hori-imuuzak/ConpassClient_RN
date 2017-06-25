import * as types from '../consts/ActionTypes';

const initialState = {
  events: [],
}

const favoriteEvents = new Map();

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  let event = action.payload;

  switch (action.type) {
    case types.ACTION_LOAD_FAVORITES:
      return newState;

    case types.ACTION_ADD_FAVORITE:
      if (event) {
        favoriteEvents.set(event.event_id, event);
        newState.events = favoriteEvents.values();
      }
      return newState;

    case types.ACTION_REMOVE_FAVORITE:
      if (event) {
        favoriteEvents.delete(event.event_id);
        newState.events = favoriteEvents.values();
      }
      return newState;

    default:
      return newState;
  }
}