import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import './styles.css'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext)

  const handleDeleteProduct = (id)=>{
    const filteredProduct = context.cardProduct.filter(product=>product.id != id)
    context.setCardProduct(filteredProduct)
  }
  
  return (
    <aside 
    className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-aside-menu flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}>
        <div className='flex justify-between items-center'>
          <h2 className='font-medium text-lg p-6'>My Order</h2>
          <div>
            <XMarkIcon 
            onClick={()=>context.closeCheckoutSideMenuOpen()}
            className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
          </div>
        </div>
        <div className="px-6 overflow-y-auto">
          {context.cardProduct?.map(product=>(
            <OrderCard
                id={product.id}
                title={product.title}
                imageUrl={product.images?.[0]}
                price={product.price}
                handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </div>
    </aside>
  )
}
