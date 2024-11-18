import React, { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

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
      context.closeProductDetail()
    }

    const renderIcon = (id)=>{
      const isInCard = context.cardProduct.filter(product => product.id === id).length > 0 
      if(isInCard){ 
        return (
          <div 
            className="absolute top-1 right-1 flex justify-center items-center bg-slate-200 w-6 h-6 rounded-full p-1">
            <CheckIcon className='h-6 w-6 text-green-600'/>
          </div>
        )
      }else{
        return (
          <div 
            className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1"
            onClick={(event)=>addProductsToCard(event, data.data)} >
              <PlusIcon className='h-6 w-6 text-black'/>
          </div>
        )
      }
    }
      

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={()=> showProduct(data.data)}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-gren text-xs m-2 px-3 py-0.5">{data.data?.title}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.data?.images[0]} alt={data.data?.title} />
            {renderIcon(data.data?.id)}
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light w-40'>{data.data?.title}</span>
            <span className='text-lg font-medium'>$ {data.data?.price}</span>
        </p>
    </div>
  )
}