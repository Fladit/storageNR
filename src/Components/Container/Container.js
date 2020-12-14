import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native'

const Container = ({element, navigation}) => {

    return (
        <View style = {styles.container} onStartShouldSetResponder = {() => {navigation.navigate('ContainerInfo', {parentContainer: element, })}}>
            <Text style = {styles.text}>{element.title}</Text>
            {
                element.isEmpty?
                    <Image style={styles.image} source={require('../../../assets/img/message.png')}/>
                    :<Image style={styles.image} source={require('../../../assets/img/full_message.png')}/>
            }
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
        marginTop: 2,
    }
})

export default Container;
