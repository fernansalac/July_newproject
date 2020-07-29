import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './homeStack.js';
import TestScreen from '../screens/testScreen.js';
import LibraryScreen from '../screens/library.js';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

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
                    } else if (route.name === 'Library') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                style: {}
            })}
            tabBarOptions={{
                style: { height: 50, paddingBottom: 8, paddingTop: 8, backgroundColor: '#63cdda' },
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Profile" component={TestScreen} />
        </Tab.Navigator>

    );
}