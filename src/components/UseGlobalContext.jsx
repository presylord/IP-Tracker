import { createContext, useContext, useState, useEffect } from "react";



const GlobalContext = createContext()

export const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState([])
    const [coordinates, setCoordinates] = useState([])


    const url = 'https://ipapi.co/json/'

    const fetchData = async (URL) => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setResult(data)
            setCoordinates([data.latitude, data.longitude])

        } catch (err) {
            console.log(err)
        }


    }

    useEffect(() => {
        fetchData(url)

        setLoading(false)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        const ip = e.target.ip.value
        if (ip) {
            const url = `https://ipapi.co/${ip}/json/`
            console.log('submit', ip)

            setLoading(true)
            fetchData(url)
            setLoading(false)
        }

        return



    }

    return <GlobalContext.Provider value={{ loading, result, handleSubmit, coordinates }}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = () => useContext(GlobalContext)