import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
} from 'react-native';
import styles from './style';

export default class IconText extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {
			iconSrc,
			text,
			style,
		} = this.props;

		return (
			<View style={styles.container}>
				<Image
					source={iconSrc}
					style={styles.iconDefault} />
				<Text
					style={[styles.textDefault, style]}
					>{text}</Text>
			</View>
		);
	}
}