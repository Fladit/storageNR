import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native'
import {Dimensions} from "react-native";

const Container = ({element}) => {
    let containerImage = `../../../assets/message.png`

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{element.title}</Text>
            <Image style={styles.image} source={require(containerImage)}/>
            <Text style = {styles.text}>{element.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '25%',
        height: 150,   // При height: '25%' работает очень криво
        justifyContent:'flex-end',
        alignItems: 'center',

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        marginTop: 2
    }
})

export default Container;
