import { useContext, useEffect } from 'react'
import { Layoud } from '../../Layoud'
import { ShoppingCardContext } from '../../Context'
import { OrderCard } from '../../Componentes/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const MyOrder = ()=>{
  const context = useContext(ShoppingCardContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

    const handleDeleteProduct = (id)=>{
        const filteredProduct = context.cardProduct.filter(product=>product.id != id)
        context.setCardProduct(filteredProduct)
      }

    useEffect(()=>{
        if(!context) return
        context.closeCheckoutSideMenuOpen()
    },[context])
    return(
        <Layoud>
          <div className='flex items-center w-40 justify-between mb-6'>
              <Link to='/myorders'>
                  <ChevronLeftIcon className='w-6 h-6 text-black cursor-pointer'/>
              </Link>
              <h1>My Order</h1>
          </div>
          <div className="flex flex-col">
            {context.order?.[index]?.products.map(product => (
              <OrderCard
                  id={product.id}
                  title={product.title}
                  imageUrl={product.images?.[0]}
                  price={product.price}
                  handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </div>
        </Layoud>
        
    );
}
export default MyOrder;