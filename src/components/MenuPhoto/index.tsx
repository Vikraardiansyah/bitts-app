import React from 'react';
import { ImageBackground, Text } from 'react-native';
import Image from '../../assets/images';
import styles from './styles';

const MenuPhoto = () => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.image}
      resizeMode="cover"
      source={Image.coffeeImage}>
      <Text style={styles.textImage}>Caramel Macchiato</Text>
    </ImageBackground>
  );
};

export default MenuPhoto;
