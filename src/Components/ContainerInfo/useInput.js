import {useState} from "react";
import {Alert} from "react-native";


const useInput = (startValue) => {
    const [value, setValue] = useState(startValue)
    const onChangeText = (value) => {
        setValue(value)
    }
    return {value, setValue, onChangeText}
}




export default useInput;
