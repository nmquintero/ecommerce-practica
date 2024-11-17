import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import './styles.css'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext)
  
  return (
    <aside 
    className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}>
        <div className='flex justify-between items-center'>
          <h2 className='font-medium text-lg p-6'>My Order</h2>
          <div>
            <XMarkIcon 
            onClick={()=>context.closeCheckoutSideMenuOpen()}
            className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
          </div>
        </div>
          
    </aside>
  )
}
