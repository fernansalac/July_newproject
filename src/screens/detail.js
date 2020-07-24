import * as React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import { globalStyle } from '../styles/styles';

export default function DetailScreen({ route, navigation }) {

    /* 2. Get the param */
    // const { itemId } = route.params;
    // const { otherParam } = route.params;

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title}>{route.name} Screen</Text>

             {/* parse the param using JSON.stringify and display inside Text component
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Detail', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            /> */}
            {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} /> */}

            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}

            {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            /> */}
        </View>
    );
}

