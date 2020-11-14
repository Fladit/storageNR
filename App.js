import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert} from 'react-native';
import Box from "./src/Components/Box/Box";
import AddBox from "./src/Components/AddBox/AddBox";
import {getBoxes, addNewBox} from "./src/database";

export default function App() {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    getBoxes().then(setBoxes).catch(e => {
      console.log("Ошибка получения информации о коробках", e.message)
      Alert.alert("Ошибка загрузки информации о коробках")
    })
  }, [])

  function newBox(title) {
    const boxNew = {
      title,
      id: (boxes.length + 1),
      isEmpty: true,
    }
    addNewBox(boxNew).then(value => {
      setBoxes(boxes => [...boxes, boxNew])
    }).catch( e => {
      Alert.alert("Ошибка добавления новой коробки")
      console.log("Ошибка добавления коробки: ", e.message)
    })
  }

  return (
    <View style={styles.container}>
      <AddBox addBox = {newBox}/>
      <ScrollView style = {styles.list} contentContainerStyle = {styles.listContent}>
        {boxes.map(box => <Box box = {box} key = {box.id} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
