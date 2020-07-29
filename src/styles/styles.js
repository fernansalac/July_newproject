import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    title: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: 'coral',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },
    center: {
        alignItems: 'center'
    },
    screenContent: {
    //     marginTop: 30,
        paddingHorizontal: 10,
    },
});