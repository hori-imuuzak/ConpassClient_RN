import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
	Animated,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Route } from '../routes/Navigation';
import * as R from '../consts/R';

export default class Splash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logoRotate: new Animated.Value(0),
		}
	}

	componentDidMount() {
		Animated.spring(
			this.state.logoRotate,
			{
				toValue: 1,
				friction: 2,
			}
		).start();

		this.timer = setTimeout(() => {
			const resetAction = NavigationActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({
						routeName: Route.MAIN
					})
				]
			})
			this.props.navigation.dispatch(resetAction);
		}, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		let deg = this.state.logoRotate.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg'],
		});

		return (
			<View style={styles.container}>
				<Animated.Image
					source={R.IMAGE_CONPASS}
					style={[styles.logo,
					{
						transform: [{
							rotate: deg,
						}]
					}]} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		marginVertical: 8,
	},
	logo: {
		width: 60,
		height: 60,
	},
}