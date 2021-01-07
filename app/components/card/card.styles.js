import { StyleSheet } from 'react-native';
import { COLOR } from '../../constants';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR.WHITE,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowColor: COLOR.SHADOW_GRAY,
    elevation: 5,
  }
});

export default styles;
