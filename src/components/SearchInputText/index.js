import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import * as R from '../../consts/R';

import styles from './style';

export default class SearchInputText extends Component {
  render() {
    const {
      onInputText,
      onClickSearch,
    } = this.props;

    return (
      <View
        style={styles.inputContainer}
      >
        <TextInput
          maxLength={200}
          style={styles.inputText}
          onChangeText={(text) => { onInputText(text) }}
        />
        <TouchableOpacity
          style={styles.searchButtonContainer}
          onPress={() => { onClickSearch() }}
        >
          <Image
            source={R.ICON_SEARCH_BUTTON}
            style={styles.searchButton}
          />
        </TouchableOpacity>
      </View>
    );
  }
}