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
    paddingTop: 18,
    flex:1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: COLOR.BLACK,
    marginLeft: 25,
  },
  recommendContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    borderBottomColor: COLOR.DESIGNER_LOC,
    borderBottomWidth: 1,
    paddingVertical: 10.5,
    paddingRight: 15,
    paddingLeft: 5,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '300',
    color: COLOR.BLACK,
  },
});

export default styles;