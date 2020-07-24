import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home.js';
import DetailScreen from './src/screens/detail.js';
import SampleScreen from './src/screens/sample.js';
import Header from './src/shared/header.js';

// import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  const openMenu = () => {
    alert('This is a button from header');
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackground: props => <Header{...props} />,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Home Screen' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'My Detail Screen' }} />
        <Stack.Screen name="Sample" component={SampleScreen} options={{ title: 'My Sample Screen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


