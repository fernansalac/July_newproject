import React, { useState, useEffect } from 'react';
import { globalStyle } from '../styles/styles.js';

import axios from 'axios';

import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../shared/card.js';

export default function HomeScreen({ navigation, route }) {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
            console.log(res);
            setPhotos(res.data.slice(0,10));
        })
    }, []);
    
    return (
        <View style={globalStyle.container}>
            <ScrollView style={globalStyle.screenContent}>
                {/* <View>
                    <Text style={globalStyle.title}>{route.name} Screen</Text>
                </View> */}

                <FlatList
                    data={photos}
                    renderItem={({ item }) => (
                        <Card>
                            {/* <TouchableOpacity onPress={() => navigation.navigate('Details', {user: 'Fernan'})} > */}
                            <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id, title: item.title})} >
                                <Image style={styles.image} source={{ uri: 'https://picsum.photos/id/' + item.id + '/200/300' }} />
                            </TouchableOpacity>
                        </Card>
                    )}
                />

                {/* {
                    photos.map(photo => <Image style={styles.image} source={{ uri: 'https://picsum.photos/id/' + photo.id + '/200/300' }} />)
                } */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 310,
        height: 310
        //height: 610
    },
});