import React, { useState } from 'react';
import { View } from 'react-native';
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';
import PaginationDot from 'react-native-animated-pagination-dot';
import MenuPhoto from '../MenuPhoto';
import styles from './styles';
import color from '../../color';
import { ListMenu } from '../../data';

const MenuPager = ({ listMenu }: { listMenu: ListMenu[][] }) => {
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
        {listMenu.map((menu, index) => (
          <View collapsable={false} style={styles.page} key={index}>
            {menu.map((subListMenu, subIndex) => (
              <MenuPhoto key={subIndex} menu={subListMenu} />
            ))}
          </View>
        ))}
      </PagerView>
      {/* <View style={styles.dotContainer}>
        <PaginationDot
          sizeRatio={1.5}
          curPage={activePage}
          maxPage={2}
          activeDotColor={color.black}
        />
      </View> */}
    </>
  );
};

export default MenuPager;
