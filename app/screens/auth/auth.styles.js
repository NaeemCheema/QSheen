import { StyleSheet } from 'react-native';
import { COLOR, height,width } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  coverImage: {
    width,
    height: height * 0.22, 
  },
  authTypeContainer: {
    width: '100%',
    marginTop: height * 0.0246,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  authItemText: {
    fontSize: 18,
    fontWeight: '600',
  },
  highlighter: {
    width: '98%',
    marginHorizontal: '2%',
    height: 4,
    marginTop: 1,
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  selectedAuthBar: {
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  socialAuthContainer: {
    marginTop: 72,
    alignSelf: 'center',
    alignItems: 'center'
  },
  socialAuthHeader: {
    fontSize: 18,
    fontWeight: '300',
    color: COLOR.BLACK_TEXT,
  },
  authIconsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  socialIconContainer: {
    width: 46,
    height: 46,
    backgroundColor: COLOR.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 46,
  },
  socialIcon: {
    tintColor: 'white', height: 18, width: 18
  },
});

export default styles;
