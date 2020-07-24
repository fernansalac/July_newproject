import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/home.js';
import DetailScreen from '../screens/detail.js';
import SampleScreen from '../screens/sample.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'md-home'
                            : 'home-outline';
                    } else if (route.name === 'Details') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    } else if (route.name === 'Sample') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                style: { height: 50, paddingBottom: 8, paddingTop: 8 },
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailScreen} />
            <Tab.Screen name="Sample" component={SampleScreen} />
        </Tab.Navigator>

    );
}