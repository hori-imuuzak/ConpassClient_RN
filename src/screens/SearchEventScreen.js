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
			isSearching: props.isSearching,
			isLoading: props.isLoading,
			keyword: '',
			isShowNotFound: props.isShowNotFound,
			isFirstSearch: true,
		};

		this.handleInputKeyword = this.handleInputKeyword.bind(this);
		this.search = this.search.bind(this);
		this.searchNextPage = this.searchNextPage.bind(this);
		this.favoriteChange = this.favoriteChange.bind(this);
		this.onHideNotFound = this.onHideNotFound.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const {
			events,
			favorites,
			isSearching,
			isLoading,
			isShowNotFound,
		} = nextProps;

		this.setState({
			events: events,
			favorites: favorites,
			isSearching: isSearching,
			isLoading: isLoading,
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
		} = this.state;

		// 新しく検索
		this.props.clearSearch();
		this.props.searchEvent(1, keyword.replace('　', ' ').split(' '));

		this.setState({
			isFirstSearch: false,
		})
	}

	searchNextPage(nextPage) {
		const {
			keyword,
			isLoading,
			isSearching,
			isFirstSearch,
		} = this.state;

		if (!isLoading && !isSearching && !isFirstSearch) {
			this.props.loadEvent(nextPage, keyword.replace('　', ' ').split(' '));
		}
	}

	onHideNotFound() {
		this.props.clearSearch();
	}

	favoriteChange(event) {
		const {
			favorites
		} = this.state;

		if (Object.keys(favorites).indexOf(`${event.event_id}`) < 0) {
			this.props.addFavorite(event);
		} else {
			this.props.removeFavorite(event);
		}
	}

	render() {
		const {
			events,
			favorites,
			isSearching,
			isLoading,
			isShowNotFound,
		} = this.state;

		const {
			navigation,
			nextPage,
		} = this.props;

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
					onFavoriteChange={this.favoriteChange}
					isLoading={isLoading}
					onScrollBottom={() => { this.searchNextPage(nextPage) }}
				/>
				{isSearching ?
					<SearchingModal
						visible={isSearching}
					/>
					: null}
				<NotFoundModal
					visible={isShowNotFound}
					onHide={this.onHideNotFound}
				/>
			</View>
		);
	}
}