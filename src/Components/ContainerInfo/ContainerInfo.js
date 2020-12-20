import React, {useState} from 'react'
import {View, Button, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, TextInput} from 'react-native'
import Containers from "../../../store/Containers";
import useInput from "./useInput";
import {useContainerOperations, createTwoButtonAlert} from "./useContainerOperations";

const EMPTY = 'отсутствует'

const ContainerInfo = ({navigation, route}) => {
    const [isFirstRender, setIsFirstRender] = useState(true)
    const changeContainer = Containers.changeContainerById
    const [parentContainer, setParentContainer] = useState(route.params.parentContainer)
    const title = useInput(parentContainer.title || EMPTY)
    const description = useInput(parentContainer.description || EMPTY)
    const [isEditActive, setIsEditActive] = useState(false)
    const operations = useContainerOperations(parentContainer, setParentContainer, title.value, title.setValue,
        description.value, description.setValue, changeContainer, isEditActive, setIsEditActive, isFirstRender, setIsFirstRender)

    const resetContainer = () => {
        operations.reset(parentContainer, title.setValue, description.setValue, changeContainer, EMPTY)
    }


    return (
        <View style = {styles.container}>
            {!isEditActive?
                <View style = {styles.buttonView}>
                    <TouchableOpacity onPress = {() => createTwoButtonAlert(resetContainer)}>
                        <Image source = {require("../../../assets/img/clear-icon.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => {setIsEditActive(true); title.setValue(parentContainer.title); description.setValue(parentContainer.description)}}>
                        <Image source = {require("../../../assets/img/edit-icon.png")}/>
                    </TouchableOpacity>
                </View>
                :
                <View style = {styles.buttonViewForEdit}>
                    <TouchableOpacity onPress = {operations.cancelChanges}>
                        <Image source = {require("../../../assets/img/cancel-icon.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {operations.applyChanges}>
                        <Image source = {require("../../../assets/img/tick-icon.png")}/>
                    </TouchableOpacity>
                </View>
            }
            <View style = {styles.infoView}>
                <Text style = {styles.textView}>Коробка №{parentContainer.boxID}, Контейнер №{parentContainer.id}</Text>
                <View style={styles.rowView}>
                    <Text style = {styles.textView}>
                        Название:
                    </Text>
                    {!isEditActive?
                        <Text style={styles.textView}>{title.value}</Text>
                        :
                        <TextInput style = {styles.input} value={title.value} onChangeText={title.onChangeText} maxLength = {15} />
                    }
                </View>
                <Text style = {styles.textView}>
                    Описание:
                </Text>
                <TextInput style = {styles.descriptionArea} value={description.value} onChangeText={description.onChangeText}
                           editable={isEditActive} multiline={true} maxLength = {150} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        minWidth: 70,
        borderStyle: 'solid',
        borderWidth: 2,
        textAlign: 'center',
        borderRadius: 6,
        padding: 2,
        fontSize: 25,
        marginLeft: 10,
    },
    buttonViewForEdit: {
        zIndex: 999,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    buttonView: {
        zIndex: 999,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 30,
    },
    infoView: {
        marginTop: 15,
        zIndex: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
        fontSize: 25,
        marginTop: 10,
    },
    rowView: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    descriptionArea: {
        marginTop: 15,
        borderWidth: 2,
        padding: 5,
        fontSize: 25,
        width: "80%",
        height: "30%",
        textAlignVertical: 'top'
    }
})

export default ContainerInfo
