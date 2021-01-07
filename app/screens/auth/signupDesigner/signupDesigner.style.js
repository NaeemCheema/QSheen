import { StyleSheet } from 'react-native';
import { COLOR, width } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: 40,
  },
  inputHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.PROFILE_ITEM,
    marginBottom: 6,
  },
  inputContainer: {
    width: width * 0.91,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
  },
  input: {
    fontWeight: "300",
    fontSize: 12,
  },
  SignButton: {
    width: '100%',
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: COLOR.BUTTON_BROWN,
    marginTop: 19,
  },
  SignButtonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
  inputSubHeading: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.PROFILE_ITEM,
    marginBottom: 6,
  },
  priceRangeContainer: {
    flexDirection: 'row',
  },
  priceRangeInput: {
    width: width * 0.29,
    height: 40,
    paddingHorizontal: 7,
  },
});

export default styles;