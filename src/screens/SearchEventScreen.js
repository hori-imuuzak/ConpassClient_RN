import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from 'react-native';

import SearchingModal from '../components/SearchingModal';

import SearchInputText from '../components/SearchInputText';

const styles = {
	label: {
		marginVertical: 12,
		marginLeft: 8,
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
				<SearchInputText
					onInputText={this.handleInputKeyword.bind(this)}
					onClickSearch={this.search.bind(this)}
				/>
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