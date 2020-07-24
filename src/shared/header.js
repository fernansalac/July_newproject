import * as React from 'react';
import { globalStyle } from '../styles/styles.js';

import { Text, View, ImageBackground, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {

    const triggerAlert = () => {
        alert("Test this is the header button");
    }

    return (
        <ImageBackground source={require('../assets/bg_image2.jpg')} style={styles.header}>
            <View>
                <MaterialIcons name='menu' size={30} onPress={triggerAlert} style={styles.menu} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    menu: {
        position: 'absolute',
        left: 350,
        color: "#fff"
    }
});