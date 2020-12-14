import {action, makeAutoObservable, observable} from "mobx";
import {addNewElementToDB, BOXES_KEY, changeElementFromDBByID, getElementsFromDBByKey} from "../src/database";
import {Alert} from "react-native";

class Boxes {
   boxes = []

    constructor() {
        makeAutoObservable(this)
        this.getBoxesFromDB = this.getBoxesFromDB.bind(this)
        this.setBoxes = this.setBoxes.bind(this)
        this.addNewBox = this.addNewBox.bind(this)
        this.changeBoxById = this.changeBoxById.bind(this)
        this.getBoxesFromDB()
    }

    getBoxesFromDB () {
        getElementsFromDBByKey(BOXES_KEY).then(res => {
            if (res.length > 0)
                this.setBoxes(res)
        }).catch(e => {
            console.log("Ошибка получения информации о коробках", e.message)
            Alert.alert("Ошибка загрузки информации о коробках")
        })
    }
    setBoxes(boxes) {
       this.boxes = boxes
    }

    addNewBox(title) {
        const boxNew = {
            title,
            id: (this.boxes.length + 1),
            isEmpty: true,
        }
        addNewElementToDB(boxNew, BOXES_KEY).then(res => {
            this.setBoxes(res)
        }).catch( e => {
            Alert.alert("Ошибка добавления новой коробки")
            console.log("Ошибка добавления коробки: ", e.message)
        })
    }

    changeBoxById(id, newBoxValue) {
        changeElementFromDBByID(BOXES_KEY, id, newBoxValue).then(res => {
            this.setBoxes(res)
        }).catch(e => {
            Alert.alert("Ошибка при изменении данных коробки")
            console.log("Ошибка изменения коробки: ", e.message)
        })
    }
}

export default new Boxes();
