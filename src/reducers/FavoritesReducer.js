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
      if (event.item.event_id) {
        newState.events[event.item.event_id] = event.item;
      }
      return newState;

    case types.ACTION_REMOVE_FAVORITE:
      if (event.item.event_id) {
        delete newState.events[event.item.event_id];
      }
      return newState;

    default:
      return newState;
  }
}