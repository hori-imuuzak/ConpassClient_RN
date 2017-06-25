import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EventScreen from '../screens/EventScreen';

import {
  addFavorite,
  removeFavorite,
} from '../actions/FavoriteAction';

const mapStateToProps = (state) => ({
  event: state.eventDetail.event,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);