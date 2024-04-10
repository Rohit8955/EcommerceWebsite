import React from 'react'
import {useDispatch} from 'react-redux'
import { removefromcart,addtowishlist,increasequanity,decreasequantity } from '../store/slices/CartSlice';
const CartProduct = ({item}) => {
    const dispatch = useDispatch();
  return (
    <div className=' max-w-[370px] md:max-w-[600px] md:min-w-[600] h-[263px] bg-white p-3 boxshadow'>
        <div className='flex gap-4'>

            <div><img className='h-[150px] w-[120px] rounded-[7px]' src={item.images[0]}/>
            <div className='h-[32px] w-[120px] mt-4 flex items-center'>
                <div onClick={()=>dispatch(decreasequantity(item))} className=" w-[40px] bg-gray-300 h-full flex items-center justify-center hover:cursor-pointer"><i className='fa-solid fa-minus' ></i></div>
                <h1 className='w-[40px] text-center font-[500] text-[17px]'>{item.quantity}</h1>
                <div onClick={()=>dispatch(increasequanity(item))} className=" w-[40px] bg-gray-300 h-full flex items-center justify-center hover:cursor-pointer"><i className='fa-solid fa-plus' ></i></div>
            </div></div>

            <div>
                <h1 className='font-[500] text-[19px]'>{item.name}</h1>
                <h1 className='text-gray-400'>{item.subname}</h1>
                <div className='flex items-center gap-2'>
                    <h1 className='font-[500]'>₹{item.price}</h1>
                    <h1 className='line-through text-gray-400'>₹1299</h1>
                    <h1 className='text-green-500'>(60% off)</h1>
                </div>
                <div className='flex gap-2 items-center text-[13px] mt-1'>
                    <h1>You Save</h1>
                    <h1 className='text-green-500'>₹1501.00</h1>
                </div>
                <div className='flex gap-2 items-center text-[14px] mt-1'>
                    <h1>Size: </h1>
                    <h1 className='text-red-500'>M</h1>
                </div>
            </div>

        </div>
        <div className='border-b border-gray-400 mt-3'></div>
        <div className='flex gap-2 text-gray-500 font-[600] mt-1'>
            <button onClick={()=>dispatch(removefromcart(item))} className='w-[120px] border-r border-gray-500 '>Remove</button>
            <button onClick={()=>{dispatch(removefromcart(item)); dispatch(addtowishlist(item))}} className='w-[500px] py-1 '>Move To Wishlist</button>
        </div>
    </div>
  )
}

export default CartProduct