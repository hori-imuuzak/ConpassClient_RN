import { StyleSheet } from 'react-native';

const iconSize = 128;

export default StyleSheet.create({
  container : {
  },
  circleIcon: {
    width: iconSize,
    height: iconSize,
    borderRadius: iconSize / 2,
  },
  indicator: {
    height: iconSize,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});