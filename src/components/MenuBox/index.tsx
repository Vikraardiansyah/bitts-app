import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

export interface IMenuBoxItem {
  name: string;
}

export interface IMenuBox {
  setActiveMenuBox: React.Dispatch<React.SetStateAction<string>>;
  item: IMenuBoxItem;
  activeMenuBox: string;
}

const MenuBox = ({ setActiveMenuBox, item, activeMenuBox }: IMenuBox) => {
  function onPressMenu() {
    setActiveMenuBox(item.name);
  }

  return (
    <Pressable
      onPressOut={onPressMenu}
      style={({ pressed }) => [
        activeMenuBox === item.name
          ? styles.acticeMenuBox
          : {
              opacity: pressed ? 0.8 : 1,
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
