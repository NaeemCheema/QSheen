import { StyleSheet } from 'react-native';
import { COLOR, width, height } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  sliderContainer: {
    width: width,
    height: height * 0.49,
    position: 'absolute',
    top: -18,
  },
  sliderContentContainer: {
    width: width,
    aspectRatio: 375/401,
    padding: 16,
  },
  sliderCategory: {
    width,
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  sliderContent: {
    marginTop: height * 0.290,
  },
  sliderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.BROWN_TEXT,
  },
  sliderDetails: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOR.WHITE,
    width: '45%',
  },
  paginationStyle: {
    bottom: height * 0.049,
  },
  dotStyle: {
    backgroundColor: COLOR.PRIMARY_COLOR,
    width: 14,
    height: 14,
    borderRadius: 14,
  },
  activeDotStyle: {
    backgroundColor: COLOR.PRIMARY_COLOR,
    width: 14,
    height: 14,
    borderRadius: 14,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 16,
    marginTop: height * 0.43,
  },
  categoryListContent: {
    paddingBottom: 23,
    alignItems: 'center',
  },
  categoryCover: {
    width: width * 0.4266,
    height: width * 0.453,
    borderRadius: 18,
    justifyContent: 'flex-end',
  },
  categoryGradient: {
    width: width * 0.4266,
    height: width * 0.453,
    borderRadius: 18,
    ...StyleSheet.absoluteFillObject,
  },
  categoryName: {
    fontSize: 22,
    color: COLOR.WHITE,
    fontWeight: "700",
    marginLeft: 17,
    marginBottom: 13,
  },
});

export default styles;
