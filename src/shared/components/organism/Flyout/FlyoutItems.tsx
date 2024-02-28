import React, {PropsWithChildren, useContext} from 'react';
import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import {FlyoutContext} from './FlyoutContext';
import {flyoutItemsStyles} from './FlyoutStyles';

export const FlyoutItems: React.FC<PropsWithChildren> = ({children}) => {
  const {itemPosition} = useContext(FlyoutContext);
  const {top, left} = itemPosition || {top: 200, left: 200};

  return itemPosition ? (
    <View style={{top, left, ...flyoutItemsStyles.menutItems}}>{children}</View>
  ) : null;
};

export interface FlyoutItemProps extends PropsWithChildren {
  onPress?: (event: GestureResponderEvent) => void | null | string;
}

export const FlyoutItem: React.FC<FlyoutItemProps> = ({children, onPress}) => {
  const {setItemPosition} = useContext(FlyoutContext);
  const handlePress = (event: GestureResponderEvent) => {
    setItemPosition(undefined);
    onPress && onPress(event);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={flyoutItemsStyles.menuItem}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};
