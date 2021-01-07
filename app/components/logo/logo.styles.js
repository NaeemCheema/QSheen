import {StyleSheet} from 'react-native';
import {width, height, COLOR} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: width * 0.44,
    alignItems: 'center',
  },
  logoIcon: {
    width: width * 0.12,
    height: height * 0.07,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: COLOR.PRIMARY_COLOR
  },
});

export default styles;
