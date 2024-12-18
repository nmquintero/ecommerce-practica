import { createContext, useState, useEffect } from 'react';

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({children})=>{
    // Shoping card - Increment cuality
    const [count, setCount] = useState(0)
    // Shoping card - add products to card
    const [cardProduct, setCardProduct] = useState([])
    // Shoping card - Order
    const [order, setOrder] = useState([])
    // Product details - Open/Clouse
    const [isDetailOpem, setIsDetailOpem] = useState(false)
    const openProductDetail = ()=>setIsDetailOpem(true)
    const closeProductDetail = ()=>setIsDetailOpem(false)
    // Checkout side menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenuOpen = ()=>setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenuOpen = ()=>setIsCheckoutSideMenuOpen(false)
    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})
    // Get products from API
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null)
    // Get products by tytle 
    const [searchByTitle, setSearchByTitle] = useState(null)
    
    useEffect(()=>{
            const API = 'https://api.escuelajs.co/api/v1'
            const fetchData = async ()=>{
                try {
                    const response = await fetch(`${API}/products`)
                    const data = await response.json()
                    setProducts(data)
                } catch (error) {
                    console.warn(error)
                }
            }
            fetchData();
        },[]);

    const filteredProductsByTitle = (products, searchByTytle)=>{
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    useEffect(()=>{
        if(searchByTitle) setFilteredProducts(filteredProductsByTitle(products, searchByTitle));
    },[products, searchByTitle]);
        

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
            closeCheckoutSideMenuOpen,
            order,
            setOrder,
            products,
            setProducts,
            searchByTitle,
            setSearchByTitle,
            filteredProducts
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}