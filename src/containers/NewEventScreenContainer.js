import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  loadNewEvents,
} from '../actions/NewEventsAction';

import {
  openEvent,
} from '../actions/EventAction';

import {
  addFavorite,
  removeFavorite,
} from '../actions/FavoriteAction';

import NewEventScreen from '../screens/NewEventScreen';

const mapStateToProps = (state) => ({
  events: state.newEvents.events,
  favorites: state.favorite.events,
  isLoading: state.newEvents.isLoading,
  nextPage: state.newEvents.nextPage,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadNewEvents,
    openEvent,
    addFavorite,
    removeFavorite,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewEventScreen);