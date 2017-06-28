/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from './Store';
import Navigation from './containers/NavigationContainer';

export default class App extends Component {
  render() {
    return (
			<Provider store={configStore()}>
	      <Navigation />
			</Provider>
    );
  }
}