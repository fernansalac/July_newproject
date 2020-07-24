import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/home.js';
import DetailScreen from '../screens/detail.js';
import SampleScreen from '../screens/sample.js';
import Profile from '../screens/profile.js';

import DrawerContent from '../screens/drawercontent.js';
import TabNavigator from './tabNav.js';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent= {(props) => <DrawerContent {...props} /> } >
            <Drawer.Screen name="Main" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}