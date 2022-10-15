import React from 'react';
import { Pressable, Text, View } from 'react-native';
import color from '../../color';
import styles from './styles';

export interface IMenuBoxItem {
  name: string;
}

export interface IMenuBox {
  item: IMenuBoxItem;
  activeMenuBox: string;
}

const MenuBox = ({ item, activeMenuBox }: IMenuBox) => {
  return (
    <Pressable
      style={({ pressed }) => [
        activeMenuBox === item.name
          ? {
              backgroundColor: pressed ? color.black : color.lightGray,
              ...styles.acticeMenuBox,
            }
          : {
              backgroundColor: pressed ? color.lightGray : color.black,
              ...styles.inActiceMenuBox,
            },
      ]}>
      <Text
        style={
          activeMenuBox === item.name
            ? styles.activeMenuText
            : styles.inActiceMenuText
        }>
        {item.name}
      </Text>
    </Pressable>
  );
};

export default MenuBox;
