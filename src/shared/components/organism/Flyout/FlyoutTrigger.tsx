import React, {PropsWithChildren, useContext, useRef} from 'react';
import {Pressable, View, Text} from 'react-native';
import {FlyoutContext} from './FlyoutContext';
import {flyoutTriggerStyles} from './FlyoutStyles';

export const DefaultTrigger: React.FC = () => {
  const numberOfView = Array.from(Array(3));
  return (
    <View style={flyoutTriggerStyles.hamburgerMenuWrapper}>
      {numberOfView.map((value, index) => {
        return (
          <View key={index} style={flyoutTriggerStyles.hamburgerMenuItem} />
        );
      })}
    </View>
  );
};

export const FlyoutTrigger: React.FC<PropsWithChildren> = ({children}) => {
  const pressableTrigger = useRef<View | null>(null);
  const {handlePress} = useContext(FlyoutContext);

  return (
    <Pressable
      style={flyoutTriggerStyles.trigger}
      onPress={() => handlePress(pressableTrigger)}
      ref={pressableTrigger}>
      {children ? <Text>{children}</Text> : <DefaultTrigger />}
    </Pressable>
  );
};
