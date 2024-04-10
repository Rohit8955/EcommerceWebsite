import React, { useState } from 'react'
import { mensdata } from '../mensdata'
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { typechanged } from '../store/slices/Statetype';
const categories = [...new Set(mensdata.map((elem)=>{
    return elem.category;
}))]
const MensWear = () => {
    
    const [clicked,setclicked] = useState([true,false,false,false]);
    const dispatch = useDispatch();
    const handleclicked = (type)=>{
        const a = [false,false,false,false];
        const index = categories.findIndex((item)=>item===type);
        a[index] = true;
        setclicked(a);
        dispatch(typechanged(type))
    }
    const arr = useSelector((state)=>state.state.typeitem)

  return (
    <div className=' mt-[30px] md:mt-[40px]'>

        <div className='flex items-center justify-center'>
            <div className='flex items-center gap-[10px] md:gap-5'>
                {
                    categories.map((elem,idx)=>(
                        <button onClick={()=>handleclicked(elem)} className={`border-[1px] font-[500] ${clicked[idx]===true?"bg-black text-white":null} border-black px-2 md:px-3 py-1 rounded-[15px] `} key={idx}>{elem}</button>
                    ))
                }
            </div>
        </div>

        <div className='w-full flex items-center justify-center mt-7'>
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

export default MensWear