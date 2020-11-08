import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native'

export default function AddBox({addBox}) {
    const [value, setValue] = useState('')

    function pressHandler() {
        if (value.trim()) {
            addBox(value)
            setValue('')
        }
        else {
            Alert.alert("Название коробки не должно быть пустым!")
        }
    }
    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.input}
                value = {value}
                placeHolder = {"Введите название коробки"}
                onChangeText = {setValue}
                maxLength = {15}
            />
            <Button
                onPress = {pressHandler}
                title = "Добавить коробку"
                style = {styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        padding: 10,
    },

    input: {
        width: '50%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        padding: 2,
        marginRight: '10%',
    },
    button: {
        borderRadius: 15
    }

})

