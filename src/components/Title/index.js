import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './style';

export default class Title extends Component {
  render() {
    const {
      theme,
      children,
    } = this.props;

    return (
      <View style={[styles.container, {backgroundColor: theme}]}>
        <Text
          style={styles.text}
        >
          {children}
        </Text>
      </View>
    );
  }
}