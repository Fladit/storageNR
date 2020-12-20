import React, {useEffect} from 'react';
import Box from "../Box/Box";
import TemplatePage from "../TemplatePage/TemplatePage";
import Boxes from "../../../store/Boxes";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const BoxPage = observer(({navigation}) => {

    /*
    useEffect(() => {
        Boxes.getBoxesFromDB()
    }, [])

     */

    return (
        <TemplatePage elements={Boxes.boxes} addFunction = {Boxes.addNewBox} changeFunction = {Boxes.changeBoxById} buttonTitle = {"Добавить коробку"}
                      buttonPlaceHolder = {"Название коробки"} Component = {Box} navigation = {navigation}/>
    );
})

export default BoxPage;

