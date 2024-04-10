import React from 'react'
import Header from '../../Components/Header'
import {useSelector} from 'react-redux'
import CartProduct from '../../Components/CartProduct';
const Cart = () => {
  const data = useSelector((state)=>state.cart.cart);
  const cartitem = data.length;
  const amount = useSelector((state)=>state.cart.amount)
  return ( 
    <div>
      <Header/>
      { cartitem>0?(<div className='mt-3  pb-5 flex items-center justify-center'>
        <div className='flex md:flex-row flex-col gap-9'>
          <div className='flex flex-col gap-4'>
          {
            data.map((elem,idx)=>{
              return <CartProduct key={idx} item={elem}/>
            })
          }
          </div>
          <div className='flex flex-col gap-7'>

            <div className='h-[200px] w-[350px] md:w-[450px] bg-white boxshadow p-3 flex flex-col gap-2'>
              <h1 className='font-[500]'>Offers and Benefits</h1>
              <div className='w-full boxshadow h-[35px] '>
                <input className='w-[85%] px-1 outline-none' placeholder='Enter Coupon Code'/>
                <button className='bg-blue-400 h-full w-[15%] text-white font-[500]'>Apply</button>
              </div>
              <div className='border-b border-gray-400 mt-2'></div>
              <div className='flex justify-between items-center'>
                <p className='text-[14px] text-gray-600'>Flat ₹100 off on orders above ₹999 -</p>
                <h1 className='font-[500] text-[16px] p-[2px] bg-blue-100'>BEYOUNG100</h1>
              </div>
              <div className='border-b border-gray-400 mt-0'></div>
              <p className='font-[600]'>Show More ></p>
            </div>

            <div className='h-[200px] w-[350px] md:w-[450px] boxshadow p-3'>
              <h1 className='font-[500] text-[17px]'>Price Details (5 items)</h1>
              <div className='border-b border-gray-400 mt-2'></div>
              <div className='flex items-center justify-between mt-2'>
                <h1>Total MRP (Inc. of Taxes)</h1>
                <h1>₹{amount}</h1>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <h1>Beyoung Discount</h1>
                <h1>- ₹473</h1>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <h1>Shipping</h1>
                <h1 className='text-green-400'>Free</h1>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <h1>Cart Total</h1>
                <h1 className='font-[500]'>₹{amount-473}</h1>
              </div>
            </div>
            <button className='bg-blue-400 text-[17px] text-white font-[600] py-2 rounded-sm boxshadow'>Checkout Securely</button>

          </div>
        </div>
      </div>):(
    <div className='flex items-center justify-center mt-10'><h1 className='text-[22px] font-[600]'>Cart is Empty</h1></div>)}
    </div>
  ) 
  
}

export default Cart