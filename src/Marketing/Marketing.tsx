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
      <View>
        <Text>Remaning Content</Text>
      </View>
    </ScrollView>
  );
};

export default Marketing;
