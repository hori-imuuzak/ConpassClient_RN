import React, { Component } from 'react';

import {
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './style';

import * as R from '../../consts/R';

export default class ProfileIcon extends Component {
  render() {
    const {
      source,
      onPress,
      isLoading,
    } = this.props;

    let imageUri;
    if (source === '') {
      imageUri = R.IMAGE_ACCOUNT_DEFAULT;
    } else {
      imageUri = source;
    }

    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <View>
          <Image
            style={styles.circleIcon}
            source={imageUri}
          />
          {isLoading ?
            <ActivityIndicator
              style={styles.indicator}
            /> : null}
        </View>
      </TouchableOpacity>
    );
  }
}