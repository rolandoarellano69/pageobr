"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; 
import '../../app/globals.css';



const picsTeam = [
  { src: '/VERÓNICA-VELÁZQUEZ_Mesa-de-trabajo-1.webp', alt: 'Verónica Velázquez', name: 'Verónica Velázquez', job: 'Asesora de Ventas' },
  { src: '/FEDERICO-ARMENTA_Mesa-de-trabajo-1.webp', alt: 'Federico Armenta', name: 'Federico Armenta', job: 'Asesor de Ventas' },
  { src: '/MARÍA-ELENA-MONTAÑO_Mesa-de-trabajo-1.webp', alt: 'María Elena Montaño', name: 'María Elena Montaño', job: 'Asesora de Ventas' },
  { src: '/NESTOR-CORTÉS.webp', alt: 'Nestor Cortés', name: 'Nestor Cortés', job: 'Asesor de Ventas' },
  { src: '/ROGELIO-GARCÍA_Mesa-de-trabajo-1.webp', alt: 'Rogelio García', name: 'Rogelio García', job: 'Asesor de Ventas' },
  { src: '/CESAR-JIMÉNEZ_Mesa-de-trabajo-1 (1).webp', alt: 'Cesar Jiménez', name: 'Cesar Jiménez', job: 'Asesor de Ventas' },
];

function TeamSlider() {
  return (
    <div className='md:m-4 p-4 '>
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}

      breakpoints={{
        640: { // Pantallas pequeñas
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: { // Pantallas medianas
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: { // Pantallas grandes
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="mySwiper p-6"
    >
      {picsTeam.map((picTeam, index) => (
        <SwiperSlide key={picTeam.name}>
          <div className='flex flex-col items-center'>
            <Image
              alt={picTeam.alt}
              src={picTeam.src}
              quality={100}
              width={350} 
              height={350} 
              className="rounded-full shadow-lg" 
            />
            <div className='mt-3 text-black '>
              <p className='font-semibold'>{picTeam.name}</p>
              <p className='font-light text-gray-500'>{picTeam.job}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default TeamSlider