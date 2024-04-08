import React from 'react'
import img1 from '../assets/bg1.jpg'
import img2 from '../assets/bg2.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

  
const Carousel = () => {
    const images = [
        {src: img1}, {src: img2}
    ]
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    }
  return (
    <div className='overflow-hidden'>
      <Slider {...settings}>
        {
          images.map((elem,idx)=>{
            return (
              <div key={idx}>
                <img className='w-full'  src={elem.src}/>
              </div>
            )
          })
        }
      </Slider>
        
    </div>
  )
}

export default Carousel