import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

export default class FavoriteScreen extends Component {
	constructor(props) {
		super(props);

		console.log(props);
	}

	render() {
		return (
			<View>
				<Text>お気に入り</Text>
				<Text>登録は詳細画面でできるようにする</Text>
				<Text>解除はこの画面からできるようにする</Text>
			</View>
		);
	}
}