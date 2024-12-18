import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import './styles.css'
import {totalPrice} from "../../utils/index.js";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext)

  const handleDeleteProduct = (id)=>{
    const filteredProduct = context.cardProduct.filter(product=>product.id != id)
    context.setCardProduct(filteredProduct)
  }

  const handleCheckout = ()=>{
      const orderToAdd = {
          date:'01.11.2024',
          products:context.cardProduct,
          totalProducts:context.cardProduct.length,
          totalPrice: totalPrice(context.cardProduct)
      }
      context.setOrder([...context.order, orderToAdd])
      context.setCardProduct([])
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
        <div className="px-6 overflow-y-auto flex-1">
          {context.cardProduct?.length > 0 && context.cardProduct?.map(product=>(
            <OrderCard
                id={product?.id}
                title={product?.title}
                imageUrl={product?.images?.[0]}
                price={product?.price}
                handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </div>
        <div className='px-6 mb-6'>
            <p className='flex flex-row justify-between mb-2'>
                <span className='text-sm font-light'>Total</span>
                <span className='text-lg text-2xl'>$ {totalPrice(context.cardProduct)}</span>
            </p>
            <Link to='/myorders/last'>
                <button
                    className='w-full py-3 bg-black text-white text-lg rounded'
                    onClick={()=>handleCheckout()}>Checkout</button>
            </Link>
        </div>
    </aside>
  )
}
