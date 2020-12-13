import React, {useEffect} from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import Container from "../Container/Container";
import {observer} from "mobx-react-lite";
import Containers from "../../../store/Containers";
import {toJS} from "mobx";

const ContainerPage = observer(({navigation, route}) => {
    const {parentBox, } = route.params
    const containers = Containers.selectContainersByBoxId(parentBox.id)
    /*
    console.log("parentBox: ", toJS(parentBox))
    console.log(toJS(containers.containers))

     */

    /*
    useEffect(() => {
        Containers.getContainersFromDB(parentBox.id)
    }, [])

     */

    const addNewContainer = (title) => Containers.addNewContainer(title, parentBox, containers.length + 1)


    return (
            <TemplatePage elements = {containers} changeFunction = {Containers.changeContainerById} addFunction = {addNewContainer}
                          buttonTitle = {"Добавить контейнер"}
                          buttonPlaceHolder = {"Введите название контейнера"} Component = {Container} navigation={navigation}/>
    );
});

export default ContainerPage;
