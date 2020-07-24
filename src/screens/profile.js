import * as React from 'react';
import { globalStyle } from '../styles/styles.js';

import { View, Text, StyleSheet, Button } from 'react-native';

export default function Profile({navigation}) {

    return (
        <View style={globalStyle.container}>
            <View>
                <Text style={globalStyle.title}>Profile Screen</Text>
                <Button title='Go to Main Screen' onPress={() => navigation.navigate('Main')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});