import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import Title from '../components/Title';

import EventList from '../components/EventList';

const styles = {
	container: {
		flex: 1,
	},
	favoriteEmpty: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
}

export default class FavoriteScreen extends Component {
	constructor(props) {
		super(props);

		this.renderFavoriteEmpty = this.renderFavoriteEmpty.bind(this);
	}

	componentDidMount() {
		this.props.loadFavorites();
	}

	renderFavoriteEmpty() {
		return (
			<View style={styles.favoriteEmpty}>
				<Text>お気に入りはまだありません。</Text>
				<Text>気になるイベントはストックしましょう。</Text>
			</View>
		)
	}

	render() {
		const {
			events,
			openEvent,
			navigation,
		} = this.props;

		return (
			<View style={styles.container}>
				<Title
					theme='mediumvioletred'
				>
					お気に入り
				</Title>
				{events.length === 0 ? this.renderFavoriteEmpty() :
					<EventList
						dataList={events}
						favoriteList={events}
						onClickItem={(event) => { openEvent(navigation, event) }}
					/>
				}
			</View>
		);
	}
}