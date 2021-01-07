import {StyleSheet} from 'react-native';
import {width, height, COLOR} from '../../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width,
    height: height,
    position: 'absolute',
  },
  contentContainer:{
  },
  screenHeading: {
    width: width * 0.564,
    height: height * 0.0188,  
    alignSelf: 'center',
    marginBottom: 28,
  },
  screenSubHeading: {
    width: width * 0.553,
    height: height * 0.072,  
    alignSelf: 'center',
    marginBottom: 19,
  },
  buttonStyles: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.13,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    marginBottom: height * 0.05,
  },
});

export default styles;
