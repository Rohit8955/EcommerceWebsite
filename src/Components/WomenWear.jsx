import React, { useState } from 'react'
import {womensdata} from '../womensdata'
import { itemchanged } from '../store/slices/WomenStatetype'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
const categories = [...new Set(womensdata.map((elem)=>{
    return elem.category
}))]
const WomenWear = () => {
    const dispatch = useDispatch();
    const [clicked,setclicked] = useState([true,false,false,false]);
    const handleclicked = (type)=>{
        const a = [false,false,false,false];
        const index = categories.findIndex((item)=>item===type);
        a[index] = true;
        setclicked(a);
        dispatch(itemchanged(type));
    }
    const arr = useSelector((state)=>state.womenstate.itemtype)
    console.log(arr)
  return (
    <div className='mt-[40px]'>

        <div className='flex items-center justify-center'>
            <div className='flex items-center gap-[10px] md:gap-4'>
                {
                    categories.map((elem,idx)=>{
                        return <button onClick={()=>handleclicked(elem)} className={`border-[1px] ${clicked[idx]===true?"bg-black text-white":null} border-black px-3 py-1 rounded-[15px]`} key={idx}>{elem}</button>
                    })
                }
            </div>
        </div>

        <div className='flex items-center justify-center mt-7'>
            <div className='md:w-[70%] w-[87%] flex items-center gap-4 overflow-x-auto overflow'>
                {
                        arr.map((elem,idx)=>{
                            return <ProductCard key={idx} item = {elem} />
                        })
                }
            </div>
        </div>
    </div>
  )
}

export default WomenWear