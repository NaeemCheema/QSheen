import { StyleSheet } from 'react-native';
import {width, height, COLOR} from '../../../constants';

const styles = StyleSheet.create({
  card:{
    width: width * 68/375,
    height: height * 58/812,
    borderColor: COLOR.CONTAINER_SERENADE,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width,
    height: height * 80/812,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45,
  },
  brandImage: {
    width: '80%',
    aspectRatio: 1.4,
    alignSelf: 'center',
  },
});

export default styles;