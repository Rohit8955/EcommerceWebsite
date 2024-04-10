import React from 'react'
import Header from '../../Components/Header'
import Carousel from '../../Components/Carousel'
import img from '../../assets/strip.jpg'
import MensWear from '../../Components/MensWear'
import WomenWear from '../../Components/WomenWear'
import { mensdata } from '../../mensdata'
import { womensdata } from '../../womensdata'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Carousel/>
      <div className='md:mt-9 mt-7 w-full flex items-center justify-center'>
        <img className='w-[90%] h-[70px] md:h-[150px]' src={img}/>
      </div>
      <div className='w-full mt-[35px] md:mt-[60px] flex items-center justify-center'>
        <h1 className='bg-yellow-400 w-[90%] text-center py-1 md:py-2 font-bold text-[20px] md:text-[24px]'>FOR MEN</h1>
      </div>

      <MensWear/>

      <div className='w-full mt-[35px] md:mt-[80px] flex items-center justify-center'>
        <h1 className='bg-yellow-400 w-[90%] text-center py-1 md:py-2 font-bold text-[20px] md:text-[24px]'>FOR WOMEN</h1>
      </div>

      <WomenWear/>
    </div>
  )
}

export default Home
