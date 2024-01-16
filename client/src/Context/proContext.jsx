import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const proContext = createContext()

export const ProProvider = ({ children }) => {

    const [Pro, setPro] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    async function GetPros() {
        try {
            const res = await axios.get("http://localhost:3000/pro/").then(re => re.data)
            console.log(res);
            setPro(res)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetPros()
    }, [])


    const data = {
        Pro,
        GetPros,
        isLoading
    }

    return (
        <proContext.Provider value={data}>
            {children}
        </proContext.Provider>
    )
}

export const usePro = () => useContext(proContext)