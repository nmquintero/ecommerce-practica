import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import './productDetail.css'

export const ProductDetail = () => {
  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white z-10'>
        <div className='flex justify-between items-center'>
          <h2 className='font-medium text-lg p-6'>Details</h2>
          <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
        </div>
    </aside>
  )
}
