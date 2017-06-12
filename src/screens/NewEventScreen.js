import React, { Component } from 'react';
import {
	Text,
	View,
	FlatList,
} from 'react-native';

import EventItem from '../components/EventItem';

const itemStyle = {
	height: 144,
}

export default class NewEventScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: props.newEvents,
		}

		this.renderRow = this.renderRow.bind(this);
	}

	componentWillMount() {
		this.props.loadNewEvents();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			events: nextProps.newEvents,
		});
	}

	renderRow(event) {
		const key = this.state.events.indexOf(event);
		return (
			<View key={key} style={itemStyle}>
				<EventItem
					event={event.item}
					onPress={() => {
						this.props.openEvent(this.props.navigation, event.item)
					}} />
			</View>
		)
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={this.state.events}
					renderItem={this.renderRow}
					onViewableItemsChanged={(info) => {
						// これで一番下にいるindexは取れるので、更新中のstateを持てば更新できそう
						//   アクションを常に飛ばして、アクション側でstateを変えるかどうか判別する?
						//	 or Componentのレベルでアクションを飛ばすかどうかにする？
						const len = info.changed.length;
						console.log(info.changed[len - 1].index);
						}} />
			</View>
		);
	}
}