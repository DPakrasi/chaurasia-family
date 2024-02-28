import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Marketing from './Marketing/Marketing';
import Authenticated from './Authenticated/Authenticated';
import AccountManagement from './AccountManagement/AccountManagement';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {Navigator, Screen} = createNativeStackNavigator();

const App: React.FC = () => {
  const isAuthenticated = false;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#fff',
    flex: 1,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Navigator
          initialRouteName={isAuthenticated ? 'authenticated' : 'marketing'}>
          <Screen
            name="marketing"
            component={Marketing}
            options={{title: ''}}
          />
          <Screen
            name="authenticated"
            component={Authenticated}
            options={{title: ''}}
          />
          <Screen
            name="account-management"
            component={AccountManagement}
            options={{title: ''}}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
