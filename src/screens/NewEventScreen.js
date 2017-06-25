import React, { Component } from 'react';
import {
	View,
} from 'react-native';

import EventList from '../components/EventList';

import Title from '../components/Title';

const styles = {
	container: {
		flex: 1,
	}
}

export default class NewEventScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: props.events,
			favorites: props.favorites,
			isLoading: props.isLoading,
			page: props.nextPage,
		}

		this.favoriteChange = this.favoriteChange.bind(this);
	}

	componentWillMount() {
		this.props.loadNewEvents(this.state.page);
	}

	componentWillReceiveProps(nextProps) {
		const {
			events,
			favorites,
			isLoading,
			nextPage,
		} = nextProps;

		this.setState({
			events: events,
			favorites: favorites,
			isLoading: isLoading,
			nextPage: nextPage,
		});
	}

	favoriteChange(event) {
		const {
			favorites
		} = this.state;

		if (favorites.filter((i) => (i.event_id === event.event_id)).length === 0) {
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
		} = this.state;

		const {
			navigation,
			loadNewEvents,
		} = this.props;

		return (
			<View style={styles.container}>
				<Title
					theme='orangered'
				>
					新着イベント
				</Title>
				<EventList
					dataList={events}
					favoriteList={favorites}
					onClickItem={(event) => { this.props.openEvent(navigation, event) }}
					onFavoriteChange={this.favoriteChange}
					isLoading={isLoading}
					onScrollBottom={() => { loadNewEvents(nextPage) }}
				/>
			</View>
		)
	}
}