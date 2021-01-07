import { StyleSheet } from 'react-native';
import {width, COLOR} from '../../constants';
import { FontHelper } from '../../helpers';

const styles = StyleSheet.create({
  safeArea: {
    width,
    backgroundColor: COLOR.WHITE,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowColor: COLOR.SHADOW_GRAY,
    elevation: 5,
  },
  absoluteStyles: {
    backgroundColor: COLOR.WHITE,
    position: 'absolute',
    borderBottomColor: COLOR.LIGHT_GRAY,
    borderBottomWidth: 0.5,
    zIndex: 10,
  },
  headerContainer: {
    width,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    padding: 5,
  },
  leftIconsContainer: {
    width: 43,
    height: 29.5,
  },
  headerTitle: {
    fontSize: 17,
    color: COLOR.BLACK,
    fontWeight: '500',
  },
  searchContainer: {
    width: '100%',
    height: 35,
    backgroundColor: COLOR.GRAY,
    borderRadius: 30,
    borderColor: COLOR.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  searchText: {
    ...FontHelper({
      fontSize: 17,
    }),
    color: COLOR.BLACK,
    fontWeight: '500',
    alignSelf: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 28,
    height: 28,
    alignSelf: 'center'
  },
  notify: {
    width: 21,
    height: 25,
    marginLeft: 8,
    alignSelf: 'center',
  },
  notificationTextView: {
    width: 17,
    height: 17,
    borderRadius: 17,
    backgroundColor: COLOR.PROFILE_BG,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    left: 6,
    bottom: 4,
  },
  notificationText:{
    fontSize: 10,
    fontWeight: '600',
    color: COLOR.WHITE,
  },
});

export default styles;
