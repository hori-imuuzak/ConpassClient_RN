import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Button,
} from 'react-native';

import { StyleSheet } from 'react-native';

import ImagePicker from 'react-native-image-picker';

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

const pickerOptions = {
	title: 'アイコンを選択',
};

export default class EventScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nickname: '',
			inputNickname: '',
			userIcon: '',
		};

		this.inputedNickname = this.inputedNickname.bind(this);
		this.showImagePicker = this.showImagePicker.bind(this);
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

	showImagePicker() {
		this.setState({
			isImageLoading: true,
		});

		ImagePicker.showImagePicker(pickerOptions, (response) => {
			if (response.didCancel) {
				this.setState({
					isImageLoading: false,
				});

			} else if (response.error) {
				this.setState({
					isImageLoading: false,
				});

			} else {
				const imageSource = { uri: response.uri };
				this.setState({
					userIcon: imageSource,
					isImageLoading: false,
				});
			}
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
			nickname,
			userIcon,
			isImageLoading,
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
						source={userIcon}
						onPress={this.showImagePicker}
						isLoading={isImageLoading}
					/>
				</View>
				{nickname.length > 0 ? this.renderRelationshipEvent() : null}
			</View>
		);
	}
}