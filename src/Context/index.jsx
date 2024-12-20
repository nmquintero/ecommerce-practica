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
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    
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

    const filteredProductsByTitle = (products, searchByTitle)=>{
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredProductsByCategory = (products, searchByCategory)=>{
        return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') return filteredProductsByTitle(products, searchByTitle);
        if (searchType === 'BY_CATEGORY') return filteredProductsByCategory(products, searchByCategory);
        if (searchType === 'BY_TITLE_AND_CATEGORY') return filteredProductsByCategory(products, searchByCategory)
            .filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        if (searchType === null) return products;
    }

    useEffect(()=>{
        if(searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory));
        if(searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory));
        if(!searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory));
        if(!searchByTitle && !searchByCategory) setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory));
    },[products, searchByTitle, searchByCategory]);

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
            filteredProducts,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}