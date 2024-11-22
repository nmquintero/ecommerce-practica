import { ChevronRightIcon } from '@heroicons/react/16/solid'
import React from 'react'

export const OrdersCard = props => {
    const {totalPrice, totalProducts} = props

  return (
    <div className='flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg'>
        <p className='flex justify-between w-full items-center'>
          <div className='flex flex-col'>
            <span className='font-light'>01.02.23</span>
            <span className='font-light'>Article No: {totalProducts}</span>
          </div>
          <div className='flex flex-row items-center gap-3'>
            <span className='font-medium text-2xl'>$ {totalPrice}</span>
            <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/> 
          </div>
        </p>
    </div>
  )
}



