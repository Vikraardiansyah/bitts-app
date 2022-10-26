import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import SwitchButton from 'switch-button-react-native';
import color from '../../color';
import MenuBox, { IMenuBoxItem } from '../../components/MenuBox';
import MenuPager from '../../components/MenuPager';
import { drinksMenu } from '../../data';
import styles from './styles';

const MENU = {
  drinks: 1,
  foods: 2,
};

const Menu = () => {
  const [menu, setMenu] = useState(MENU.drinks);
  const [activeMenuBox, setActiveMenuBox] = useState(0);

  function onValueSwitchChange(activeSwitch: number) {
    setMenu(activeSwitch);
  }

  const renderItem = ({
    item,
    index,
  }: {
    item: IMenuBoxItem;
    index: number;
  }) => {
    return (
      <MenuBox
        index={index}
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
          text1="Drinks"
          text2="Foods"
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
          data={menu === 1 ? drinksMenu : []}
          renderItem={renderItem}
        />
      </View>
      <MenuPager
        listMenu={menu === 1 ? drinksMenu[activeMenuBox].listMenu : []}
      />
    </View>
  );
};

export default Menu;
