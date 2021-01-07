import { StyleSheet } from 'react-native';
import { COLOR, width, height } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  carousalContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 23,
  },
  designerListContent: {
    paddingVertical: 23,
  },
});

export default styles;
