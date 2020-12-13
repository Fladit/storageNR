import React, {useState} from 'react'
import {View, Button, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native'
const EMPTY = 'отсутствует'
import Containers from "../../../store/Containers";

const ContainerInfo = ({navigation, route}) => {
    const changeContainer = Containers.changeContainerById
    const {parentContainer} = route.params
    const [title, setTitle] = useState(parentContainer.title || EMPTY)
    const boxID = parentContainer.boxID
    const containerID = parentContainer.id
    const [description, setDescription] = useState(parentContainer.description || EMPTY)

    const reset = () => {
        parentContainer.title = ''
        parentContainer.description = ''
        parentContainer.isEmpty = true
        setTitle(EMPTY)
        setDescription(EMPTY);
        changeContainer(parentContainer.id, parentContainer)
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.buttonView}>
                <TouchableOpacity onPress = {reset}>
                    <Image source = {require("../../../assets/img/clear-icon.png")}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require("../../../assets/img/edit-icon.png")}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.infoView}>
                <Text style = {styles.textView}>Коробка №{boxID}, Контейнер №{containerID}</Text>
                <Text style = {styles.textView}>Название: {title}</Text>
                <Text style = {styles.textView}>Описание: {description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonView: {
        zIndex: 999,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 30,
    },
    infoView: {
        zIndex: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
        fontSize: 25,
        marginBottom: 20,
    }
})

export default ContainerInfo
