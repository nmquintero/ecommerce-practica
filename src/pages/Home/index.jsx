import { useContext } from 'react'
import { Card } from '../../Componentes/Card'
import { Layoud } from '../../Layoud'
import { ProductDetail } from '../../Componentes/ProductDetail'
import { ShoppingCardContext } from '../../Context'

const Home = ()=>{
    const context = useContext(ShoppingCardContext)

    const renderView = () => {
        const { searchByTitle, filteredProducts, products } = context;

        if (searchByTitle?.length > 0) {
            if (filteredProducts?.length > 0) {
                return filteredProducts.map(item => <Card key={item.id} data={item} />);
            } else {
                return (
                    <div className='flex justify-center w-80'>
                        <div className='flex justify-center font-bold text-xl'>Search not found</div>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="feather feather-search w-16 h-16 opacity-50 mx-auto mt-4"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                );
            }
        } else {
            return products?.map(item => <Card key={item.id} data={item} />);
        }
    }

    return(
        <Layoud>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <div className='font-medium text-xl'>Exclusive Products</div>
            </div>
            <input 
                className='rounded-lg border-black w-80 p-4 mb-4 focus:outline-1' 
                type="text" 
                placeholder='Search product'
                onChange={(event)=> context.setSearchByTitle(event.target.value)} />
            <div className='grid grid-cols-3 gap-2 w-full max-w-screen-md z-10'>
                {renderView()}
                <Card/>
            </div>
            <ProductDetail/>
        </Layoud>
    );
}

export default Home;