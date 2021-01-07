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
  mainContainer: {
    width: width * 0.86,
    alignSelf: 'center',
  },
  upperContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockImage: {
    width:18,
    height:20,
  },
  lockDetail: {
    fontWeight: '300',
    fontSize: 14,
    color: COLOR.DESIGNER_LOC,
    marginLeft: 7,
  },
  logoContainer: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingTop: 25,
    marginBottom: 63,
  },
  logoA: {
    width: 64,
    height: 21,
  },
  logoB: {
    width: 36,
    height: 22,
  },
  logoC: {
    width: 65,
    height: 22,
  },
  inputContainer:{
    borderColor:COLOR.WHITE,
    borderBottomColor: COLOR.DESIGNER_LOC,
    marginBottom: 46.5,
  },
  inputExpiryContainer:{
    borderColor:COLOR.WHITE,
    borderBottomColor: COLOR.DESIGNER_LOC,
    marginTop: 9,
    marginBottom: 31.5,
  },
  inputCVCContainer:{
    borderColor:COLOR.WHITE,
    borderBottomColor: COLOR.DESIGNER_LOC,
    marginBottom: 31.5,
  },
  input: {
    fontSize: 18,
    fontWeight: '300',
    color: COLOR.DESIGNER_LOC,
    paddingBottom: 13.5,
  },
  subOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 77/812,
    justifyContent: 'space-between',
    backgroundColor: COLOR.Gray_PAYMENT,
    paddingHorizontal: 27,
    paddingTop: 9,
    paddingBottom: 18,
    marginBottom: 31.5,
  },
  subInnerContainer: {
  },
  styleCheckboxContainer:{
    width:30,
    height:30, 
    borderColor:COLOR.PROFILE_BG,
    borderWidth:1,
    borderRadius:29,
  },
  innerTextHeading: {
    fontSize: 18,
    fontWeight: '300',
    color: COLOR.BLACK,
    marginBottom: 13,
  },
  innerText: {
    fontSize: 14,
    fontWeight: '300',
    color: COLOR.DESIGNER_LOC,
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  secureImage: {
    width: 79.94,
    height: 39.06,
    marginBottom: 21,
  },
  bottomText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '300',
    marginHorizontal: 39,
    color: COLOR.DESIGNER_LOC,
  },
  bottomTextView: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  confirm: {
    width: width * 0.900,
    paddingVertical: 17,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    marginBottom: 20,
    marginTop: height * 0.017,
  },
  confirmTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
});

export default styles;
