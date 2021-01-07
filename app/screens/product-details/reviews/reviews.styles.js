import { StyleSheet } from 'react-native';
import {width, height, COLOR, getPercentageWidth, getPercentageHeight} from '../../../constants';

const styles = StyleSheet.create({
  ratingCountText: {
    color: COLOR.WHITE,
    fontSize: 26,
    //fontFamily: 'Roboto',
    fontWeight: '900', 
    lineHeight: getPercentageHeight(30)
  },
  ratingCountTextSmall: {
    color: COLOR.WHITE,
    fontSize: 12,
    //fontFamily: 'Roboto',
    fontWeight: '400', 
    lineHeight: getPercentageHeight(14)
  },
  progressLableText:{
    fontSize: 14, marginRight:getPercentageWidth(12),textAlign: 'left'
  },
  reviewBar:{
    width:getPercentageWidth(55),
    backgroundColor:COLOR.TEXT_LIGHT,
    height:getPercentageHeight(2),
    borderRadius:5, 
    marginTop:getPercentageHeight(3)
  },
  propertiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: getPercentageHeight(5)
  },
  noOfReviews:{
    flex:0.5,
    alignItems:'flex-end',
    marginRight:getPercentageWidth(20)
  },
  noOfReviewsText:{
    fontSize:14, 
    color:COLOR.REVIEW_TEXT_1
  },
  flexOneCenter:{
    flex:1,
    justifyContent:'center',
  },
  writeReviewContainer:{
    marginTop:getPercentageHeight(45),
    marginBottom:getPercentageHeight(70)
  },
  writeReviewText:{
    color:COLOR.REVIEW_TEXT,
    fontSize:14,
    textDecorationLine:'underline'
  },
});

export default styles;
