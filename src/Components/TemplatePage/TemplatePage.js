import React, {useState} from 'react';
import { StyleSheet, View, ScrollView,} from 'react-native';
import AddNewElementComponent from "../AddNewElement/AddNewElementComponent";
import SearchComponent from "../SearchComponent/SearchComponent";
import Container from "../Container/Container";
import {observer} from "mobx-react-lite";

const TemplatePage = observer(({elements, addFunction, changeFunction, navigation,
                          buttonTitle, buttonPlaceHolder, Component}) => {
    const [searchElements, setSearchElements] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    return (
        <View style={styles.container}>
            <SearchComponent elements={elements} setSearchElements={setSearchElements} isSearching={isSearching} setIsSearching={setIsSearching}
                             />
            <AddNewElementComponent addElementFunction = {addFunction} buttonTitle={buttonTitle} buttonPlaceHolder={buttonPlaceHolder}/>
            {isSearching ?
                <ScrollView style = {styles.list} contentContainerStyle = {styles.listContent}>
                    {searchElements.map(element => <Container element = {element}
                                                        navigation = {navigation} key = {"" + element.id + "" + element.boxID} />)}
                </ScrollView>
                :
                <ScrollView style = {styles.list} contentContainerStyle = {styles.listContent}>
                    {elements.map(element => <Component element = {element}
                                                        navigation = {navigation} key = {element.id} />)}
                </ScrollView>
            }
        </View>
    );
})

export default TemplatePage;


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


