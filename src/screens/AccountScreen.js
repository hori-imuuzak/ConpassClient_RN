import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import { StyleSheet } from 'react-native';

import Title from '../components/Title';

import ProfileIcon from '../components/ProfileIcon';

import EventList from '../components/EventList';

const tabRadius = 12;

const styles = {
	container: {
		flex: 1,
	},
	inputContainer: {
		height: 22,
		borderBottomColor: 'gray',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	input: {
		flex: 1,
	},

	imageContainer: {
		alignItems: 'center',
		marginTop: 16,
	},

	eventTabContainer: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 40,
		marginTop: 10,
		marginLeft: 12,
		marginRight: 12,
	},
	eventTab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: StyleSheet.hairlineWidth,
		backgroundColor: 'skyblue',
	},
	tabLeft: {
		borderTopLeftRadius: tabRadius,
		borderBottomLeftRadius: tabRadius,
	},
	tabRight: {
		borderTopRightRadius: tabRadius,
		borderBottomRightRadius: tabRadius,
	},
};

export default class EventScreen extends Component {
	constructor(props) {
		super(props);

		this.renderHostEventButton = this.renderHostEventButton.bind(this);
		this.renderGuestEventButton = this.renderGuestEventButton.bind(this);
	}

	renderHostEventButton() {
		return (
			<TouchableOpacity
				style={[styles.eventTab, styles.tabLeft]}
			>
				<Text>管理イベント</Text>
			</TouchableOpacity>
		)
	}

	renderGuestEventButton() {
		return (
			<TouchableOpacity
				style={[styles.eventTab, styles.tabRight]}
			>
				<Text>参加イベント</Text>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<Title
					theme={'green'}
				>
					アカウント設定
				</Title>
				<Text>ニックネーム</Text>
				<View
					style={styles.inputContainer}
				>
					<TextInput
						style={styles.input}
						numberOfLines={1}
					/>
				</View>
				<View
					style={styles.imageContainer}
				>
					<ProfileIcon
						url={"https://s-media-cache-ak0.pinimg.com/736x/98/2d/c3/982dc38d3028d1ebf30447506e0dd525.jpg"}
					/>
				</View>
				<View
					style={styles.eventTabContainer}
				>
					{this.renderHostEventButton()}
					{this.renderGuestEventButton()}
				</View>
				<EventList
					dataList={[]}
					favoriteList={[]}
					onClickItem={(event) => { /*this.props.openEvent(navigation, event)*/ }}
					onFavoriteChange={ () => {}/*this.favoriteChange*/ }
					isLoading={ true/*isLoading*/ }
					onScrollBottom={() => { /*loadNewEvents(nextPage)*/ }}
				/>
			</View>
		);
	}
}