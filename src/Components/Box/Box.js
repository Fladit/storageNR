import React from 'react';
import {Text, View, Image, StyleSheet} from "react-native";

const Box = ({box}) => {
    console.log()
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{box.title}</Text>
            <Image style = {styles.image} source = {require('../../../assets/empty-box.png')}/>
            <Text style = {styles.text}>{box.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '25%',
        height: '25%',
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
export default Box;
