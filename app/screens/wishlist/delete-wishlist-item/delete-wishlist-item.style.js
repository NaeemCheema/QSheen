import { StyleSheet } from 'react-native';
import { width, height, COLOR,getPercentageHeight, getPercentageWidth } from '../../../constants';

const styles = StyleSheet.create({
  
  deleteConfirmationDialogue:{
    width:getPercentageWidth(270), 
    backgroundColor:'white', 
    borderWidth:3, 
    height:getPercentageHeight(176),
    borderColor:'#CE8678',
    borderRadius:10,
    alignSelf:'center'
  },
  deleteConfirmationTextBox:{
    paddingTop:getPercentageHeight(29),
    paddingLeft:getPercentageWidth(14),
    paddingRight:getPercentageWidth(13),
    borderBottomWidth:3,
    height:getPercentageHeight(131),
    borderColor:'#CE8678'
  },
  deleteConfirmationText:{
    color:'#82375C',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  deleteButtonsContainer:{
    flex:1, 
    flexDirection:'row',
    borderColor:'#CE8678',
    borderRadius:25
  },
  deleteButtonsSubContainer:{
    flex:1, 
    backgroundColor:'#CE8678', 
    justifyContent:'center', 
    alignItems:'center',
    borderColor:'#CE8678',
  },
  deleteButtonsSubContainerCancel:{
    flex:1, 
    backgroundColor:'white', 
    justifyContent:'center', 
    alignItems:'center'
  },
  deleteOkStyles:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  deleteCancelStyles:{
    fontSize:20,
    color:'#82375C',
    fontWeight:'bold'
  },
});

export default styles;
