import { StyleSheet } from 'react-native';
import color from '../../color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  switch: {
    alignItems: 'center',
  },
  flatList: {
    marginVertical: 16,
  },
  flatListContent: {
    paddingHorizontal: 32,
    alignItems: 'flex-start',
  },
});

export default styles;
