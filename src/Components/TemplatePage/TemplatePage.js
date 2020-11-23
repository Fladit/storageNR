import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert, Dimensions} from 'react-native';
import Box from "../Box/Box";
import AddNewElement from "../AddBox/AddNewElement";
import {getElementsFromDBByKey, addNewElementToDB} from "../../database";

export default function TemplatePage({elements, addFunction, changeFunction, navigation,
                                         buttonTitle, buttonPlaceHolder, Component, parent}) {
    //console.log(elements)

    return (
        <View style={styles.container}>
            <AddNewElement addElementFunction = {addFunction} buttonTitle={buttonTitle} buttonPlaceHolder={buttonPlaceHolder}/>
            <ScrollView style = {styles.list} contentContainerStyle = {styles.listContent}>
                {elements.map(element => <Component element = {element} changeFunction = {changeFunction}
                                                    navigation = {navigation} key = {element.id} />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#fff',
        //minHeight: Math.round(Dimensions.get('window').height),
    },
    inputContainer: {
        width:'100%',
        height:'25%'
    },
    list: {
        width: '100%',
        height: '100%',
    },
    listContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});


