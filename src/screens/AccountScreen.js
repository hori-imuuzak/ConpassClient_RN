import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import Title from '../components/Title';

const styles = {
	container: {
		flex: 1,
	}
}

export default class EventScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Title
					theme={'green'}
				>
					アカウント設定
				</Title>
				<Text>アカウント情報(特に意味がない画面)</Text>
				<Text>アカウント名・アイコンを設定する</Text>
				<Text>アイコンはカメラ・アルバムから取得できるようにする</Text>
			</View>
		);
	}
}