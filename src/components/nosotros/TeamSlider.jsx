"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import '../../app/globals.css';

const picsTeam = [
  { src: '/GLADDYS-ACOSTA_Mesa-de-trabajo-1.webp', alt: 'Gladdys Acosta', name: 'Gladdys Acosta', job: 'Asesora de Ventas' },
  { src: '/FEDERICO-ARMENTA_Mesa-de-trabajo-1.webp', alt: 'Federico Armenta', name: 'Federico Armenta', job: 'Asesor de Ventas' },
  { src: '/MARÍA-ELENA-MONTAÑO_Mesa-de-trabajo-1.webp', alt: 'María Elena Montaño', name: 'María Elena Montaño', job: 'Asesora de Ventas' },
  { src: '/NESTOR-CORTÉS.webp', alt: 'Nestor Cortés', name: 'Nestor Cortés', job: 'Asesor de Ventas' },
  { src: '/VERÓNICA-VELÁZQUEZ_Mesa-de-trabajo-1.webp', alt: 'Verónica Velázquez', name: 'Verónica Velázquez', job: 'Asesora de Ventas' },
  { src: '/ROGELIO-GARCÍA_Mesa-de-trabajo-1.webp', alt: 'Rogelio García', name: 'Rogelio García', job: 'Asesor de Ventas' },
  { src: '/CESAR-JIMÉNEZ_Mesa-de-trabajo-1 (1).webp', alt: 'Cesar Jiménez', name: 'Cesar Jiménez', job: 'Asesor de Ventas' },
];

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

        {picsTeam.map((picTeam, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center items-center'>
              <Image
                alt={picTeam.alt}
                src={picTeam.src}
                width={450} // Especifica un ancho
                height={450} // Especifica una altura
                className="object-cover rounded-full shadow-lg" // Clases de Tailwind
              />
              <div className='mt-3 text-black '>
              <p className='font-semibold '>{picTeam.name}</p>
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