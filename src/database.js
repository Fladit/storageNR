import AsyncStorage from '@react-native-async-storage/async-storage';
import Box from "./Components/Box/Box";
export const BOXES_KEY = "boxes"
export const CONTAINERS_KEY = "container"


export async function addNewElementToDB(element, KEY) {
    try {
        const boxes = JSON.parse(await AsyncStorage.getItem(KEY))
        boxes.push(element)
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify(boxes))
        } catch (e) {
            console.log(e.message)
        }
    }
    catch (e) {
        console.log(e.message)
    }

}

export const getElementsFromDBByKey = async (KEY) => {
    let elementsFromStorage = await AsyncStorage.getItem(KEY)
    let elements = elementsFromStorage == null? null : JSON.parse(elementsFromStorage)
    if (elements == null) {
        elements = []
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify(elements))
        }
        catch (e) {
            console.log(e)
        }
    }
    console.log(elements)
    return elements
}

