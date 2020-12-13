import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native'
import {observer} from "mobx-react-lite";

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
                placeHolder = {buttonPlaceHolder}
                onChangeText = {setValue}
                maxLength = {15}
            />
            <Button
                onPress = {pressHandler}
                title = {buttonTitle}
                style = {styles.button}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        padding: 10,
    },

    input: {
        width: '50%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        padding: 2,
        marginRight: '5%',
    },
    button: {
        borderRadius: 15,
    }

})

export default AddNewElementComponent;

