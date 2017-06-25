import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  searchEvent,
} from '../actions/SearchEventsAction';

import {
  openEvent,
} from '../actions/EventAction';

import {
  addFavorite,
  removeFavorite,
} from '../actions/FavoriteAction';

import SearchEventScreen from '../screens/SearchEventScreen';

const mapStateToProps = (state) => ({
  events: state.searchEvents.events,
  favorites: Object.keys(state.favorite.events),
  isLoading: state.searchEvents.isLoading,
  nextPage: state.searchEvents.nextPage,
  isShowNotFound: state.searchEvents.isShowNotFound,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    searchEvent,
    openEvent,
    addFavorite,
    removeFavorite,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchEventScreen);