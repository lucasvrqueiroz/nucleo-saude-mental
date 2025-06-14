import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Account from './src/screens/Account';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Account />
    </>
  );
}