import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Button,
} from 'react-native';

import { StyleSheet } from 'react-native';

import Title from '../components/Title';

import ProfileIcon from '../components/ProfileIcon';

import EventList from '../components/EventList';

const commonMargin = 12;
const tabRadius = 12;

const styles = {
	container: {
		flex: 1,
	},
	inputContainer: {
		height: 22,
		flexDirection: 'row',
		borderBottomColor: 'gray',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginHorizontal: commonMargin,
	},
	input: {
		flex: 1,
	},
	okButton: {
		height: 22,
		paddingHorizontal: 12,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'gray',
		borderRadius: 4,
	},

	imageContainer: {
		alignItems: 'center',
		marginTop: commonMargin,
	},

	eventTabContainer: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 40,
		marginTop: commonMargin,
		marginHorizontal: commonMargin,
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

		this.state = {
			nickname: '',
			inputNickname: '',
		};

		this.inputedNickname = this.inputedNickname.bind(this);
		this.handleInputNickname = this.handleInputNickname.bind(this);
		this.renderRelationshipEvent = this.renderRelationshipEvent.bind(this);
		this.renderHostEventButton = this.renderHostEventButton.bind(this);
		this.renderGuestEventButton = this.renderGuestEventButton.bind(this);
	}

	inputedNickname() {
		const {
			inputNickname,
		} = this.state;

		this.setState({
			nickname: inputNickname,
		});
	}

	handleInputNickname(inputText) {
		this.setState({
			inputNickname: inputText,
		});
	}

	renderHostEventButton() {
		return (
			<TouchableOpacity
				style={[styles.eventTab, styles.tabLeft]}
			>
				<Text style={{ color: 'white' }}>管理イベント</Text>
			</TouchableOpacity>
		)
	}

	renderGuestEventButton() {
		return (
			<TouchableOpacity
				style={[styles.eventTab, styles.tabRight]}
			>
				<Text style={{ color: 'white' }}>参加イベント</Text>
			</TouchableOpacity>
		)
	}

	renderRelationshipEvent() {
		return (
			<View style={{ flex: 1 }}>
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
					onFavoriteChange={() => { }/*this.favoriteChange*/}
					isLoading={true/*isLoading*/}
					onScrollBottom={() => { /*loadNewEvents(nextPage)*/ }}
				/>
			</View>
		)
	}

	render() {
		const {
			nickname
		} = this.state;

		return (
			<View style={styles.container}>
				<Title
					theme={'green'}
				>
					アカウント設定
				</Title>
				<Text style={{ marginLeft: commonMargin, marginTop: commonMargin }}>ニックネーム</Text>
				<View
					style={styles.inputContainer}
				>
					<TextInput
						style={styles.input}
						numberOfLines={1}
						onChangeText={(input) => this.handleInputNickname(input)}
					/>
					<TouchableOpacity
						style={styles.okButton}
						onPress={this.inputedNickname}
					>
						<Text>OK</Text>
					</TouchableOpacity>
				</View>
				<View
					style={styles.imageContainer}
				>
					<ProfileIcon
						url={"https://s-media-cache-ak0.pinimg.com/736x/98/2d/c3/982dc38d3028d1ebf30447506e0dd525.jpg"}
					/>
				</View>
				{nickname.length > 0 ? this.renderRelationshipEvent() : null}
			</View>
		);
	}
}