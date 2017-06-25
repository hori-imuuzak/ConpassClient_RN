import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FavoriteScreen from '../screens/FavoriteScreen';

import {
  openEvent,
} from '../actions/EventAction';

import {
  loadFavorites,
  addFavorite,
  removeFavorite,
} from '../actions/FavoriteAction';

const mapStateToProps = (state) => ({
  events: Object.values(state.favorite.events),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    openEvent,
    loadFavorites,
    addFavorite,
    removeFavorite,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);