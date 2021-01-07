import { StyleSheet } from 'react-native';
import { width, height, COLOR } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: width * 0.91,
    height: height * 0.31,
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: COLOR.GRAY,
  },
  sliderDot: {
    backgroundColor: COLOR.SWIPER_DOT,
    opacity: 0.3,
    width: 14,
    height: 14,
    borderRadius: 14,
    marginLeft: 3,
    marginRight: 3, 
  },
  sliderActiveDot: {
    backgroundColor: COLOR.SWIPER_DOT, 
    width: 14, 
    height: 14, 
    borderRadius: 14, 
    marginLeft: 3, 
    marginRight: 3, 
  },
});

export default styles;
