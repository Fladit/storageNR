import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert, Dimensions} from 'react-native';
import Box from "../Box/Box";
import {getElementsFromDBByKey, addNewElementToDB, BOXES_KEY, changeElementFromDBByID} from "../../database";
import TemplatePage from "../TemplatePage/TemplatePage";

export default function BoxPage({navigation}) {
    const [boxes, setBoxes] = useState([])

    useEffect(() => {
        navigation.setParams({changeBox: changeBox})
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
            setBoxes(value)
        }).catch( e => {
            Alert.alert("Ошибка добавления новой коробки")
            console.log("Ошибка добавления коробки: ", e.message)
        })
    }
    function changeBox(boxID, newBoxValue) {
        console.log("Start changeBox", newBoxValue, 'value')
        changeElementFromDBByID(BOXES_KEY, boxID, newBoxValue).then(setBoxes).catch(e => {
            Alert.alert("Ошибка при изменении данных коробки")
            console.log("Ошибка изменения коробки: ", e.message)
        })
    }

    return (
            <TemplatePage elements={boxes} addFunction = {insertNewBox} changeFunction = {changeBox} buttonTitle = {"Добавить коробку"}
                          buttonPlaceHolder = {"Введите название коробки"} Component = {Box} navigation = {navigation}/>
    );
}

