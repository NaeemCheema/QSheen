import { StyleSheet } from 'react-native';

//import COLORS from '../../common/colors';

const styles = StyleSheet.create({
  segmentContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  segmentItem: {
    flex: 1,
    paddingBottom: 6.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderColor: 'gray',
  },
  selectedItem: {
    borderColor: '#82375C',
  },
  segmentItemText: {
    //fontFamily: 'Roboto',
    fontSize: 12,
    color: 'gray'
  },
});

export default styles;
