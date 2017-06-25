import React, { Component } from 'react';
import {
	Modal,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

import styles from './style';

export default class NotFoundModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true,
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			visible: nextProps.visible,
		});
	}
	
	hide() {
		this.setState({
			visible: false,
		});

		this.props.onHide();
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
				<TouchableOpacity
					activeOpacity={1}
					style={{
						flex: 1,
					}}
					onPress={this.hide.bind(this)}>
					<View
						style={styles.modalFlex}>
					</View>
					<View
						style={[styles.modalFlex, styles.modalContainer]}
					>
						<Text
							style={styles.searchText}
						>
							イベントが見つかりませんでした。
						</Text>
						<Text
							style={styles.searchText}
						>
							他のキーワードでお試しください。
						</Text>
					</View>
				</TouchableOpacity>
			</Modal>
		);
	}
}