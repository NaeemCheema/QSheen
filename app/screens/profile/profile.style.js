import {StyleSheet} from 'react-native';
import {width, height, COLOR} from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contentContainer: {
    width,
    height: height * 0.80,
  },
  profileImage: {
    width: width * 0.362,
    height: width * 0.362,
    borderRadius: width * 0.362,
    backgroundColor: COLOR.WHITE,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    top:height * 0.04,
  },
  profileEdit: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.1,
    backgroundColor: COLOR.PRIMARY_COLOR,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // padding:
  },
  align: {
    width: width,
    height: height * 0.634,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 46,
    backgroundColor: COLOR.WHITE,
    justifyContent:'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  heading:{
    width:width * 0.32,
    height:height * 0.036,
    color: COLOR.PROFILE_BG,
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 38,
  },
  details:{
    width:width * 0.9,
    height:height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor:COLOR.MERCURY,
    borderWidth:0.5,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Icon: {
    width: 39,
    height: 30,
    alignSelf:'center',
    left:26,
  },
  textDetail: {
    fontSize: 16,
    fontWeight: '300',
    color: COLOR.PROFILE_ITEM,
    alignSelf: 'center',
    left: 60,
  },
  button: {
    width: width * 0.016,
    height: height * 0.015,
    alignSelf: 'center',
    right: 26,
  },
});

export default styles;
