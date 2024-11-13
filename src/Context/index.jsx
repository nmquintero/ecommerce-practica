import { createContext, useState } from 'react';

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({children})=>{
    const [count, setCount] = useState(0)
    const [isDetailOpem, setIsDetailOpem] = useState(false)
    return(
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            isDetailOpem,
            setIsDetailOpem
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}