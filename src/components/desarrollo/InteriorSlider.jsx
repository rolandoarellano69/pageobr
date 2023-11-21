"use client";
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
//Importacion de Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../app/globals.css';
//react icons 
import {RiCloseFill} from 'react-icons/ri'

// Componente Backdrop para el fondo del modal
const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div className="backdrop fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

const Modal = ({ handleClose, imageSrc }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()}
        className="modal fixed inset-0  flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Image src={imageSrc} alt="Ampliada" className='object-cover w-[60%] h-[70%]  rounded-lg' />
        <button className=' py-2 px-2 relative top-4 right-4 bg-white text-black  rounded-full focus:outline-none z-50' onClick={handleClose}><RiCloseFill/></button>
      </motion.div>
    </Backdrop>
  )
}


const InteriorSlider = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState('');
  
  
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [modalOpen]);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
    document.body.style.overflow= 'hidden';
  }

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow='auto';
  }


  return (
    <div className='bg-white md:m-4  p-4 rounded-lg shadow-lg max-w-full max-h-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
            spaceBetween: 30,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper p-6 md:p-0"
      >
        {['recamara_Mesa de trabajo 1', 'cocina 2_Mesa de trabajo 1', 'cocina_Mesa de trabajo 1', 'sala_Mesa de trabajo 1', 'baño_Mesa de trabajo 1'].map((image, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center items-center ' onClick={() => openModal(`/${image}.webp `)}>
              <Image src={`/${image}.webp`} alt="Interior" width={600} height={600} className='object-cover rounded-lg shadow-lg' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <AnimatePresence>
        {modalOpen && <Modal imageSrc={selectedImage} handleClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default InteriorSlider;
