import React, { Component } from 'react';
import { Image } from 'react-native';
import {
	TabNavigator
} from 'react-navigation';
import * as R from '../consts/R';

import NewEventScreen from './NewEventScreen';
import SearchEventScreen from './SearchEventScreen';

export default TabNavigator({
	NewEvent: {
		screen: NewEventScreen,
		navigationOptions: {
			tabBarLabel: '新着',
			tabBarIcon: ({tintColor}) => (
				<Image
					source={R.IMAGE_NEW_EVENT}
					style={[styles.icon, {tintColor: tintColor}]} />
			)
		}
	},
	SearchEvent: {
		screen: SearchEventScreen,
		navigationOptions: {
			tabBarLabel: '検索',
			tabBarIcon: ({tintColor}) => (
				<Image
					source={R.IMAGE_SEARCH_EVENT}
					style={[styles.icon, {tintColor: tintColor}]} />
			)
		}
	},
})

const styles = {
	icon: {
		width: 22,
		height: 22,
	}
}