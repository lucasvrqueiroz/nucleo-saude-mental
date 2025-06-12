import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from 'react-native';  
import { Login } from "./src/screens/Login/index.js";
import { Register } from "./src/screens/Register/index.js";
import { Home } from "./src/screens/Home/index.js";
import { Account } from './src/screens/Account/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Account />
    </>
    
  );
};
