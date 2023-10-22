import React, { useState } from 'react';
import String from './constants/String';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserAgreementScreen from './Screens/UserAgreementScreen';
import { HomeScreen } from './Screens/HomeScreen';
import AccountScreen from './Screens/AccountScreen';
import LoginScreen from './Screens/loginScreens/LoginScreen';
import RegisterScreen from './Screens/loginScreens/RegisterScreen';


function App(): JSX.Element {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={String.Screen.HomeScreen} component={HomeScreen} options={{header:()=>null}}/>
        <Stack.Screen name={String.Screen.AccountScreen} component={AccountScreen} options={{header:()=>null}}/>
        <Stack.Screen name={String.Screen.UserAgreementScreen} component={UserAgreementScreen} options={{header:()=>null}}/>
        <Stack.Screen name={String.Screen.LoginScreen} component={LoginScreen} options={{header:()=>null}}/>
        <Stack.Screen name={String.Screen.RegisterScreen} component={RegisterScreen} options={{header:()=>null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
