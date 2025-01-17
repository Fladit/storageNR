import AsyncStorage from '@react-native-async-storage/async-storage';
import Box from "./Components/Box/Box";
export const BOXES_KEY = "boxes"
export const CONTAINERS_KEY = "container"


export async function addNewElementToDB(element, KEY) {
    try {
        const elements = JSON.parse(await AsyncStorage.getItem(KEY))
        elements.push(element)
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify(elements))
        } catch (e) {
            console.log(e.message)
        }
        return elements
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
    //console.log(elements)
    return elements
}

export const assignNewDataByKey = async (KEY, value) => {
    await AsyncStorage.setItem(KEY, JSON.stringify(value))
}



export const changeElementFromDBByID = async (KEY, id, newValue) => {
    let elements = await getElementsFromDBByKey(KEY)
    if (elements.length > 0) {
        if (KEY === BOXES_KEY) {
            elements = elements.map(element => {
                if (element.id === id)
                    return newValue
                return element
            })
            await assignNewDataByKey(KEY, elements)
        }
        else if (KEY === CONTAINERS_KEY) {
            elements = elements.map(element => {
                if (element.boxID === newValue.boxID && element.id === newValue.id)
                    return newValue;
                return element
            })
            await assignNewDataByKey(KEY, elements)
            //elements = elements.filter(element => element.boxID === newValue.boxID)
        }
        //console.log("Новый массив: ", elements)
    }
    //console.log("returned value after change: ", elements)
    return elements
}




