import {Alert} from "react-native";
import {useEffect} from "react";

const useContainerOperations = (parentContainer, setParentContainer, getTitle, setTitle, getDescription, setDescription,
                                changeContainer, isEditActive, setIsEditActive, isFirstRender, setIsFirstRender) => {

    const EMPTY = 'отсутствует'

    const reset = () => {
        setParentContainer((parent) => {return {...parent, title: '', description: '', isEmpty: true}})
        setTitle(EMPTY)
        setDescription(EMPTY);
    }

    const cancelChanges = () => {
        setTitle(parentContainer.title || EMPTY)
        setDescription(parentContainer.description || EMPTY)
        setIsEditActive(isEdit => !isEdit)
    }

    const applyChanges = () => {
        setParentContainer((parent) => {return {...parent, title: getTitle, description: getDescription}})
        setTitle(getTitle || EMPTY)
        setDescription(getDescription || EMPTY)
        setIsEditActive(isEdit => !isEdit)
    }

    useEffect(() => {
        isFirstRender? setIsFirstRender(false): changeContainer(parentContainer.id, parentContainer)

    }, [parentContainer])

    return {reset, cancelChanges, applyChanges}
}

const createTwoButtonAlert = (resetFunction) =>
    Alert.alert(
        "Предупреждение",
        "Вы уверены, что хотите очистить данный контейнер?",
        [
            {
                text: "Отменить",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Принять", onPress: () => resetFunction() }
        ],
        { cancelable: false }
    );



export {useContainerOperations, createTwoButtonAlert};
