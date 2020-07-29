import * as React from 'react';
import { globalStyle } from '../styles/styles.js';

import { View, Text, StyleSheet, Button } from 'react-native';

export default function FeedScreen({ route, navigation }) {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title}>{route.name} Screen</Text>

            {/* Updating options with setOption */}
            {/* <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({

});