import { StyleSheet } from 'react-native';
import {width, height, COLOR} from '../../constants';

const styles = StyleSheet.create({
  introCard: {
    width: width * 0.41,
    borderRadius: 9,
    paddingBottom: 10,
    alignItems: 'center',
  },
  introCover: {
    width: width * 0.41,
    height: undefined,
    aspectRatio: 156/86,
    borderRadius: 9,
  },
  introImageContainer: {
    position: 'absolute',
    top: '25%',
    padding: 3,
    backgroundColor: COLOR.BACKGROUND_GRAY,
    borderRadius: width * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introImage: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.16,
    overflow: 'hidden',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 28,
    color: COLOR.BROWN_TEXT,
    marginHorizontal: 9,
  },
  message: {
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'center',
    marginHorizontal: 9,
  },
});

export default styles;
