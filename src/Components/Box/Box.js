import React from 'react';
import {Text, View, Image, StyleSheet} from "react-native";

const Box = ({element}) => {
    let boxImage = `../../../assets/${element.isEmpty? 'empty-box.png' : 'full-box.png'}`

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{element.title}</Text>
            {element.isEmpty ?
                <Image style={styles.image} source={require(`../../../assets/empty-box.png`)}/>
                : <Image style={styles.image} source={require(`../../../assets/full-box.png`)}/>
            }
            <Text style = {styles.text}>{element.id}</Text>
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
