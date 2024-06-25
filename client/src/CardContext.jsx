import React, {createContext, useState} from 'react'

export const CardContext = createContext();

export const CardContextProvider = ({children}) => {
    const [cardContext, setCardContext] = useState("experiences");

    return (
       < CardContext.Provider value={{cardContext, setCardContext}}>
        {children}
       </CardContext.Provider>
    )
}