import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Events from './Events';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {Navigator, Screen} = createNativeStackNavigator();

const backgroundStyle = {
  backgroundColor: '#fff',
  flex: 1,
};

const Authenticated: React.FC = () => {
  return (
    <SafeAreaProvider style={backgroundStyle}>
      <Navigator initialRouteName="home">
        <Screen name="home" component={Home} options={{headerShown: false}} />
        <Screen
          name="events"
          component={Events}
          options={{headerShown: false}}
        />
      </Navigator>
    </SafeAreaProvider>
  );
};

export default Authenticated;
