import { StyleSheet } from 'react-native';
import color from '../../color';

const styles = StyleSheet.create({
  imageContainer: {
    margin: 24,
    width: 320,
    height: 380,
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 20,
  },
  textImage: {
    padding: 24,
    color: color.white,
    fontSize: 32,
    fontWeight: '500',
  },
});
export default styles;
