import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert, Dimensions} from 'react-native';
import Box from "../Box/Box";
import AddNewElement from "../AddBox/AddNewElement";
import {getElementsFromDBByKey, addNewElementToDB, BOXES_KEY} from "../../database";
import TemplatePage from "../TemplatePage/TemplatePage";

export default function BoxPage({navigation}) {
    const [boxes, setBoxes] = useState([])

    useEffect(() => {
        getElementsFromDBByKey(BOXES_KEY).then(setBoxes).catch(e => {
            console.log("Ошибка получения информации о коробках", e.message)
            Alert.alert("Ошибка загрузки информации о коробках")
        })
    }, [])

    function insertNewBox(title) {
        const boxNew = {
            title,
            id: (boxes.length + 1),
            isEmpty: true,
        }
        addNewElementToDB(boxNew, BOXES_KEY).then(value => {
            setBoxes(boxes => [...boxes, boxNew])
        }).catch( e => {
            Alert.alert("Ошибка добавления новой коробки")
            console.log("Ошибка добавления коробки: ", e.message)
        })
    }

    return (
        <View>
            <TemplatePage elements={boxes} addFunction = {insertNewBox} buttonTitle = {"Добавить коробку"}
                          buttonPlaceHolder = {"Введите название коробки"} Component = {Box}/>
        </View>
    );
}

