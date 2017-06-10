import {
	StackNavigator
} from 'react-navigation';

import Splash from '../screens/Splash';
import MainScreen from '../screens/MainScreen';

export const Route = {
	SPLASH: 'Splash',
	MAIN: 'MainScreen',
}

export default StackNavigator({
	Splash: {
		screen: Splash,
		navigationOptions: {
			header: null,
		}
	},
	MainScreen: {
		screen: MainScreen,
		navigationOptions: {
			title: 'conpass IT勉強会'
		}
	},
})