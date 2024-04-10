import React, { useState } from 'react'
import Header from '../../Components/Header'
import { mensdata } from '../../mensdata'
import { womensdata } from '../../womensdata'
import {useParams} from 'react-router-dom'
import { addtocart,increasequanity,decreasequantity } from '../../store/slices/CartSlice'
import {useDispatch,useSelector} from 'react-redux'
const Details = () => {

  const dispatch = useDispatch();

  const {id} = useParams();
  let data = null; 

  if (id && !isNaN(id)) {
    const parsedId = parseInt(id); // Parse id to integer

    if (parsedId <= mensdata.length) {
      data = mensdata.find(item => item.id === parsedId);
    }
    else {
      data = womensdata.find(item => item.id === parsedId);
    }
  }

  const cart = useSelector((state)=>state.cart.cart);
  const ispresent = cart.findIndex((item)=>item.id===data.id);
  console.log('Data:', data);
  const images = data.images;
  // console.log(images)
  const [ind,setind] = useState(0)
  const[frontimg,setfrontimg] = useState(images[ind])

  const handleclicked = (num)=>{
    if(num===0){  //for previous
      if(ind===0){
        setind(images.length-1)
      }
      else {setind((prev)=>prev-1);}
      
      setfrontimg(images[ind])
    }
    else{  // for next
      if(ind===images.length-1){
        setind(0);
      }
      else {setind((prev)=>prev+1)}
      
      setfrontimg(images[ind])
    }
  }
  return (
    <div>
      <Header/>

      <div className='flex items-center justify-center mt-[10px] md:mt-[30px] pb-3'><div className='flex flex-col md:flex-row gap-3 md:gap-7'>
        <div className='flex gap-1'>

          <div className='productimages'><div className='flex flex-col gap-1'>
            {
              images.map((elem,idx)=>(
                <div className='w-[90px] h-[125px]' key={idx}>
                  <img onClick={()=>{setfrontimg(elem);setind(idx)}} className='w-full h-full object-cover' src={elem}/>
                </div>
              ))
            }
          </div></div>

          <div className='md:w-[500px] md:h-[900px] relative'>
            <img src={frontimg}/>
            <i onClick={()=>handleclicked(0)} className="fa-solid fa-chevron-left absolute top-[50%] md:top-[30%] text-white text-[24px] left-4 hover:cursor-pointer"></i>
            <i onClick={()=>handleclicked(1)} className="fa-solid fa-chevron-right absolute top-[50%] md:top-[30%] right-4 text-white text-[24px] hover:cursor-pointer"></i>
          </div>

        </div>
        <div className='flex flex-col gap-1 px-3'>
          <h1 className='text-[20px] font-[500]'>{data.name}</h1>
          <h1 className='text-gray-500'>{data.subname}</h1>
          <div className='flex gap-2 text-[17px] mt-1'>
            <h1 className='font-[500]'>₹{data.price}</h1>
            <h1 className='text-gray-500 line-through'>₹2499</h1>
            <h1 className='text-green-500 font-[500]'>(60% off)</h1>
          </div>
          <h1 className='text-gray-500 font-[600]'>Inclusive of All Taxes + Free Shipping</h1>
          <h1 className='font-[500] text-[14px]'>Buy Any 2 & Get ₹250/- OFF (Code: URBAN250)</h1>
          <div className='flex flex-col gap-1 mt-2'>
            <h1>SIZE</h1>
            <div className='flex gap-3'>
              <div className='border border-gray-500 h-[50px] w-[50px] rounded-md flex items-center justify-center hover:cursor-pointer'><h1>M</h1></div>
              <div className='border border-gray-500 h-[50px] w-[50px] rounded-md flex items-center justify-center hover:cursor-pointer'><h1>L</h1></div>
              <div className='border border-gray-500 h-[50px] w-[50px] rounded-md flex items-center justify-center hover:cursor-pointer'><h1>XL</h1></div>
              <div className='border border-gray-500 h-[50px] w-[50px] rounded-md flex items-center justify-center hover:cursor-pointer'><h1>XXL</h1></div>
            </div>
          </div>
          {ispresent!==-1 && (<div className='h-[32px] w-[120px] mt-4 flex items-center'>
            <div onClick={()=>dispatch(decreasequantity(data))} className=" w-[40px] bg-gray-300 h-full flex items-center justify-center hover:cursor-pointer"><i className='fa-solid fa-minus' ></i></div>
            <h1 className='w-[40px] text-center font-[500] text-[17px]'>{cart[ispresent].quantity}</h1>
            <div onClick={()=>dispatch(increasequanity(data))} className=" w-[40px] bg-gray-300 h-full flex items-center justify-center hover:cursor-pointer"><i className='fa-solid fa-plus' ></i></div>
          </div>)}

          <div className='flex gap-4 mt-4'>
            <div onClick={()=>dispatch(addtocart(data))} className='bg-blue-400 flex gap-2 items-center rounded-sm hover:cursor-pointer text-white md:text-[19px] py-1 md:py-2 px-4 md:px-6'>
              <i className="fa-solid fa-cart-shopping"></i>
              <h1 className='font-[500]'>ADD TO CART</h1>
            </div>
            <div className='bg-yellow-400 flex gap-2 items-center rounded-sm hover:cursor-pointer text-white md:text-[19px] py-1 md:py-2 px-4 md:px-6'>
              <i className="fa-solid fa-circle-right"></i>
              <h1 className='font-[500]'>BUY NOW</h1>
            </div>
          </div>

        </div>
      </div></div>
    </div>
  )
}

export default Details