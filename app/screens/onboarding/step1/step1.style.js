import { StyleSheet } from 'react-native';

import {COLOR, width, height,} from '../../../constants';

const styles = StyleSheet.create({
  screen: {
    flex:1,
    justifyContent: 'center',
  },
  buttonStyles: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.13,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    bottom: height * 0.06,
    position:'absolute',
  },
  step1logoStyle:{
    height: 189.37,
    width: 134.19,
    borderRadius:60,
    alignSelf: 'center',
    alignItems: 'center',
  },
  backGroundImage:{
    width: width,
    height: height,
    position: 'absolute',
    zIndex: -10,
  }
});

export default styles;
