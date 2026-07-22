import React, { useContext } from 'react'
import CartCard from '../components/CartCard'
import { MyEComm } from '../context/MyEComm';

const CartScreen = () => {

    let {cartItems}= useContext(MyEComm);
  return (
    <div className='text-6xl h-[95%] grid grid-cols-3 gap-4'>
        
        {
            cartItems.map((elem)=>{
                return <CartCard key={elem.id} product={elem}/>
            })
        }
    </div>
  )
}

export default CartScreen