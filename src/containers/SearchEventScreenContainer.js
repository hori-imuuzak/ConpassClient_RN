import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  searchEvent,
} from '../actions/SearchEventsAction';

import {
  openEvent,
} from '../actions/EventAction';
import SearchEventScreen from '../screens/SearchEventScreen';

import {
  addFavorite,
  removeFavorite,
} from '../actions/FavoriteAction';

const mapStateToProps = (state) => ({
  events: state.searchEvents.events,
  isLoading: state.searchEvents.isLoading,
  nextPage: state.searchEvents.nextPage,
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