import {useEffect, useState} from "react";

const useSearch = (startValue, elements, setSearchElements, isSearching, setIsSearching, containers) => {
    const [value, setValue] = useState(startValue)
    const [isFirstRender, setIsFirstRender] = useState(true)
    const [containerElements, setContainerElements] = useState([])
    const onChange = (text) => {
        setValue(text)
    }

    const updateContainers = () => {
        if (elements.length > 0) {
            if (elements[0].hasOwnProperty("boxID")) {
                setContainerElements(elements)
            }
            else {
                setContainerElements(containers)
            }
        }
    }

    const filterContainers = () => {
        const searchElements = containerElements.filter(element => element.title.toLowerCase().includes(value.toLowerCase()))
        setSearchElements(searchElements)
    }

    useEffect(() => {
        updateContainers()
    }, [elements, containers])

    useEffect(() => {
        filterContainers()
    }, [containerElements])


    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false)
        }
        else {
            if (value)
            {
                if (!isSearching)
                    setIsSearching(true)
                filterContainers()
            }
            else {
                setIsSearching(false)
                setSearchElements([])
            }
        }
    }, [value])


    return {value, onChange}
}

export default useSearch;
