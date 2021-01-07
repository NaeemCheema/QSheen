import { StyleSheet } from 'react-native';
import { width, height, COLOR, getPercentageHeight, getPercentageWidth } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catalogueScrollView: {
    flex: 1,
  },
  carousalContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.TEXT_CAMELOT,
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.TEXT_PINK,
  },
  productsContainer: {
    flex: 1,
    backgroundColor: COLOR.CONTAINER_SERENADE,
    paddingVertical: 10,
    alignItems: 'center',
  },
  sliderContainer: {
    marginVertical: 25,
  },
  sliderImage: {
    backgroundColor: 'black',
    borderRadius: 25,
  },
});

export {styles};
