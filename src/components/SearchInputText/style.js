import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    flex: 9,
    height: 32,
    borderColor: 'gray',
    alignSelf: 'center',
    marginLeft: 8,
    backgroundColor: 'white',
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
})