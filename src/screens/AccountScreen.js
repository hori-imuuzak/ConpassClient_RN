import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

export default class EventScreen extends Component {
	render() {
		return (
			<View>
				<Text>アカウント情報(特に意味がない画面)</Text>
				<Text>アカウント名・アイコンを設定する</Text>
				<Text>アイコンはカメラ・アルバムから取得できるようにする</Text>
			</View>
		);
	}
}