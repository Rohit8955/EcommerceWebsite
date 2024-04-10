import React, { useState } from 'react'

const Footer = () => {
    const [visible,setvisible] = useState(false)
  return (
    <div className=' mt-[20px] md:mt-[30px] w-full bg-black px-4 py-4 '>
    <div className='flex items-center justify-center'><div className='grid md:grid-cols-4 grid-cols-2 gap-y-5'>
        <div className='flex flex-col gap-[3px] text-white font-[600]'>
            <h1 className='text-yellow-400 text-[17px] md:text-[24px]'>NEED HELP</h1>
            <h1>Contact Us</h1>
            <h1>Track Order</h1>
            <h1>Return & Refunds</h1>
            <h1>Career</h1>
        </div>
        <div className='flex flex-col gap-[3px] text-white font-[600]'>
            <h1 className='text-yellow-400 text-[17px] md:text-[24px]'>COMPANY</h1>
            <h1>About Us</h1>
            <h1>Beyoung Blog</h1>
            <h1>Beyoungstin</h1>
            <h1>Media</h1>
        </div>
        <div className='flex flex-col gap-[3px] text-white font-[600]'>
            <h1 className='text-yellow-400 text-[17px] md:text-[24px]'>MORE INFO</h1>
            <h1>Terms and Condition</h1>
            <h1>Privacy Policy</h1>
            <h1>Shipping Policy</h1>
            <h1>Sitemap</h1>
        </div>
        <div className='flex flex-col gap-[3px] text-white font-[600]'>
            <h1 className='text-yellow-400 text-[17px] md:text-[24px]'>LOCATION</h1>
            <h1>support@beyoung.in</h1>
            <h1>Eklingpura Chouraha, Ahmedabad Main Road</h1>
            <h1>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</h1>
        </div>
        
    </div></div>
    <div className='border-b border-white mt-3'></div>
    <div className=''>
        <div className='w-full px-3 mt-2'>
            <div className='flex justify-between items-center'>
                <h1 className='text-yellow-400 text-[20px]'>WHY CHOOSE US?</h1>
                {!visible?<i onClick={()=>setvisible(!visible)} className="fa-solid fa-chevron-right text-white"></i>:<i onClick={()=>setvisible(!visible)} className="fa-solid fa-chevron-down text-white"></i>}
            </div>
            {
                
                visible &&   <h1 className='text-white mt-1'>In 2018, four fashion enthusiasts saw that there were very few brands offering high-quality fashion at affordable prices. Bridging this gap became their mission, and they established Beyoung. The company started its operations with a retail outlet model, but as a result of the pandemic, the operations became online, and Beyoung also had to start selling its clothes online. This led to the company being established as an online clothing store</h1>
                
            }
        </div>
        <div className='border-b border-white mt-3'></div>
    </div>
    <div className='flex items-center justify-center text-white font-semibold mt-1'><h1>Copyright © 2024 Beyoung Folks Pvt Ltd. All rights reserved.</h1></div>
    </div>
  )
}

export default Footer