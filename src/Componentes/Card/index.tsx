import React, { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import { PlusIcon } from '@heroicons/react/24/solid';

export const Card = (data) => {
    const context = useContext(ShoppingCardContext);

    const showProduct = (product)=>{
      context.openProductDetail()
      context.setProductToShow(product)
    }

    const addProductsToCard = (event, productData)=>{
      event.stopPropagation()
      context.setCount(context.count + 1)
      context.setCardProduct([...context.cardProduct, productData])
      context.openCheckoutSideMenuOpen()
      context.clouseProductDetail()
      console.log(context.cardProduct)
    }

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={()=> showProduct(data.data)}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data?.title}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.data?.images[0]} alt={data.data?.title} />
            <div 
                className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1"
                onClick={(event)=>addProductsToCard(event, data.data)} >
                  <PlusIcon className='h-6 w-6 text-black'/>
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light w-40'>{data.data?.title}</span>
            <span className='text-lg font-medium'>$ {data.data?.price}</span>
        </p>
    </div>
  )
}
