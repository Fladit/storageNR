import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native'
import {addNewElementToDB, BOXES_KEY, CONTAINERS_KEY, getElementsFromDBByKey} from "../../database";
import TemplatePage from "../TemplatePage/TemplatePage";
import Container from "../Container/Container";

const ContainerPage = ({navigation, route}) => {
    const [containers, setContainers] = useState([])
    const {parentBox, } = route.params
    const changeBox = route.params.changeBox

    const selectContainersByBoxID = (boxID, containersArray) => {
        return containersArray.filter(container => container.boxID === boxID)
    }
    useEffect(() => {
        getElementsFromDBByKey(CONTAINERS_KEY).then(value => {
            if (value.length > 0) {
            const selectedContainers = selectContainersByBoxID(parentBox.id, value)
            setContainers(selectedContainers)
            }
        }).catch(e => {
            console.log("Ошибка получения информации о контейнерах", e.message)
            Alert.alert("Ошибка загрузки информации о контейнерах")
        })
    }, [])

    function insertNewContainer(title) {
        const boxID = parentBox.id
        const containerNew = {
            id: (containers.length + 1),
            boxID,
            title,
            isEmpty: true,
        }
        addNewElementToDB(containerNew, CONTAINERS_KEY).then(value => {
            //console.log("add element", parentBox)
            setContainers(containers => [...containers, containerNew])
            if (parentBox.isEmpty)
            {
                parentBox.isEmpty = false
                changeBox(parentBox.id, parentBox)
            }
        }).catch( e => {
            Alert.alert("Ошибка добавления нового контейнера")
            console.log("Ошибка добавления контейнера: ", e.message)
        })
    }

    return (
            <TemplatePage elements = {containers} addFunction = {insertNewContainer} buttonTitle = {"Добавить контейнер"}
                          buttonPlaceHolder = {"Введите название контейнера"} Component = {Container} navigation={navigation}/>
    );
};

export default ContainerPage;
