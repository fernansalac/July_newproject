import * as React from 'react';
import { globalStyle } from '../styles/styles.js';

import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

import { View, Text, StyleSheet, Button, Linking, ImageBackground } from 'react-native';


export default function DrawerContent({ navigation }) {
    return (
        <DrawerContentScrollView style={styles.drawerContent}>
            <View style={styles.drawerSection} >
                <View style={styles.headerContainer}>
                    <Fontisto name="apple-pay" size={30} color="black" />
                    <Text style={styles.headerTitle} >APP Name</Text>
                </View>
                <View style={styles.screenContainer}>
                    <DrawerItem
                        label="Settings"
                        icon={() => (
                            <Feather name="settings" size={24} color="#485460" />
                        )}
                        onPress={() => { }}
                    />
                    <DrawerItem
                        label="Help"
                        icon={() => (
                            <Feather name="help-circle" size={24} color="#485460" />
                        )}
                        onPress={() => navigation.navigate('Profile')}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    drawerSection: {

    },
    backgroundImage: {
        flex: 1,
        width: 280,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    headerContainer: {
        flexDirection: 'row',
        borderColor: "#c8d6e5",
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingLeft: 15
    },
    headerTitle: {
        paddingLeft: 5,
        color: '#485460',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerText: {
        paddingTop: 5,
        color: '#63cdda',
        fontSize: 16
    },
    screenContainer: {
        borderColor: "#c8d6e5",
        borderBottomWidth: 1
    },
    item: {
        paddingLeft: 15,
        paddingVertical: 15
    }
});