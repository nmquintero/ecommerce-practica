import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import './productDetail.css'
import { ShoppingCardContext } from '../../Context'

export const ProductDetail = () => {
  const context = useContext(ShoppingCardContext)
  
  return (
    <aside 
    className={`${context.isDetailOpem ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}>
        <div className='flex justify-between items-center'>
          <h2 className='font-medium text-lg p-6'>Details</h2>
          <XMarkIcon 
          onClick={()=>context.closeProductDetail()}
          className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
        </div>
        
          {console.log(context.productToShow)}
          <figure className='px-6'>
            <img
              className='w-full h-full rounded-lg' 
              src={context.productToShow?.images ? context.productToShow?.images[0] : ''} 
              alt={context.productToShow.title} />
          </figure>
          <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
            <span className='font-medium text-md'>{context.productToShow.title}</span>
            <span className='font-medium text-sm'>{context.productToShow.description}</span>
          </p>
    </aside>
  )
}
