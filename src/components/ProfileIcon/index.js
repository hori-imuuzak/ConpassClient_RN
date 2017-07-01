import React, { Component } from 'react';

import {
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

export default class ProfileIcon extends Component {
  render() {
    const {
      url
    } = this.props;

    return (
      <TouchableOpacity>
        <Image
          style={styles.circleIcon}
          source={{ url: url }}
        />
      </TouchableOpacity>
    );
  }
}