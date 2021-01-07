import { StyleSheet } from 'react-native';
import {COLOR, width, height} from '../../constants';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  mainContainer: {
    width: width * 0.86,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: height * 0.06,
  },
  messageContainer: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    marginTop: 34,
    backgroundColor: COLOR.RESET_TEXT,
  },
  message: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: COLOR.BLACK,
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  inputContainerHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.BLACK,
  },
  wrapper: {
    borderWidth: 1,
    height: 40,
    marginTop: 10,
  },
  input: {
    fontSize: 12,
    fontWeight: '300',
    width: '100%',
    height: 40,
    paddingBottom: 0,
    marginHorizontal: 7,
  },
  resetButton: {
    width: '100%',
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: COLOR.PROFILE_BG,
    marginTop: 28,
  },
  resetButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
});

export default styles;
