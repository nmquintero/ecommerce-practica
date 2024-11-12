import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCardContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

export const NavBar = () => {
    const context = useContext(ShoppingCardContext);

    let activeStyle = 'underline underline-offset-8'
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white z-20">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink 
                    to='/'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/clothes'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/electronics'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/furnitures'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/toys'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/others'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex space-x-2 items-center">
            <li className="text-black/60">
                yosefdev@yahoo.com
            </li>
            <li>
                <NavLink 
                    to='/myorders'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/myaccount'
                className={({isActive})=>
                    isActive ? activeStyle : undefined
                }>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/singin'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                    Sing In
                </NavLink>
            </li>
            <li className='flex items-center justify-between gap-2'>
                <span><ShoppingCartIcon className="h-6 w-6 text-black-500" /> </span> <span>{context.count}</span>
            </li>
        </ul>
    </nav>
  )
}