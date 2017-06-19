import React, { Component } from 'react';
import {
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from 'react-native';

import EventItem from '../components/EventItem';

const styles = {
	itemStyle: {
		height: 144,
	},
	indicator: {
		flex: 1,
		alignSelf: 'center',
	},
	backgroundWhite: {
		backgroundColor: 'white',
	},
}

export default class NewEventScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: props.events,
			isLoading: props.isLoading,
			page: props.nextPage,
		}

		this.renderEvent = this.renderEvent.bind(this);
		this.renderIndicator = this.renderIndicator.bind(this);
		this.renderRow = this.renderRow.bind(this);
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

	renderEvent(event) {
		return (
			<View style={styles.itemStyle}>
				<EventItem
					event={event.item}
					onPress={() => {
						this.props.openEvent(this.props.navigation, event.item)
					}} />
			</View>
		)
	}

	renderIndicator() {
		return (
			<View style={[styles.itemStyle, styles.backgroundWhite]}>
				<ActivityIndicator
					style={styles.indicator}
					animating
				/>
			</View>
		)
	}

	renderRow(event) {
		return this.renderEvent(event);
	}

	render() {
		const {
			events,
			isLoading,
			nextPage,
		} = this.state;

		const {
			loadNewEvents
		} = this.props;

		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={events}
					renderItem={this.renderRow}
					keyExtractor={(item, index) => index}
					onViewableItemsChanged={(info) => {
						const tailItemIndex = info.changed[info.changed.length - 1].index;
						if (!isLoading && tailItemIndex === events.length - 1) {
							loadNewEvents(nextPage);
						}
					}} />
				{isLoading ? this.renderIndicator() : null}
			</View>
		);
	}
}