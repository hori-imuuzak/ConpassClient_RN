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

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite() {
    const {
      onFavoriteChange,
    } = this.props;

    const {
      isFavorite,
    } = this.state;

    const nextFavorite = !isFavorite;

    this.setState({
      isFavorite: nextFavorite,
    });

    onFavoriteChange(nextFavorite);
  }

  render() {
    const {
      isFavorite,
    } = this.state;

    const favoriteImage = (isFavorite ? R.IMAGE_FAVORITED : R.IMAGE_FAVORITE_NONE);
    return (
      <TouchableOpacity
        onPress={this.toggleFavorite}
      >
        <Image
          style={styles.favImage}
          source={favoriteImage}
        />
      </TouchableOpacity>
    );
  }
}