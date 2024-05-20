/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from './Header/Header';

const Marketing: React.FC = () => {
  const backgroundStyle = {
    backgroundColor: '#fff',
    flex: 1,
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Header />
      <View
        style={{
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>1</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>Heading UHC Rewards</Text>
            <Text>
              Please review the terms of consitions, Privacy Policy and the GINA
              authorization to get started.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Marketing;
