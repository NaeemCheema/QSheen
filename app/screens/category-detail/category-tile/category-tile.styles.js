import { StyleSheet } from 'react-native';
import {width,height, COLOR} from '../../../constants';

const styles = StyleSheet.create({
  card: {
    width: width * 0.43,
  },
  container: {
    width: '100%',
    padding: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: height * 0.2156,
  },
  productName: {
    fontSize: 15,
    fontWeight: '500',
    padding: 5,
    textAlign: 'center',
    color: COLOR.BLACK_TEXT,
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: COLOR.BROWN_TEXT,
    marginBottom: 4,
    marginHorizontal: 5,
  },
  button: {
    width: '87%',
    borderRadius: 4,
    paddingVertical: 8,
    backgroundColor: COLOR.LOADMORE,
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.WHITE,
    marginRight: 10,
  },
});

export default styles;
