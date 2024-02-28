/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logo} from '../../assets';
import {Flyout, FlyoutTrigger, FlyoutItems, FlyoutItem} from '../../shared';
import {headerStyles} from './HeaderStyles';

const {wrapperFlex} = headerStyles;

const Header: React.FC = () => {
  // Here any should be replaced by your specific navigation type or add a generic type
  // Check - https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
  const navigation = useNavigation<any>();
  const numberOfMenuItems = ['Login', 'Register'];
  const handleItemPress = (item: string) => {
    navigation.navigate('account-management', {
      screen: item === 'Login' ? 'login' : 'registration',
    });
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
