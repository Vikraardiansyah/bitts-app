import { StyleSheet } from 'react-native';
import color from '../../color';

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
  },
  acticeMenuBox: {
    borderRadius: 50,
    padding: 16,
    marginHorizontal: 8,
  },
  inActiceMenuBox: {
    borderRadius: 50,
    padding: 16,
    marginHorizontal: 8,
  },
  activeMenuText: {
    color: color.grayText,
  },
  inActiceMenuText: {
    color: color.whiteText,
  },
});

export default styles;
