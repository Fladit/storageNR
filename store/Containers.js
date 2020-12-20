import {makeAutoObservable} from "mobx";
import {addNewElementToDB, changeElementFromDBByID, CONTAINERS_KEY, getElementsFromDBByKey} from "../src/database";
import {Alert} from "react-native";
import Boxes from "./Boxes";

class Containers {
    containers = []

    constructor() {
        makeAutoObservable(this)
        this.setContainers = this.setContainers.bind(this)
        this.getContainersFromDB = this.getContainersFromDB.bind(this)
        this.addNewContainer = this.addNewContainer.bind(this)
        this.changeContainerById = this.changeContainerById.bind(this)
        this.getContainersFromDB()
    }

    setContainers(containers) {
        this.containers = containers
    }

    getContainersFromDB () {
        getElementsFromDBByKey(CONTAINERS_KEY).then(res => {
            if (res.length > 0) {
                this.setContainers(res)
            }
        }).catch(e => {
            console.log("Ошибка получения информации о контейнерах", e.message)
            Alert.alert("Ошибка загрузки информации о контейнерах")
        })
    }

    addNewContainer (title, parentBox, nextID) {
        const boxID = parentBox.id
        const containerNew = {
            id: nextID,
            boxID,
            title,
            isEmpty: false,
        }
        addNewElementToDB(containerNew, CONTAINERS_KEY).then(res => {
            this.setContainers(res)
            if (parentBox.isEmpty)
            {
                parentBox.isEmpty = false
                Boxes.changeBoxById(parentBox.id, parentBox)
            }
        }).catch( e => {
            Alert.alert("Ошибка добавления нового контейнера")
            console.log("Ошибка добавления контейнера: ", e.message)
        })
    }

    changeContainerById (containerID, newContainerValue) {
        changeElementFromDBByID(CONTAINERS_KEY, containerID, newContainerValue).then(res => {
            this.setContainers(res)
        }).catch(e => {
            Alert.alert("Ошибка при изменении данных контейнера")
            console.log("Ошибка изменения контейнера: ", e.message)
        })
    }

    selectContainersByBoxId(boxID) {
        return this.containers.filter(container => container.boxID === boxID)
    }
}

export default new Containers();
