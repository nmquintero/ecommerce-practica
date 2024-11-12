import { useEffect, useState } from 'react'
import { Card } from '../../Componentes/Card'
import { Layoud } from '../../Layoud'
import { ProductDetail } from '../../Componentes/ProductDetail'

const Home = ()=>{
    const [products, setProducts] = useState(null);

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

    return(
        <Layoud>
            Home
            <div className='grid grid-cols-3 gap-2 w-full max-w-screen-md z-10'>
                {products?.map(item => {
                    return <Card key={item.id} data={item}/>
                })}
                <Card/>
            </div>
            <ProductDetail/>
        </Layoud>
    );
}

export default Home;