import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	modalFlex: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		backgroundColor: 'white',
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: 'gray',
	},
	searchText: {
		fontSize: 18,
		color: 'black',
	}
})