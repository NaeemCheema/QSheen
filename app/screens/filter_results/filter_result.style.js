import { StyleSheet } from 'react-native';
import {COLOR, width, height} from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  mainContainer: {
    width: width,
    height: height,
    marginTop: height * 0.0246,
    paddingHorizontal: 16,
    flex:1,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.BLACK,
  },
  upperInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 31,
  },
  searchUpperSetting: {
    width: width * 0.435,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PROFILE_BG,
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  highlightedText: {
    fontWeight: '300',
    fontSize: 12,
    color: COLOR.WHITE,
  },
  chevronUp: {
    alignSelf:'center',
    width: 11,
    height: 6,
  },
  searchDownSetting: {
    width: width * 0.435,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.BLACK,
    paddingHorizontal: 6,
  },
  nonHighlightedText: {
    fontWeight: '300',
    fontSize: 12,
    color: COLOR.BLACK,
  },
  chevronDown: {
    width: 11,
    height: 6,
  },
  lowerContainer: {
    borderWidth: 0.5,
    borderColor: COLOR.MERCURY,
    marginBottom: 45,
  },
  touchableList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 13,
    borderColor: COLOR.MERCURY,
    borderWidth: 0.5,
  },
  listText: {
    fontSize: 19,
    fontWeight: '700',
    color: COLOR.BLACK,
  },
  plus: {
    width: 18,
    height: 18,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  applyContainer: {
    width: width * 0.362,
    height: 44,
    backgroundColor: COLOR.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyText: {
    color: COLOR.WHITE,
    fontWeight: '600',
    fontSize: 20,
  },
  cancelContainer: {
    width: width * 0.362,
    height: 44,
    borderColor: COLOR.PRIMARY_COLOR,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: COLOR.PRIMARY_COLOR,
    fontWeight: '600',
    fontSize: 20,
  },
});

export default styles;