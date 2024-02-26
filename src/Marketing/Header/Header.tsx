/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {logo} from '../../assets';
import {Flyout, FlyoutTrigger, FlyoutItems, FlyoutItem} from '../../shared';
import {headerStyles} from './HeaderStyles';
const {wrapperFlex} = headerStyles;

const Header: React.FC = () => {
  const numberOfMenuItems = ['Login', 'Register'];
  const handleItemPress = (item: string) => {
    console.log('item', item);
  };

  return (
    <View style={wrapperFlex}>
      <Image
        style={{
          width: 50,
          height: 50,
          overflow: 'visible',
        }}
        source={logo}
      />
      <Flyout>
        <FlyoutTrigger />
        <FlyoutItems>
          {numberOfMenuItems.map(item => {
            return (
              <FlyoutItem key={item} onPress={() => handleItemPress(item)}>
                {item}
              </FlyoutItem>
            );
          })}
        </FlyoutItems>
      </Flyout>
    </View>
  );
};

export default Header;
