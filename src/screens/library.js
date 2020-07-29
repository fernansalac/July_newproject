import * as React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import { globalStyle } from '../styles/styles';

export default function LibraryScreen({ route, navigation }) {

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title}>{route.name} Screen</Text>

        </View>
    );
}
const styles = StyleSheet.create({

});
