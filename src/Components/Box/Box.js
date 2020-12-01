import React from 'react';
import {Text, View, Image, StyleSheet} from "react-native";

const Box = ({element, navigation, changeFunction}) => {

    return (
        <View style = {styles.container} onStartShouldSetResponder =
            {() => {navigation.navigate('ContainerPage', {parentBox: element, changeBox: changeFunction})}}>
            <Text style = {styles.text}>{element.title}</Text>
            {element.isEmpty ?
                <Image style={styles.image} source={require(`../../../assets/img/empty-box.png`)}/>
                : <Image style={styles.image} source={require(`../../../assets/img/full-box.png`)}/>
            }
            <Text style = {styles.text}>{element.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '25%',
        height: 150,
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
