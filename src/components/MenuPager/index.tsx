import React, { useState } from 'react';
import { View } from 'react-native';
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';
import PaginationDot from 'react-native-animated-pagination-dot';
import MenuPhoto from '../MenuPhoto';
import styles from './styles';
import color from '../../color';

const MenuPager = () => {
  const [activePage, setActivePage] = useState(0);

  function onPageSelected(event: PagerViewOnPageSelectedEvent) {
    setActivePage(event.nativeEvent.position);
  }

  return (
    <>
      <PagerView
        onPageSelected={onPageSelected}
        showPageIndicator
        style={styles.pagerView}
        initialPage={0}>
        <View collapsable={false} style={styles.page} key="0">
          <MenuPhoto />
          <MenuPhoto />
          <MenuPhoto />
          <MenuPhoto />
        </View>
        <View collapsable={false} style={styles.page} key="1">
          <MenuPhoto />
          <MenuPhoto />
          <MenuPhoto />
          <MenuPhoto />
        </View>
      </PagerView>
      <View style={styles.dotContainer}>
        <PaginationDot
          sizeRatio={1.5}
          curPage={activePage}
          maxPage={2}
          activeDotColor={color.black}
        />
      </View>
    </>
  );
};

export default MenuPager;
