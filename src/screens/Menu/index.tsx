import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import SwitchButton from 'switch-button-react-native';
import color from '../../color';
import MenuBox, { IMenuBoxItem } from '../../components/MenuBox';
import MenuPager from '../../components/MenuPager';
import { COFFEE, MOCKTAIL, SIGNATURE } from '../../constant/MenuBox';
import styles from './styles';

const MENU = {
  foods: true,
  drinks: false,
};

const dataMenu = [
  {
    name: SIGNATURE,
  },
  {
    name: MOCKTAIL,
  },
  {
    name: COFFEE,
  },
];

const Menu = () => {
  const [menu, setMenu] = useState(MENU.foods);
  const [activeMenuBox, setActiveMenuBox] = useState(SIGNATURE);

  function onValueSwitchChange() {
    setMenu(menuValue => !menuValue);
  }

  const renderItem = ({ item }: { item: IMenuBoxItem }) => {
    return (
      <MenuBox
        setActiveMenuBox={setActiveMenuBox}
        item={item}
        activeMenuBox={activeMenuBox}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <SwitchButton
          onValueChange={onValueSwitchChange}
          text1="Foods"
          text2="Drinks"
          switchHeight={70}
          switchWidth={240}
          switchBorderRadius={30}
          fontColor={color.grayText}
          fontSize={24}
          fontWeight="600"
          activeFontColor={color.black}
          btnBackgroundColor={color.pink}
          btnBorderColor={color.transparent}
          switchBorderColor={color.transparent}
          switchBackgroundColor={color.lightGray}
        />
      </View>
      <View>
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          horizontal
          data={dataMenu}
          renderItem={renderItem}
        />
      </View>
      <MenuPager />
    </View>
  );
};

export default Menu;
