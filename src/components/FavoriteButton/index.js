import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './style';

import * as R from '../../consts/R';

export default class FavoriteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: props.isFavorite || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isFavorite: nextProps.isFavorite,
    });
  }

  render() {
    const {
      onPress,
    } = this.props;

    const {
      isFavorite,
    } = this.state;

    const favoriteImage = (isFavorite ? R.IMAGE_FAVORITED : R.IMAGE_FAVORITE_NONE);

    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <Image
          style={styles.favImage}
          source={favoriteImage}
        />
      </TouchableOpacity>
    );
  }
}