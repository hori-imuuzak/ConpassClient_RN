import React, { Component } from 'react';
import {
	Modal,
	View,
	Text,
	Animated,
} from 'react-native';

import styles from './style';

export default class SearchingModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: props.visible,

			animWidth: new Animated.Value(100),
			animHeight: new Animated.Value(100),
			animBorderRadius: 100 / 2,
		};

		this.searchingAnimation = this.searchingAnimation.bind(this);
	}

	searchingAnimation() {
		Animated.sequence([
			Animated.parallel([
				Animated.timing(
					this.state.animWidth,
					{
						toValue: 200,
						duration: 600,
					}
				),
				Animated.timing(
					this.state.animHeight,
					{
						toValue: 200,
						duration: 600,
					}
				),
			]),
			Animated.parallel([
				Animated.timing(
					this.state.animWidth,
					{
						toValue: 100,
						duration: 800,
					}
				),
				Animated.timing(
					this.state.animHeight,
					{
						toValue: 100,
						duration: 800,
					}
				),
			])
		]).start(() => {
			this.searchingAnimation();
		})
	}

	componentDidMount() {
		this.searchingAnimation();

		this.state.animWidth.addListener((obj) => {
			this.setState({
				animBorderRadius: obj.value / 2,
			});
		})
	}

	componentWillUnmount() {
		this.state.animWidth.removeAllListeners();
	}

	render() {
		const {
			visible
		} = this.state;

		return (
			<Modal
				animationType="slide"
				visible={visible}
				transparent
			>
				<View
					style={{
						flex: 1,
					}}>
					<View
						style={styles.modalFlex}>
					</View>
					<View
						style={[styles.modalFlex, styles.modalContainer]}
					>
						<Animated.View style={{
							width: this.state.animWidth,
							height: this.state.animHeight,
							borderRadius: this.state.animBorderRadius,
							backgroundColor: 'aquamarine',

							opacity: 0.8,
							alignItems: 'center',
							justifyContent: 'center',
						}}>
							<Text
								style={styles.searchText}
							>
								検索中
						</Text>
						</Animated.View>
					</View>
				</View>
			</Modal>
		);
	}
}