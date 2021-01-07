import { StyleSheet } from 'react-native';
import {COLOR, width, height} from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  headerContainer: {
    width: width,
    height: height * 0.13,
  },
  paymentHeader:{
    width: width,
    height: height * 0.13,
    ...StyleSheet.absoluteFillObject,
    zIndex: -10,
  },
  sectionHeading: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.WHITE,
    marginTop: height * 0.056,
  },
  paymentInfo: {
    marginTop: 39,
    paddingLeft: 16,
  },
  order: {
    fontSize: 14,
    fontWeight: '300',
    color: COLOR.WHITE,
    marginBottom: 5,
  },
  price:{
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
    marginBottom: height * 0.0455,
  },
  subText: {
    fontSize: 18,
    fontWeight: '300',
    color: COLOR.BLACK,
    marginTop: height * 0.0334,
    marginBottom: 6,
    paddingLeft: 17,
  },
  subOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 77/812,
    justifyContent: 'space-between',
    backgroundColor: COLOR.Gray_PAYMENT,
    paddingHorizontal: 10,
  },
  subInnerContainerOne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.35,
    paddingHorizontal:20,
  },
  styleCheckboxContainer:{
    width:30,
    height:30, 
    borderColor:COLOR.PROFILE_BG,
    borderWidth:1,
    borderRadius:29,
  },
  subInnerContainerTwo: {
    flex: 0.65
  },
  innerTextHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.BLACK,
  },
  innerText: {
    fontSize: 9,
    fontWeight: '300',
    color: COLOR.LIGHT_TEXT_EMPORER,
  },
  credit: {
    width: 52.5,
    height: 42,
  },
  paypalImage: {
    width: 44.21,
    height: 52.17,
  },
  cashImage: {
    width: 59,
    height: 42.86,
  },
  confirm: {
    width: width * 0.900,
    paddingVertical: 17,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    marginBottom: 20,
    marginTop: height * 0.097,
  },
  confirmTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
});

export default styles;
