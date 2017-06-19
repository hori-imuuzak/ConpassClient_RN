import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from 'react-native';

import * as R from '../consts/R';

const styles = {
	label: {
		marginVertical: 12,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		height: 40,
		justifyContent: 'center',
	},
	inputText: {
		flex: 9,
		height: 32,
		borderColor: 'gray',
		borderWidth: StyleSheet.hairlineWidth,
	},
	searchButtonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 8,
	},
	searchButton: {
		width: 24,
		height: 24,
	},
}

export default class SearchEventScreen extends Component {
	render() {
		return (
			<View style={{
				flex: 1
			}}>
				<Text style={styles.label}>キーワード</Text>
				<View
					style={styles.inputContainer}
				>
					<TextInput
						maxLength={200}
						style={styles.inputText}
					/>
					<TouchableOpacity
						style={styles.searchButtonContainer}
						onPress={() => { }}
					>
						<Image
							source={R.ICON_SEARCH_BUTTON}
							style={styles.searchButton}
						/>
					</TouchableOpacity>
				</View>
				<View>
				</View>
			</View>
		);
	}
}