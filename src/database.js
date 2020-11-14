import AsyncStorage from '@react-native-async-storage/async-storage';
import Box from "./Components/Box/Box";

const BOXES_KEY = "boxes"

export async function addNewBox(box) {
    try {
        const boxes = JSON.parse(await AsyncStorage.getItem(BOXES_KEY))
        boxes.push(box)
        try {
            await AsyncStorage.setItem(BOXES_KEY, JSON.stringify(boxes))
        } catch (e) {
            console.log(e.message)
        }
    }
    catch (e) {
        console.log(e.message)
    }

}

export const getBoxes = async () => {
    let boxesFromStorage = await AsyncStorage.getItem(BOXES_KEY)
    let boxes = boxesFromStorage == null? null : JSON.parse(boxesFromStorage)
    if (boxes == null) {
        boxes = []
        try {
            await AsyncStorage.setItem(BOXES_KEY, JSON.stringify(boxes))
        }
        catch (e) {
            console.log(e)
        }
    }
    console.log(boxes)
    return boxes
}

