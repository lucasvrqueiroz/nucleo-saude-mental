import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createTables } from './services/Database';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import News from './src/screens/News';
import Account from './src/screens/Account';
import Messenger from './src/screens/Messenger';

const Stack = createStackNavigator();


export default function App() {
  useEffect(() => {
    createTables();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Messenger" component={Messenger} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}