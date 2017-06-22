import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	StyleSheet,
	Alert,
} from 'react-native';

import SearchingModal from '../components/SearchingModal';

import NotFoundModal from '../components/NotFoundModal';

import SearchInputText from '../components/SearchInputText';

import EventList from '../components/EventList';

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
			notFound: false,
		};

		this.handleInputKeyword = this.handleInputKeyword.bind(this);
		this.search = this.search.bind(this);
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
			notFound: (!isLoading && events.length === 0),
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

	searchNextPage(nextPage) {

	}

	modalEventNotFound() {

	}

	render() {
		const {
			events,
			isLoading,
			nextPage,
			notFound,
		} = this.state;

		const {
			navigation,
		} = this.props;

		return (
			<View style={{
				flex: 1
			}}>
				<Text style={styles.label}>キーワード</Text>
				<SearchInputText
					onInputText={this.handleInputKeyword}
					onClickSearch={this.search}
				/>
				<EventList
					dataList={events}
					onClickItem={(event) => { this.props.openEvent(navigation, event) }}
					isLoading={isLoading}
					onScrollBottom={() => { }}
				/>
				<View>
					{
						isLoading ?
							<SearchingModal
								visible
							/> : null
					}
					{
						notFound ?
							<NotFoundModal
								visible
							/> : null
					}
				</View>
			</View>
		);
	}
}