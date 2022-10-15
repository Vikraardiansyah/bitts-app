/* eslint-disable react-native/no-inline-styles */
/*

how to use:

1) import component
2) set activeSwitch=1 to state
3) use <MySwitchButton  onValueChange={(val) => this.setState({ activeSwitch: val })} /> in your code
4) use { this.state.activeSwitch === 1 ? view1 : view2 }

small example: ...


    constructor () {
        super();

        this.state = {
          activeSwitch: 1
        };
    }


    render () {

        return (

            <View>
                <SwitchButton
                    onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                    text1 = 'ON'                        // optional: first text in switch button --- default ON
                    text2 = 'OFF'                       // optional: second text in switch button --- default OFF
                    switchWidth = {100}                 // optional: switch width --- default 44
                    switchHeight = {44}                 // optional: switch height --- default 100
                    switchdirection = 'row-reverse'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                    switchBorderRadius = {100}          // optional: switch border radius --- default oval
                    switchSpeedChange = {500}           // optional: button change speed --- default 100
                    switchBorderColor = '#d4d4d4'       // optional: switch border color --- default #d4d4d4
                    switchBackgroundColor = '#fff'      // optional: switch background color --- default #fff
                    btnBorderColor = '#00a4b9'          // optional: button border color --- default #00a4b9
                    btnBackgroundColor = '#00bcd4'      // optional: button background color --- default #00bcd4
                    fontColor = '#b1b1b1'               // optional: text font color --- default #b1b1b1
                    activeFontColor = '#fff'            // optional: active font color --- default #fff
                />
            </View>

        );
    }


*/

import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlexStyle,
} from 'react-native';

const sbWidth = 100;
const sbHeight = 44;
const direction: FlexStyle['flexDirection'] = 'row';

interface ISwtichButton {
  onValueChange: (activeSwitch: number) => void;
  text1?: string;
  text2?: string;
  switchHeight?: number;
  switchWidth?: number;
  switchBorderRadius?: number;
  switchSpeedChange?: number;
  switchBorderColor?: string;
  switchBackgroundColor?: string;
  switchdirection?: FlexStyle['flexDirection'];
  btnBorderColor?: string;
  btnBackgroundColor?: string;
  activeFontColor?: string;
  fontColor?: string;
  children?: React.ReactNode;
}

const SwitchButton = ({
  onValueChange = () => {
    return;
  },
  text1,
  text2,
  switchHeight,
  switchWidth,
  switchBorderRadius,
  switchSpeedChange,
  switchBorderColor,
  switchBackgroundColor,
  switchdirection,
  btnBorderColor,
  btnBackgroundColor,
  activeFontColor,
  fontColor,
  children,
}: ISwtichButton) => {
  const [activeSwitch, setActiveSwitch] = useState(1);
  const offsetX = useRef(new Animated.Value(0));

  useEffect(() => {
    onValueChange(activeSwitch);
  }, [activeSwitch, onValueChange]);

  function _switchThump(directionValue: FlexStyle['flexDirection']) {
    let dirsign = 1;
    if (directionValue === 'row-reverse') {
      dirsign = -1;
    } else {
      dirsign = 1;
    }

    if (activeSwitch === 1) {
      setActiveSwitch(2);

      Animated.timing(offsetX.current, {
        toValue: ((switchWidth || sbWidth) / 2 - 6) * dirsign,
        duration: switchSpeedChange || 100,
        useNativeDriver: true,
      }).start();
    } else {
      setActiveSwitch(1);
      Animated.timing(offsetX.current, {
        toValue: 0,
        duration: switchSpeedChange || 100,
        useNativeDriver: true,
      }).start();
    }
  }

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          _switchThump(switchdirection || direction);
        }}>
        <View
          style={[
            {
              width: switchWidth || sbWidth,
              height: switchHeight || sbHeight,
              borderRadius:
                switchBorderRadius !== undefined
                  ? switchBorderRadius
                  : sbHeight / 2,
              borderWidth: 1,
              borderColor: switchBorderColor || '#d4d4d4',
              backgroundColor: switchBackgroundColor || '#fff',
            },
          ]}>
          <View
            style={[
              {
                flexDirection: switchdirection || direction,
              },
            ]}>
            <Animated.View
              style={{ transform: [{ translateX: offsetX.current }] }}>
              <View
                style={[
                  switchStyles.wayBtnActive,
                  {
                    width: (switchWidth || sbWidth) / 2,
                    height: (switchHeight || sbHeight) - 6,
                    borderRadius:
                      switchBorderRadius !== undefined
                        ? switchBorderRadius
                        : sbHeight / 2,
                    borderColor: btnBorderColor || '#00a4b9',
                    backgroundColor: btnBackgroundColor || '#00bcd4',
                  },
                ]}
              />
            </Animated.View>

            <View
              style={[
                switchStyles.textPos,
                {
                  width: (switchWidth || sbWidth) / 2,
                  height: (switchHeight || sbHeight) - 6,
                  left: 0,
                },
              ]}>
              <Text
                style={[
                  activeSwitch === 1
                    ? { color: activeFontColor || '#fff' }
                    : { color: fontColor || '#b1b1b1' },
                ]}>
                {text1 || 'ON'}
              </Text>
            </View>

            <View
              style={[
                switchStyles.textPos,
                {
                  width: (switchWidth || sbWidth) / 2,
                  height: (switchHeight || sbHeight) - 6,
                  right: 0,
                },
              ]}>
              <Text
                style={[
                  activeSwitch === 2
                    ? { color: activeFontColor || '#fff' }
                    : { color: fontColor || '#b1b1b1' },
                ]}>
                {text2 || 'OFF'}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {children}
    </View>
  );
};

export default SwitchButton;

const switchStyles = StyleSheet.create({
  textPos: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
  ltr: {
    flexDirection: 'row',
  },
  wayBtnActive: {
    borderWidth: 1,
    marginTop: 2,
    marginRight: 2,
    marginLeft: 2,
  },
});
