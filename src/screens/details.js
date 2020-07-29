import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { globalStyle } from '../styles/styles';
import Card from '../shared/card.js';

export default function DetailScreen({ route, navigation }) {

    const { id, title } = route.params;

    return (
        <View style={globalStyle.container}>
            <View style={globalStyle.screenContent}>
                <View>
                    <Text style={globalStyle.title}>{route.name} Screen</Text>
                </View>
                <View>
                    <Text>Photo ID: {id}</Text>
                    <Text>Photo Title: {title}</Text>
                    <Card>
                        <Image style={styles.image} source={{ uri: 'https://picsum.photos/id/' + id + '/200/300' }} />
                        <Text style={styles.textBold}>{title}</Text>
                    </Card>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textBold: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    
    image: {
        width: 310,
        height: 310
        //height: 610
    },
});
