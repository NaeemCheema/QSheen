import { StyleSheet } from 'react-native';
import { COLOR, width } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: 40,
  },
  inputHeading: {
    fontSize: 14,
    fontWeight: '300',
    color: COLOR.TEXT_LIGHT,
    marginBottom: 6,
  },
  inputContainer: {
    width: width * 0.91,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
  },
  input: {
    fontWeight: "300",
    fontSize: 12,
  },
  forgotPWCont: {
    alignSelf: 'flex-end',
    marginTop: 18,
  },
  forgotPW: {
    fontSize: 12,
    color: COLOR.TEXT_LIGHT,
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: COLOR.BUTTON_BROWN,
    marginTop: 28,
  },
  loginButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    color: COLOR.BLACK,
    borderColor: COLOR.LIGHT_TEXT_EMPORER,
    borderRadius: 4,
    backgroundColor: 'transparent',
    borderWidth: 1
  },
  rememberMeContainer: {
    flexDirection: 'row',
    marginTop: 11,
  },
  rememberMeText: {
    fontSize: 12,
    color: COLOR.TEXT_LIGHT,
    marginLeft: 12,
  },
});

export default styles;
