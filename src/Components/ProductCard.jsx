import React from 'react'
import img from '../assets/polots1.1.jpg'
import { NavLink } from 'react-router-dom'
import { addtowishlist } from '../store/slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
const ProductCard = ({item}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state)=>state.cart.wishlist);
  const inwishlist = wishlist.findIndex((elem)=>elem.id===item.id);

  return (
    <div className='md:h-[400px] h-[307px] relative min-w-[200px] max-w-[200px] md:min-w-[240px] md:max-w-[240px] border-[1px] border-gray-400 rounded-[10px] overflow-hidden hover:cursor-pointer'>
        <img className='w-full md:h-[320px] h-[230px]' src={item.images[0]}/>
        <div onClick={()=>dispatch(addtowishlist(item))} className={`h-[25px] w-[25px] absolute top-2 right-2 ${inwishlist!==-1?"bg-pink-500":null} bg-gray-400 rounded-full flex items-center justify-center`}><i className="fa-regular fa-heart text-white text-[16px]"></i></div>
        <NavLink link to={`/details/${item.id}`}><div className='px-2 mt-1'>
            <h1 className='font-[600]'>{item.name.length>25?item.name.slice(0,22) + "..":item.name}</h1>
            <h1 className='text-gray-400 text-[15px]'>{item.subname}</h1>
            <div className='flex items-center gap-2 md:mt-1'>
                <h1 className='font-[500]'>₹ {item.price}</h1>
                <h1 className='line-through text-gray-400'>₹2369</h1>
                <h1 className='text-green-600 font-[600]'>(60% Off)</h1>
            </div>
        </div></NavLink>
    </div>
  )
}

export default ProductCard