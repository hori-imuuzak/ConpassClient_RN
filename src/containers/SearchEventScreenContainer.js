import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  clearSearch,
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
  favorites: state.favorite.events,
  isSearching: state.searchEvents.isSearching,
  nextPage: state.searchEvents.nextPage,
  isShowNotFound: state.searchEvents.isShowNotFound,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    clearSearch,
    searchEvent,
    openEvent,
    addFavorite,
    removeFavorite,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchEventScreen);