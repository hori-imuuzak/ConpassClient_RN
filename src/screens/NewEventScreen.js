import React, { Component } from 'react';
import {
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from 'react-native';

import EventList from '../components/EventList';

export default class NewEventScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: props.events,
			isLoading: props.isLoading,
			page: props.nextPage,
		}
	}

	componentWillMount() {
		this.props.loadNewEvents(this.state.page);
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

	render() {
		const {
			events,
			isLoading,
			nextPage,
		} = this.state;

		const {
			navigation,
			loadNewEvents,
		} = this.props;

		return (
			<EventList
				dataList={events}
				onClickItem={(event) => { this.props.openEvent(navigation, event) }}
				isLoading={isLoading}
				onScrollBottom={() => { loadNewEvents(nextPage) }}
			/>
		)
	}
}