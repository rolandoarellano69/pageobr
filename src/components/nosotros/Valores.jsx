'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../app/globals.css';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

// Importar solo el módulo necesario (no necesitas paginación en este caso)


function Valores() {
  return (
    <div className="bg-white text-gray-900 p-2 ">
      <div className="col-span-full flex flex-col justify-center items-center mt-8 mb-4">
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl'>
          Nuestros <br />
          <span className='font-bold text-secondary'>Valores</span>
        </h1>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
        pagination={{ clickable: true }}

        className=" mySwiper md:hidden lg:hidden mb-8 p-4"
      >

        <SwiperSlide>
          <div className='flex flex-col justify-center items-center '>
            <Image src='/RESPONSABILIDAD.png' alt="House" width={200} height={200} quality={100} className='rounded-full p-4' />
            <p className='text-center font-bold mb-2 text-secondary '>Responsabilidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center'>
            <Image src='/HONESTIDAD.png' alt="House" width={200} height={200} quality={100} className='rounded-full p-4' />
            <p className='text-center font-bold mb-2 text-secondary '>Honestidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center'>
            <Image src='/CONFIABILIDAD.png' alt="House" width={200} height={200} quality={100} className='rounded-full p-4' />
            <p className='text-center font-bold mb-2 text-secondary '>Confiabilidad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center '>
            <Image src='/SERVICIO.png' alt="House" width={200} height={200} quality={100} className='rounded-full p-4' />
            <p className='text-center font-bold mb-2 text-secondary '>Servicio</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center'>
            <Image src='/COMPROMISO.png' alt="House" width={200} height={200} quality={100} className='rounded-full p-4' />
            <p className='text-center font-bold mb-2 text-secondary'> Compromiso </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col justify-center items-center'>
            <Image src='/PASION.png' alt="House" width={200} height={200} quality={100} className='rounded-full p-4' />
            <p className='text-center font-bold mb-2 text-secondary'> Pasión </p>
          </div>
        </SwiperSlide>
        {/* Agrega más slides aquí según tus necesidades */}
      </Swiper>

      {/* Si deseas mostrar todos los valores en tamaños de pantalla mayores */}
      <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-2 hidden md:flex lg:flex lg:justify-center">
        {/* Valor 1 */}
        <div className='flex flex-col justify-center items-center'>
          <Image src='/RESPONSABILIDAD.png' alt="House" width={200} height={200} quality={100} className='rounded-full' />
          <p className='text-center font-bold mb-2 text-secondary '>Responsabilidad</p>
        </div>
        {/* Valor 2 */}
        <div className='flex flex-col justify-center items-center'>
          <Image src='/HONESTIDAD.png' alt="House" width={200} height={200} quality={100} className='rounded-full' />
          <p className='text-center font-bold mb-2 text-secondary '>Honestidad</p>
        </div>
        {/* Valor 3 */}
        <div className='flex flex-col justify-center items-center'>
          <Image src='/CONFIABILIDAD.png' alt="House" width={200} height={200} quality={100} className='rounded-full' />
          <p className='text-center font-bold mb-2 text-secondary '>Confiabilidad</p>
        </div>
        {/* Valor 4 */}
        <div className='flex flex-col justify-center items-center'>
          <Image src='/SERVICIO.png' alt="House" width={200} height={200} quality={100} className='rounded-full' />
          <p className='text-center font-bold mb-2 text-secondary '>Servicio</p>
        </div>
        {/* Valor 5 */}
        <div className='flex flex-col justify-center items-center'>
          <Image src='/COMPROMISO.png' alt="House" width={200} height={200} quality={100} className='rounded-full' />
          <p className='text-center font-bold mb-2 text-secondary '>Compromiso</p>
        </div>
        {/* Repite este bloque para cada valor */}
        <div className='flex flex-col justify-center items-center'>
          <Image src='/PASION.png' alt="House" width={200} height={200} quality={100} className='rounded-full' />
          <p className='text-center font-bold mb-2 text-secondary '>Pasión</p>
        </div>
      </div>
    </div>

  )
}

export default Valores