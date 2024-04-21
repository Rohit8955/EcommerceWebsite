import React from 'react'
import Header from '../../Components/Header'
import { removefromwishlist,addtocart,removefromcart } from '../../store/slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
const Wishlisted = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.cart.wishlist);
  const cart = useSelector((state)=>state.cart.cart);
  return (
    <div>
      <Header/>

      <div className='flex items-center justify-center mt-4'>
        <h1 className='text-[24px] font-[600]'>Your Wishlisted Items</h1>
      </div>

      <div className='flex justify-center mt-[30px]'><div className='grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 md:pb-0 pb-4'>
        {
          data.map((elem,idx)=>(
            <div key={idx} className='min-h-[400px] relative max-w-[220px] min-w-[220px]  '>
              <img className='rounded-[5px]' src={elem.images[0]}/>
              <i onClick={()=>dispatch(removefromwishlist(elem))} className="fa-solid fa-x absolute top-2 right-3 text-[12px] hover:cursor-pointer bg-gray-200 p-1 px-[6px] rounded-[50%]"></i>
              <div className='mt-1'>
                <h1 className='font-[600] text-[16px]'>{elem.name.length>25?elem.name.slice(0,22)+"..":elem.name}</h1>
                <h1 className='text-gray-500 text-[14px] font-[400]'>{elem.subname}</h1>
                <div className='flex gap-2'>
                  <h1 className='font-[500]'>₹ {elem.price}</h1>
                  <h1 className='text-gray-500  line-through'>₹1299</h1>
                  <h1 className='font-[500] text-green-500 '>(60% off)</h1>
                </div>

                {
                  cart.findIndex((item)=>item.id===elem.id)===-1?
                  (<div onClick={()=>dispatch(addtocart(elem))} className='bg-gray-300 w-[100%] flex items-center justify-center rounded-[5px] py-1 hover:cursor-pointer mt-1'>
                    <div className='flex gap-2 items-center'>
                      <i className="fa-solid fa-bag-shopping"></i>
                      <h1 className='font-[500]'>Add To Cart</h1>
                    </div>
                  </div>)
                  :
                  (
                    <div onClick={()=>dispatch(removefromcart(elem))} className='bg-gray-300 w-[100%] flex items-center justify-center rounded-[5px] py-1 hover:cursor-pointer mt-1'>
                      <div className='flex gap-2 items-center'>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <h1 className='font-[500]'>Remove from Cart</h1>
                      </div>
                  </div>
                  )
                  
                }

              </div>
            </div>
          ))
        }
      </div></div>
    </div>
  )
}

export default Wishlisted