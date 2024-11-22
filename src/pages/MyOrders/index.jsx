import React, { useContext } from 'react'
import { Layoud } from "../../Layoud";
import { ShoppingCardContext } from '../../Context'
import {Link} from "react-router-dom";
import {OrdersCard} from "../../Componentes/OrdersCard";

const MyOrders = ()=>{
    const context = useContext(ShoppingCardContext)
    return(
        <Layoud>
            <div className='flex items-center w-80 justify-center mb-4'>
              <h1 className='font-medium text-xl'>My Orders</h1>
             </div>
                {context.order?.map((order, index)=>(
                    <Link key={index} to={`/myorder/${index}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                        />
                </Link>
                ))}
        </Layoud>
    );
}
export default MyOrders