import { StyleSheet } from 'react-native';
import { COLOR, width, height } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  carousalContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  sliderContentContainer: {
    width: width,
    aspectRatio: 375/401,
    padding: 16,
  },
  sliderDesigner: {
    width,
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  sliderContent: {
    marginTop: height * 0.20,
  },
  sliderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.BROWN_TEXT,
  },
  sliderDetails: {
    fontSize: 12,
    fontWeight: '600',
    width: '40%',
  },
  listContainer: {
    flex: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 23,
  },
  brandsListContent: {
    paddingVertical: 23,
  },
});

export default styles;
