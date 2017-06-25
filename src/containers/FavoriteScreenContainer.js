import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FavoriteScreen from '../screens/FavoriteScreen';

import {
  addFavorite,
  removeFavorite,
} from '../actions/FavoriteAction';

const mapStateToProps = (state) => {
  return {
    events: state.favorite.events,
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addFavorite,
    removeFavorite,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);