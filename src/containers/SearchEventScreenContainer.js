import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  searchEvent,
} from '../actions/SearchEventsAction';
import {
  openEvent,
} from '../actions/EventAction';
import SearchEventScreen from '../screens/SearchEventScreen';

const mapStateToProps = (state) => ({
  events: state.searchEvents.events,
  isLoading: state.searchEvents.isLoading,
  nextPage: state.searchEvents.nextPage,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    searchEvent,
    openEvent,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchEventScreen);