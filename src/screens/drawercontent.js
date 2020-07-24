import * as React from 'react';
import { globalStyle } from '../styles/styles.js';

import { useNavigation, NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

import { View, Text, StyleSheet, Button, Linking } from 'react-native';


export default function DrawerContent({navigation}) {
    return (
        <DrawerContentScrollView  style={styles.drawerContent}>
            <View style={styles.drawerSection} >
                <DrawerItem
                    label="Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
                <DrawerItem
                    label="Settings"
                    onPress={() => {}}
                />
            </View>
        </DrawerContentScrollView>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    drawerSection: {
        marginTop: 15
    }
});