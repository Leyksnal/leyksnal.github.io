import React from "react";
import { createContext, useState } from "react";

export const Context = createContext()

export const Global = ({children}) =>{
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [error, setError] = useState("")


    return (
        <Context.Provider value={{name, setName, date, setDate, error, setError}}>
            {children}
        </Context.Provider>
    )
}