import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Registration from './Registration';

const {Navigator, Screen} = createNativeStackNavigator();

const AccountManagement: React.FC = () => {
  return (
    <Navigator initialRouteName="home">
      <Screen name="login" component={Login} options={{headerShown: false}} />
      <Screen
        name="registration"
        component={Registration}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default AccountManagement;
