import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EventScreen from '../screens/EventScreen';

const mapStateToProps = (state) => ({
  event: state.eventDetail.event,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);