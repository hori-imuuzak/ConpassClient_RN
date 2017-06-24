import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: 140,
		padding: 10,
		backgroundColor: 'white',
	},
	horizontalLayout: {
		flex: 1,
		flexDirection: 'row',
	},
	favoriteButton: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 4,
		bottom: 4,
		opacity: 0.5,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
})