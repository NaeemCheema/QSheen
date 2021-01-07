import { StyleSheet } from 'react-native';
import {COLOR, width, height} from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.BACK,
  },
  mainContainer: {
    width: width * 0.92,
    alignSelf: 'center',
    borderTopRightRadius: 39,
    borderTopLeftRadius: 39,
    marginTop: height * 0.0406,
    marginBottom: height *0.01477,
  },
  innerContainer: {
    paddingTop: height * 0.1219,
    marginHorizontal:26,
  },
  inputContainer: {
    borderColor:COLOR.WHITE,
    borderBottomColor: COLOR.SHIPPING_TEXT,
    marginBottom: 30,
  },
  mNumberContainer: {
    flexDirection: 'row',
  },
  mNumberText: {
    fontWeight: '300',
    fontSize: 10,
    color: COLOR.SHIPPING_TEXT,
    bottom: 5,
  },
  mNumbervalueContainer: {
    borderColor: COLOR.SHIPPING_TEXT,
    borderWidth: 1,
    borderRadius: 8,
    width: 41,
    height:21,
    alignItems: 'center',
  },
  mNumbervalue:{
    fontSize: 14,
    color: COLOR.SHIPPING_TEXT,
  },
  input: {
    fontSize: 12,
    fontWeight: '300',
    color: COLOR.SHIPPING_TEXT,
    paddingBottom: 9,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    color: COLOR.BLACK,
    borderColor: COLOR.LIGHT_TEXT,
    borderRadius: 2,
    backgroundColor: 'transparent',
    borderWidth: 1
  },
  checkboxFont: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 5,
    color: COLOR.LOADMORE,
  },
  confirm: {
    width: width * 0.92,
    paddingVertical: 17,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    marginBottom: 20,
  },
  confirmTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
});

export default styles;