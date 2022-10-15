import { StyleSheet } from 'react-native';
import color from '../../color';

const styles = StyleSheet.create({
  acticeMenuBox: {
    backgroundColor: color.black,
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginHorizontal: 8,
  },
  inActiceMenuBox: {
    backgroundColor: color.lightGray,
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginHorizontal: 8,
  },
  activeMenuText: {
    fontSize: 20,
    color: color.whiteText,
  },
  inActiceMenuText: {
    fontSize: 20,
    color: color.grayText,
  },
});

export default styles;
