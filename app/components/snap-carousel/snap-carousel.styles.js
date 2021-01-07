import { StyleSheet, Platform } from 'react-native';
import {width, height, COLOR} from '../../constants';

const styles = StyleSheet.create({
  item: {
    width: width * 0.88,
    height: height * 0.29,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 17,
    paddingBottom: 35,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
  description: {
    fontSize: 12,
    fontWeight: '600',
    color: COLOR.WHITE,
    width: '80%',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
});

export default styles;
