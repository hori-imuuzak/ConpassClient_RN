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
    newEvents: state.events.newEvents,
    eventDetail: state.events.eventDetail,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadNewEvents,
    openEvent,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewEventScreen);