import React from 'react';
import { StyleSheet, View, ScrollView,} from 'react-native';
import AddNewElementComponent from "../AddNewElement/AddNewElementComponent";

const TemplatePage = ({elements, addFunction, changeFunction, navigation,
                          buttonTitle, buttonPlaceHolder, Component}) => {
    return (
        <View style={styles.container}>
            <AddNewElementComponent addElementFunction = {addFunction} buttonTitle={buttonTitle} buttonPlaceHolder={buttonPlaceHolder}/>
            <ScrollView style = {styles.list} contentContainerStyle = {styles.listContent}>
                {elements.map(element => <Component element = {element} changeFunction = {changeFunction}
                                                    navigation = {navigation} key = {element.id} />)}
            </ScrollView>
        </View>
    );
}

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


