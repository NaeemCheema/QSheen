import {StyleSheet} from 'react-native';
import {getPercentageHeight, getPercentageWidth, COLOR} from '../../../constants';
import {FontHelper} from '../../../helpers';

const styles = StyleSheet.create({
  modalView:{
    alignSelf:'center',
    height:getPercentageHeight(715),
    width:getPercentageWidth(357),
    marginLeft:getPercentageWidth(9),
    marginRight:getPercentageWidth(9),
    backgroundColor:COLOR.WHITE,
    borderRadius: 6,
  },
  scrollView: {
    paddingBottom: getPercentageHeight(95)
  },
  imageContainer:{
    height:getPercentageHeight(240),
    width:getPercentageWidth(248),
  },
  imageStyles:{
    height:getPercentageHeight(240),
    right:getPercentageWidth(43),
    top:getPercentageHeight(15)
  },
  errorMessageContainer:{
    //marginTop:getPercentageHeight(45),
    marginLeft:getPercentageWidth(11),
    justifyContent:'center',
    //borderWidth:1
  },
  errorText:{
    color:COLOR.RED
  },
  fieldsContainer:{
    width: '100%',
    //top:getPercentageHeight(17), 
    flexDirection:'row',
    flexWrap:'wrap',
  },
  row: {
    width: getPercentageWidth(335),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:getPercentageHeight(15),
    marginLeft:getPercentageWidth(11),
  },
  fieldValueContainer: {
    height: getPercentageHeight(43), 
    width: getPercentageWidth(163),
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  fieldValue: {
    ...FontHelper({
      fontSize: 16,
      fontWeight: '300',
    }),
  },
  buttonStylesSave:{
    height:getPercentageHeight(55), 
    width:getPercentageWidth(163),
    left:getPercentageWidth(11), 
    marginTop:getPercentageHeight(15),
    backgroundColor:COLOR.TEXT_PINK
  },
  buttonStylesCancel:{
    height:getPercentageHeight(55),  
    width:getPercentageWidth(163),
    marginLeft:getPercentageWidth(20),
    marginTop:getPercentageHeight(15),
    backgroundColor:COLOR.BLACK
  },
  buttonTextStyles:{
    fontSize:20,
    color:COLOR.WHITE, 
    fontWeight:'bold'
  },
  itemStyles:{
    justifyContent: 'flex-start'
  },
  takeMeasurementsContainer: {
    width: '95%',
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: COLOR.MERCURY,
    borderWidth: 0.5,
    height: getPercentageHeight(50),
    marginTop:getPercentageHeight(30),
    marginLeft:getPercentageWidth(10),
    marginRight:getPercentageWidth(10),
    alignItems:'center',
    shadowColor: COLOR.MERCURY,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 3,
    //shadowRadius: 0.5,
    elevation:9
  },
  rightArrow: {
    width: getPercentageWidth(18),
    height: getPercentageHeight(25),
    alignSelf: 'flex-end', marginRight: getPercentageWidth(9)
  },
  measurementsStyles: {
    width: getPercentageWidth(37),
    height: getPercentageHeight(23),
    alignSelf:'center',
    marginLeft: getPercentageWidth(11),
  },
  flexOneCenter: {
    flex: 1,
    justifyContent: 'center',
    //marginLeft: getPercentageWidth(40)
  }
});

export default styles;
