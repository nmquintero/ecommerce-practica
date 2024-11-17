import { createContext, useState } from 'react';

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({children})=>{
    // Shoping card - Increment cuality
    const [count, setCount] = useState(0)
    // Shoping card - add products to card
    const [cardProduct, setCardProduct] = useState([])
    // Product details - Open/Clouse
    const [isDetailOpem, setIsDetailOpem] = useState(false)
    const openProductDetail = ()=>setIsDetailOpem(true)
    const closeProductDetail = ()=>setIsDetailOpem(false)
    // Checkout side menu - Open/Clouse
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenuOpen = ()=>setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenuOpen = ()=>setIsCheckoutSideMenuOpen(false)
    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    return(
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isDetailOpem,
            productToShow,
            setProductToShow,
            cardProduct,
            setCardProduct,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenuOpen,
            closeCheckoutSideMenuOpen
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}