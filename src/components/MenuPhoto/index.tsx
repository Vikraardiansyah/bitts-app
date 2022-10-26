import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { ListMenu } from '../../data';
import styles from './styles';

const MenuPhoto = ({ menu }: { menu: ListMenu }) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.image}
      resizeMode="cover"
      source={menu.image}>
      <Text style={styles.textImage}>{menu.name}</Text>
    </ImageBackground>
  );
};

export default MenuPhoto;
