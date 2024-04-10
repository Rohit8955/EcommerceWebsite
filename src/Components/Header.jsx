import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Pages/home/home.css'
import { useDispatch, useSelector } from 'react-redux'
const Header = () => {
    const [visible,setvisible] = useState(false)
    const cart = useSelector((state)=>state.cart.cart)
    const wishlist = useSelector((state)=>state.cart.wishlist);
    const cartitems = cart.length;
    const wishlistitems = wishlist.length 
  return (
    <div className='relative'>
        <div className='bg-yellow-400 flex items-center justify-center py-1'>
            <h1 className='md:text-[14px] text-[12px]'>Free Shipping Sitewide on Every Order, Don’t Miss Out!!</h1>
        </div>

        <div className='flex justify-between px-[10px] md:px-[70px] bg-black py-[6px]'>
            <div className='flex items-center gap-2 text-white hover:cursor-pointer'>
                <i className="fa-solid fa-location-dot md:text-[18px]"></i>
                <h1 className='font-[600]'>TRACK YOUR ORDER</h1>
            </div>
            <div className='flex items-center gap-1 text-white'>
                <h1 className='text-[13px] hover:cursor-pointer'>LOG IN |</h1>
                <h1 className='text-[13px] hover:cursor-pointer'>SIGNUP</h1>
            </div>
        </div>

        <div className='w-full flex md:justify-around justify-between items-center px-3 md:px-2 boxshadow py-2 md:py-2'>

            <div className='mobile-menu'>
                <i onClick={()=>setvisible(!visible)} className="fa-solid fa-bars"></i>
            </div>

            <NavLink link to={'/'}><h1 className='md:text-[27px] text-[20px] font-bold'>BEYOUNG.</h1></NavLink>

            <div className='menu'><div className='flex gap-6 font-[600] text-[15px] '>
                <button className='hover:bg-yellow-400 px-2 py-1'>MEN</button>
                <button className='hover:bg-yellow-400 px-2 py-1'>WOMEN</button>
                <button className='hover:bg-yellow-400 px-2 py-1'>COMBOS</button>
                <button className='hover:bg-yellow-400 px-2 py-1'>CARGO JOGGERS</button>
                <button className='hover:bg-yellow-400 px-2 py-1'>MEN'S SHIRTS</button>
            </div></div>

            <div className='flex gap-4 items-center'>
                <i className="fa-solid fa-magnifying-glass"></i>

                <div className='relative'>
                    <NavLink link to={'/Wishlist'}><i className="fa-regular fa-heart"></i></NavLink>
                    <div className='absolute top-[-10px] left-[6px] h-[20px] w-[20px] rounded-[50%] bg-yellow-400'>
                        <h1 className='text-center font-[600] text-[12px]'>{wishlistitems}</h1>
                    </div>
                </div>

                <div className='relative'>
                    <NavLink link to={'/Cart'}><i className="fa-solid fa-cart-shopping"></i></NavLink>
                    <div className='absolute top-[-10px] left-[6px] h-[20px] w-[20px] rounded-[50%] bg-yellow-400'>
                        <h1 className='text-center font-[600] text-[12px]'>{cartitems}</h1>
                    </div>
                </div>
            </div>

        </div>

        { visible && (<div className='showmobilemenu absolute top-[110px] z-10'>
            <div className='flex flex-col gap-3 bg-white p-3'>
                <button className='hover:bg-yellow-400 font-[500]'>MEN</button>
                <button className='hover:bg-yellow-400 font-[500]'>WOMEN</button>
                <button className='hover:bg-yellow-400 font-[500]'>COMBOS</button>
                <button className='hover:bg-yellow-400 font-[500]'>CARGO JOGGERS</button>
                <button className='hover:bg-yellow-400 font-[500]'>MEN'S SHIRTS</button>
            </div>
        </div>)}
    </div>
  )
}

export default Header