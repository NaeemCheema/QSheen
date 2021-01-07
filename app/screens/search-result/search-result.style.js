import { StyleSheet } from 'react-native';
import {COLOR, width, height} from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.RECOMMENDATIONS,
  },
  mainContainer: {
    width: width,
    height: height,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    marginTop: 25,
    paddingTop: 49,
    flex:1,
  },
  upperContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: COLOR.BLACK,
    alignSelf: 'center',
    marginBottom: 41,

  },
  image: {
    width: width * 0.436,
    height: width * 0.436,
    marginBottom: 33,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '300',
    color: COLOR.LIGHT_TEXT_EMPORER,
    width: '45%',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 64.5,
    paddingHorizontal: 16,
    flex: 1,
  },
  bottomHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: COLOR.BLACK,
    paddingLeft:4,
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.TEXT_PINK,
    paddingRight:4,
  },
});

export default styles;