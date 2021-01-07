import { StyleSheet } from "react-native";
import { COLOR } from '../../constants';
import { FontHelper } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 0,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
  },
  input: {
    ...FontHelper({
      fontSize: 14,
    }),
    flex: 1,
    marginVertical: 0,
    paddingHorizontal: 0,
    paddingLeft: 0,
    paddingVertical: 0,
    color: COLOR.BLACK,
  },
  warningMessage: {
    fontSize: 11,
    color: COLOR.RED,
    marginLeft: 5,
  },
});

export default styles;
