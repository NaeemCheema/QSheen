import { StyleSheet } from 'react-native';
import { width, height, COLOR,getPercentageHeight, getPercentageWidth } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartScrollView: {
    flex: 1,
    width: width,
  },
  cartView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:5
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.TEXT_CAMELOT,
    marginTop: 23,
    marginBottom: 11,
    alignSelf: 'center',
  },
  cardTileContainer:{
    alignItems: 'center',
    padding: 5,
  },
  couponContainer: {
    flex:1,
    width: width * 0.754,
    height: height * 0.0628,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    width:width* 0.377,
    height: height * 0.0628,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLOR.COUPON_COLOR,
  },
  input: {
    fontWeight: "300",
    fontSize: 12,
    alignSelf: 'center',
  },
  couponContainerButton: {
    width:width* 0.377,
    height: height * 0.0628,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLOR.PROFILE_BG,
  },
  couponButtonText:{
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
  detailContainer: {
    width: width * 0.917,
    marginTop: 33,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  leftText: {
    fontWeight: '400',
    fontSize: 22,
    color: COLOR.COUPON_TEXT,
    marginBottom: 11,
  },
  rightText: {
    fontWeight: '400',
    fontSize: 20,
    color: COLOR.PRODUCT_TEXT,
    marginBottom: 13,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
  },
  totalTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 54,
  },
  total: {
  fontWeight: '400',
  fontSize: 22,
  color: COLOR.TOTAL,
  },
  totalValue: {
    fontWeight: '400',
    fontSize: 20,
    color: COLOR.PRODUCT_TEXT,
  },
  CheckoutButton: {
    width: width * 0.92,
    paddingVertical: 17,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    marginBottom: 20,
  },
  CheckoutButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
  
});

export default styles;
