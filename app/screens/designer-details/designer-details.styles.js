import { StyleSheet } from 'react-native';
import {COLOR, width, height} from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  designerCover:{
    width: width,
    flex:1,
    height: height * 0.6,
    marginTop:40,
    ...StyleSheet.absoluteFillObject,
    zIndex: -10,
  },
  designerAlign: {
    justifyContent:'flex-end',
    flex:1,
  },
  contentContainer: {
    width: width,
    height: height * 0.6428,
    alignItems: 'center',
  },
  profileImage: {
    // width: 151,
    // height: 151,
    width: width * 0.4037,
    height: width * 0.4037,
    borderRadius: width * 0.4037,
    backgroundColor: COLOR.white,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top:height * 0.068,
    zIndex:1,
  },
  image: {
    width: width * 0.3850,
    height: width * 0.3850,
    borderRadius: width * 0.3850,
    alignSelf: 'center',
  },
  align: {
    width: width,
    height: height,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: height * 0.065,
    backgroundColor: COLOR.WHITE,
    flex:1,
  },
  nameContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: COLOR.PROFILE_BG,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  location: {
    fontSize: 12,
    fontWeight: '600',
    color: COLOR.LOCATION_TEXT,
  },
  aboutContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 25,
    marginRight: 16,
    marginTop: 33,
  },
  about: {
    fontSize: 18,
    fontWeight: '500',
    color: COLOR.LOCATION_TEXT,
  },
  message: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.DESIGNER_LOC,
    marginTop: 5,
  },
  divider: {
    borderBottomColor: COLOR.DESIGNER_LOC,
    borderBottomWidth: 0.5,
    paddingVertical: 2,
  },
  tagsHeading: {
    fontSize: 18,
    fontWeight: '500',
    color: COLOR.LOCATION_TEXT,
    marginTop: 31,
    marginBottom: 13,
  },
  tagsContainer: {
    backgroundColor: COLOR.PROFILE_BG,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginRight: 7,
    paddingVertical:6,
  },
  tags: {
    color: COLOR.white,
    fontSize: 12,
    fontWeight: '700',
  },
  messageContainer: {
    marginLeft: 25,
    marginRight: 16,
  },
  messageTouchable: {
    borderColor: COLOR.PROFILE_BG,
    borderWidth: 1,
    borderRadius: 21,
    width: width * 0.2826,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  messageLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: COLOR.PROFILE_BG,
    paddingVertical: 13,
  }
});

export default styles;
