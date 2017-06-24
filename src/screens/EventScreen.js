import React, { Component } from 'react';
import {
	ActivityIndicator,
	WebView,
	View,
} from 'react-native';

const styles = {
	container: {
		flex: 1,
	},
	indicator: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	webview: {
		flex: 1,
	},
}

export default class EventScreen extends Component {
	constructor(props) {
		super(props);

		const params = props.navigation.state.params;
		this.state = {
			event: params.event,
			isLoading: true,
		};
	}

	onLoadEnd() {
		this.setState({
			isLoading: false,
		});
	}

	render() {
		const {
			event,
			isLoading,
		} = this.state;

		return (
			<View style={styles.container}>
				<WebView
					
					source={{ uri: event.item.event_url }}
					onLoadEnd={this.onLoadEnd.bind(this)}
				/>
				{isLoading ?
					<ActivityIndicator
						style={styles.indicator}
						animating
					/> : null}
			</View>
		)
	}
}