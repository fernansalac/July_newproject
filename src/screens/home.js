import * as React from 'react';
import { globalStyle } from '../styles/styles.js';

import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation, route }) {
    return (
        <View style={globalStyle.container}>
            <View>
                <Text style={globalStyle.title}>{route.name} Screen</Text>
            </View>
            
            {/* <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            /> */}

            {/* <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Detail route with params 
                    navigation.navigate('Detail', 
                    {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
            <Button
                title="Go to Sample screen"
                onPress={() => navigation.navigate('Sample')}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({

});