import React from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import MenuPhoto from '../MenuPhoto';
import styles from './styles';

const MenuPager = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View style={styles.page} key="1">
        <MenuPhoto />
        <MenuPhoto />
        <MenuPhoto />
        <MenuPhoto />
      </View>
      <View style={styles.page} key="2">
        <MenuPhoto />
        <MenuPhoto />
        <MenuPhoto />
        <MenuPhoto />
      </View>
    </PagerView>
  );
};

export default MenuPager;
