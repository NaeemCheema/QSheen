import { StyleSheet } from 'react-native';
import { COLOR, height } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY_COLOR
  },
  header: {
    width: '78%',
    marginTop: 37,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 14,
    color: COLOR.WHITE,
  },
  loginAction: {
    fontSize: 14,
    color: COLOR.WHITE,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  accountAction: {
    fontSize: 14,
    color: COLOR.WHITE,
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
  },
  headerSeperator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLOR.WHITE,
    marginTop: height * 0.025,
    marginBottom: height * 0.025,
  },
  rowItem: {
    width: '78%',
    paddingVertical: 10,
    alignSelf: 'center'
  },
  rowTitle: {
    fontSize: 14,
    color: COLOR.WHITE,
  },
  rowSeparator: {
    width: '78%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLOR.WHITE,
    alignSelf: 'center',
  },
  categoriesRow: {
    width: '78%',
    paddingVertical: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plusSign: {
    fontSize: 18,
    color: COLOR.WHITE,
  },
  subCategoryContainer: {
    width: '70%',
    alignSelf: 'center',
  },
  subCategory: {
    fontSize: 14,
    color: COLOR.WHITE,
  },
});

export default styles;
