import React, { useState, useEffect, createFactory } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { globalStyle } from '../styles/styles';

export default function TestScreen() {

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title}>TestScreen Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});