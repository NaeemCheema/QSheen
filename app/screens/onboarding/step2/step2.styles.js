import {StyleSheet} from 'react-native';
import {width, height, COLOR} from '../../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width,
    height: height + 10,
    position: 'absolute',
  },
  contentContainer: {
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 27,
  },
  logoTitleContainer: {
    width: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  screenMessage: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.PRIMARY_COLOR,
    width: 245,
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonStyles: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.13,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    marginBottom: height * 0.05,
  },
});

export default styles;
