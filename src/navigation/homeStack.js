import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home.js';
import DetailScreen from '../screens/details.js';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: 'coral',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }}/>
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    );
}