import React from 'react'
import '../styles/testimonial.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


import avatar01 from '../assets/img/avatar01.png'
import avatar02 from '../assets/img/avatar02.png'
// import required modules
import { EffectCards } from "swiper";

export default function Testimonial() {
  return (
    <>
      <section>
        <div className='container sliders'>
          <h2 className='section__title'>Testimonials</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slide__item'>
              <div className='slide__img-01'>
                <img src={avatar01} />
              </div>
              <h4>Ehtesham Ali</h4>
              <p>Occaecat ullamco cillum fugiat id deserunt veniam ullamco ipsum ea.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide__item'>
              <div className='slide__img-02'>
                <img src={avatar02} />
              </div>
              <h4>Ehtesham Ali</h4>
              <p>Occaecat ullamco cillum fugiat id deserunt veniam ullamco ipsum ea.</p>
          </div></SwiperSlide>
        <SwiperSlide>
        <div className='slide__item'>
              <div className='slide__img-03'>
                <img src={avatar01} />
              </div>
              <h4>Ehtesham Ali</h4>
              <p>Occaecat ullamco cillum fugiat id deserunt veniam ullamco ipsum ea.</p>
          </div></SwiperSlide>
        
        
      </Swiper>
        </div>
      </section>
      
    </>
  );
}
