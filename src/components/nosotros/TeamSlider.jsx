"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import '../../app/globals.css';

function TeamSlider() {
  return (
    <div className='md:m-4 p-4 '>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper p-12"
      >

        <SwiperSlide><div className='flex flex-col justify-center items-center'>
          <img src="/GLADDYS-ACOSTA_Mesa-de-trabajo-1.webp" alt="House" width={100} height={100} className='object-cover rounded-full shadow-lg' />
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center items-center'>
          <img src="/FEDERICO-ARMENTA_Mesa-de-trabajo-1.webp" alt="House" width={100} height={100} className='object-cover rounded-full shadow-lg' />
        </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center items-center'>
          <img src="/MARÍA-ELENA-MONTAÑO_Mesa-de-trabajo-1.webp" alt="House" width={100} height={100} className='object-cover rounded-full shadow-lg' />
        </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center items-center'>
          <img src="/NESTOR-CORTÉS.webp" alt="House" width={100} height={100} className='object-cover rounded-full shadow-lg' />
        </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center items-center'>
          <img src="/VERÓNICA-VELÁZQUEZ_Mesa-de-trabajo-1.webp" alt="House" width={100} height={100} className='object-cover rounded-full shadow-lg' />
        </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center items-center'>
          <img src="/ROGELIO-GARCÍA_Mesa-de-trabajo-1.webp" alt="House" width={100} height={100} className='object-cover rounded-full shadow-lg' />
        </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center items-center'>
          <img src="/CESAR-JIMÉNEZ_Mesa-de-trabajo-1 (1).webp" alt="House" width={100} height={100} className='object-cover rounded-full shadow-lg' />
        </div></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TeamSlider