import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert, Dimensions} from 'react-native';
import Box from "../Box/Box";
import AddNewElement from "../AddBox/AddNewElement";
import {getElementsFromDBByKey, addNewElementToDB} from "../../database";

export default function TemplatePage({elements, addFunction, buttonTitle, buttonPlaceHolder, Component}) {

    return (
        <View style={styles.container}>
            <AddNewElement addElementFunction = {addFunction} buttonTitle={buttonTitle} buttonPlaceHolder={buttonPlaceHolder}/>
            <ScrollView style = {styles.list} contentContainerStyle = {styles.listContent}>
                {elements.map(element => <Component element = {element} key = {element.id} />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        minHeight: Math.round(Dimensions.get('window').height),
    },
    inputContainer: {
        width:'100%',
        height:'25%'
    },
    list: {
        width: '100%',
        height: '100%',
        marginTop: 20,
    },
    listContent: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
