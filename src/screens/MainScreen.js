import React, { Component } from 'react';
import { Image } from 'react-native';
import {
	TabNavigator
} from 'react-navigation';
import * as R from '../consts/R';

import NewEventScreen from '../containers/NewEventScreenContainer';
import SearchEventScreen from '../containers/SearchEventScreenContainer';
import FavoriteScreen from '../containers/FavoriteScreenContainer';
import AccountScreen from '../screens/AccountScreen';

export default TabNavigator({
	NewEvent: {
		screen: NewEventScreen,
		navigationOptions: {
			tabBarLabel: '新着',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={R.IMAGE_NEW_EVENT}
					style={[styles.icon, { tintColor: tintColor }]} />
			)
		}
	},
	SearchEvent: {
		screen: SearchEventScreen,
		navigationOptions: {
			tabBarLabel: '検索',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={R.IMAGE_SEARCH_EVENT}
					style={[styles.icon, { tintColor: tintColor }]} />
			)
		}
	},
	Favorite: {
		screen: FavoriteScreen,
		navigationOptions: {
			tabBarLabel: 'お気に入り',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={R.IMAGE_FAVORITE}
					style={[styles.icon, { tintColor: tintColor }]} />
			)
		}
	},
	Account: {
		screen: AccountScreen,
		navigationOptions: {
			tabBarLabel: 'アカウント',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={R.IMAGE_ACCOUNT}
					style={[styles.icon, { tintColor: tintColor }]} />
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