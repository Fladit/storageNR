import React from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import useSearch from "./useSearch";
import {observer} from "mobx-react-lite";
import Containers from "../../../store/Containers";

const SearchComponent = observer(({elements, setSearchElements, isSearching, setIsSearching}) => {
    const search = useSearch("", elements, setSearchElements, isSearching, setIsSearching, Containers.containers)
    return (
        <View style={styles.container} pointerEvents={elements.length > 0? "auto" : "none"}>
            <TextInput value={search.value} onChangeText={search.onChange} style={styles.input} placeholder={"Введите название"} maxLength={15}/>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        paddingLeft: 10,
        minWidth: '35%',
        borderWidth: 2,
        borderRadius: 12,
        fontSize: 14,
    },
})

export default SearchComponent;
