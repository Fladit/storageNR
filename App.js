import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import Box from "./src/Components/Box/Box";
import AddBox from "./src/Components/AddBox/AddBox";

export default function App() {
  const [boxes, setBoxes] = useState([
    {
      title: 'test',
      id: '1'
    },
    {
      title: 'test',
      id: '2'
    },
    {
      title: 'test',
      id: '3'
    },
    {
      title: 'test',
      id: '4'
    },
    {
      title: 'test',
      id: '5'
    },
    {
      title: 'test',
      id: '6'
    },
    {
      title: 'test',
      id: '7'
    },
  ])


  function newBox(title) {
    newBox = {
      title,
      id: (boxes.length + 1),
    }
    setBoxes(boxes => [...boxes, newBox])
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
