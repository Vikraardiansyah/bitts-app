import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

export interface IMenuBoxItem {
  name: string;
}

export interface IMenuBox {
  setActiveMenuBox: React.Dispatch<React.SetStateAction<number>>;
  item: IMenuBoxItem;
  activeMenuBox: number;
}

const MenuBox = ({
  index,
  setActiveMenuBox,
  item,
  activeMenuBox,
}: IMenuBox & { index: number }) => {
  function onPressMenu() {
    setActiveMenuBox(index);
  }

  return (
    <Pressable
      onPressOut={onPressMenu}
      style={({ pressed }) => [
        activeMenuBox === index
          ? styles.acticeMenuBox
          : {
              opacity: pressed ? 0.8 : 1,
              ...styles.inActiceMenuBox,
            },
      ]}>
      <Text
        style={
          activeMenuBox === index
            ? styles.activeMenuText
            : styles.inActiceMenuText
        }>
        {item.name}
      </Text>
    </Pressable>
  );
};

export default MenuBox;
