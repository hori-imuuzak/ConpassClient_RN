/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Navigation from './routes/Navigation';

export default class App extends Component {
  render() {
    return (
			<Provider store={Store()}>
	      <Navigation />
			</Provider>
    );
  }
}