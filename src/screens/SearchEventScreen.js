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

import Title from '../components/Title';

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
			favorites: props.favorites,
			isLoading: props.isLoading,
			page: props.nextPage,
			keyword: '',
			isShowNotFound: props.isShowNotFound,
		};

		this.handleInputKeyword = this.handleInputKeyword.bind(this);
		this.search = this.search.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const {
			events,
			favorites,
			isLoading,
			nextPage,
			isShowNotFound,
		} = nextProps;

		this.setState({
			events: events,
			favorites: favorites,
			isLoading: isLoading,
			nextPage: nextPage,
			isShowNotFound: isShowNotFound,
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
		this.props.searchEvent(1, keyword.replace('　', ' ').split(' '));
	}

	searchNextPage(nextPage) {

	}

	onHideNotFound() {
		this.setState({
			isShowNotFound: false,
		});
	}

	favoriteChange(isFavorite, event) {
		if (isFavorite) {
			this.props.addFavorite(event);
		} else {
			this.props.removeFavorite(event);
		}
	}

	render() {
		const {
			events,
			favorites,
			isLoading,
			nextPage,
			isShowNotFound,
		} = this.state;

		const {
			navigation,
		} = this.props;

		console.log(isShowNotFound);

		return (
			<View style={{
				flex: 1
			}}>
				<Title
					theme='skyblue'
				>
					検索
				</Title>
				<Text style={styles.label}>キーワード</Text>
				<SearchInputText
					onInputText={this.handleInputKeyword}
					onClickSearch={this.search}
				/>
				<EventList
					dataList={events}
					favoriteList={favorites}
					onClickItem={(event) => { this.props.openEvent(navigation, event) }}
					onFavoriteChange={this.favoriteChange.bind(this)}
					isLoading={isLoading}
					onScrollBottom={() => { }}
				/>
				<SearchingModal
					visible={isLoading}
				/>
				<NotFoundModal
					visible={isShowNotFound}
					onHide={this.onHideNotFound.bind(this)}
				/>
			</View>
		);
	}
}