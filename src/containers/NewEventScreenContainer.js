import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadNewEvents,
} from '../actions/NewEventsAction';
import {
  openEvent,
} from '../actions/EventAction';
import NewEventScreen from '../screens/NewEventScreen';

const mapStateToProps = (state) => ({
  events: state.newEvents.events,
  isLoading: state.newEvents.isLoading,
  nextPage: state.newEvents.nextPage,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadNewEvents,
    openEvent,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewEventScreen);