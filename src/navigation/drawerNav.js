import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../screens/drawercontent.js';
import TabNavigator from './tabNav.js';
import TestScreen from '../screens/testScreen.js';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent= {(props) => <DrawerContent {...props} /> } >
            <Drawer.Screen name="Main" component={TabNavigator} />
            <Drawer.Screen name="Settings" component={TestScreen} />
        </Drawer.Navigator>
    );
}