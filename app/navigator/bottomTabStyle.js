import {StyleSheet} from 'react-native';
import {COLOR} from '../constants';

const styles=StyleSheet.create({
  barStyle:{
    backgroundColor: '#FFFFFF',   
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    bottom:0,
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowColor: COLOR.SHADOW_GRAY,
    elevation: 5,
  },
  labelStyle: {
    fontSize: 12,
  },
  iconStyle: {
    margin: 0, padding: 0,
  }
});
export default styles;