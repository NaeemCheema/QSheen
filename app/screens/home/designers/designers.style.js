import { StyleSheet } from 'react-native';
import {width, height, COLOR} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: width,
    height: undefined,
    alignItems: 'center',
    marginBottom: 31,
  },
  subContainer: {
    height: height * 0.179,
    marginLeft: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  designImage: {
    width: width * 0.235,
    height: width * 0.235,
    borderRadius: 15,
  },
  designName: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.PROFILE_ITEM,
    textAlign: 'center',
    alignSelf: 'center',
  },
  designLocation: {
    fontSize: 12,
    fontWeight: '300',
    color: COLOR.DESIGNER_LOC,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default styles;