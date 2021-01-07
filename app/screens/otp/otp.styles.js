import { StyleSheet } from 'react-native';
import {COLOR, width, height} from '../../constants';
import { FontHelper } from '../../helpers';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  container: {
    width: width * 0.86,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: height * 0.06,
  },
  messageContainer: {
    padding: 11,
    marginTop: 34,
    backgroundColor: 'rgba(189,198,207, 0.1)',
  },
  message: {
    fontSize: 14,
    lineHeight: 24,
  },
  underline: {
    textDecorationLine: 'underline'
  },
  inputRow: {
    width: 259,
    marginTop: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    width: 58,
    height: 64,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    ...FontHelper({
      fontSize: 30,
      fontWeight: '300',
    }),
    textAlign: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  button: {
    width: '100%',
    height: 40,
    marginTop: 40,
    backgroundColor: COLOR.BUTTON_BROWN,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: COLOR.WHITE,
    fontSize: 20,
    fontWeight: '600',
  },
  didNotreceive: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 26,
    alignSelf: 'center',
    color: '#707070'
  },
  resend: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 11,
    color: COLOR.PRIMARY_COLOR,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;
