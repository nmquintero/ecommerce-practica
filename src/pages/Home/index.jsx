import { useContext } from 'react'
import { Card } from '../../Componentes/Card'
import { Layoud } from '../../Layoud'
import { ProductDetail } from '../../Componentes/ProductDetail'
import { ShoppingCardContext } from '../../Context'

const Home = ()=>{
    const context = useContext(ShoppingCardContext)

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
                {context.products?.map(item => {
                    return <Card key={item.id} data={item}/>
                })}
                <Card/>
            </div>
            <ProductDetail/>
        </Layoud>
    );
}

export default Home;