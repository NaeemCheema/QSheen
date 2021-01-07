import { StyleSheet } from 'react-native';
import {COLOR, getPercentageWidth, getPercentageHeight} from '../../../constants';

const styles = StyleSheet.create({
  similarItemText:{
    fontSize:20,
    color:COLOR.TEXT_COLOR,
  },
  arrowButtonImages:{
    width: getPercentageWidth(25),
    height:getPercentageHeight(25),
    marginLeft:getPercentageWidth(2),
    marginRight:getPercentageHeight(2),
  },
});

export default styles;
