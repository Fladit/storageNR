import React, {useState} from 'react'
import {View, Button, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native'


const ContainerInfo = ({navigation, route}) => {
    const {parentContainer} = route.params
    const [title, setTitle] = useState(parentContainer.title)
    const boxID = parentContainer.boxID
    const containerID = parentContainer.id
    const [description, setDescription] = useState(parentContainer.description || 'пусто')

    return (
        <View style = {styles.container}>
            <View style = {styles.buttonView}>
                <TouchableOpacity>
                    <Image source = {require("../../../assets/clear-icon.png")}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require("../../../assets/edit-icon.png")}/>
                </TouchableOpacity>
            </View>
            <Text>Коробка №{boxID}, Контейнер №{containerID}</Text>
            <Text>Название: {title}</Text>
            <Text>Описание: {description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 30,
    }
})

export default ContainerInfo
