import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from 'react-native';

import * as R from '../consts/R';
import SearchingModal from '../components/SearchingModal';

const styles = {
	label: {
		marginVertical: 12,
		marginLeft: 8,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputText: {
		flex: 9,
		height: 32,
		borderColor: 'gray',
		alignSelf: 'center',
		marginLeft: 8,
		backgroundColor: 'white',
		borderWidth: StyleSheet.hairlineWidth,
	},
	searchButtonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 8,
	},
	searchButton: {
		width: 24,
		height: 24,
	},
}

export default class SearchEventScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: props.events,
			isLoading: props.isLoading,
			page: props.nextPage,
			keyword: '',
		};
	}

	componentWillReceiveProps(nextProps) {
		const {
			events,
			isLoading,
			nextPage,
		} = nextProps;

		this.setState({
			events: events,
			isLoading: isLoading,
			nextPage: nextPage,
		});
	}

	handleInputKeyword(input) {
		this.setState({
			keyword: input,
		});
	}

	search() {
		const {
			keyword,
			page,
		} = this.state;

		// 新しく検索
		this.props.searchEvent(1, keyword.replace('　', ' ').split(' '))
	}

	render() {
		const {
			isLoading
		} = this.state;

		return (
			<View style={{
				flex: 1
			}}>
				<Text style={styles.label}>キーワード</Text>
				<View
					style={styles.inputContainer}
				>
					<TextInput
						maxLength={200}
						style={styles.inputText}
						onChangeText={this.handleInputKeyword.bind(this)}
					/>
					<TouchableOpacity
						style={styles.searchButtonContainer}
						onPress={this.search.bind(this)}
					>
						<Image
							source={R.ICON_SEARCH_BUTTON}
							style={styles.searchButton}
						/>
					</TouchableOpacity>
				</View>
				<View>
					{
						isLoading ?
							<SearchingModal
								visible
							/> : null
					}
				</View>
			</View>
		);
	}
}