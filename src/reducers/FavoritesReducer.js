import { types } from '../consts/ActionTypes';

const initialState = {
  events: {},
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  const event = action.payload;

  switch (action.type) {
    case types.ACTION_LOAD_FAVORITES:
      return newState;

    case types.ACTION_ADD_FAVORITE:
      if (event.event_id) {
        newState.events[event.event_id] = event;
      }
      return newState;

    case types.ACTION_REMOVE_FAVORITE:
      if (event.event_id) {
        delete newState.events[event.event_id];
      }
      return newState;

    default:
      return newState;
  }
}