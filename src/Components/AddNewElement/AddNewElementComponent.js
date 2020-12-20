import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';

const AddNewElementComponent = ({addElementFunction, buttonTitle, buttonPlaceHolder}) => {
    const [value, setValue] = useState('')

    function pressHandler() {
        if (value.trim()) {
            addElementFunction(value)
            setValue('')
        }
        else {
            Alert.alert("Название не должно быть пустым!")
        }
    }
    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.input}
                value = {value}
                placeholder = {buttonPlaceHolder}
                onChangeText = {setValue}
                maxLength = {15}
            />
            <TouchableOpacity
                onPress = {pressHandler}
                style = {styles.button}>
                <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center',}}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: '5%',
    },

    input: {
        width: '50%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        padding: 2,
    },
    button: {
        minWidth: '40%',
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '7%',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#00B3FF',
    },
})

export default AddNewElementComponent;

