import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadNewEvents,
} from '../actions/NewEventsAction';
import NewEventScreen from '../screens/NewEventScreen';

const mapStateToProps = (state) => ({
    newEvents: state.events.newEvents,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadNewEvents,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewEventScreen);