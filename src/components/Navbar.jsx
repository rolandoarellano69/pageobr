"use client";
import { RiCloseLine, RiMenuFill } from 'react-icons/ri'
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { IconSMedia } from './shared/IconSMedia';
function Navbar() {

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
  }

  const [scrolling, setScrolling] = useState(false);
  const [isMenu, setIsMenu] = useState(false)

  const handleLinkClick = (path) => {
    setIsMenu(false);
  }



  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-30 ${scrolling ? ' bg-primary' : 'bg-black bg-opacity-30 rounded drop-shadow-lg'}`}>
      {/* Añadido 'top-0' para fijar en la parte superior */}
      <nav>
        <div className='flex items-center justify-between h-[5rem] md:h-[6rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-40'>

          {/* Logotipo (Izquierda) */}
          <div className='hidden lg:flex items-center -translate-x-[10rem] -translate-y-1 justify-start'>
            <Link href='/'>
              <Image
                alt='logo'
                src='/logogtipo OBR versiones de color-03-02.png'
                width={150}
                height={200}
              />
            </Link>
          </div>
          <div className='flex lg:hidden items-center justify-start'>
            <Link href='/'>
              <Image
                alt='logo'
                src='/logogtipo OBR versiones de color-03-02.png'
                width={100}
                height={200}
              />
            </Link>
          </div>

          {/* Enlaces de Navegación (Centro) */}
          <div className='hidden md:flex items-center -translate-x-[4rem] justify-center flex-1 space-x-4'>
            <Link href='/' className='text-white hover:bg-primary rounded-lg p-2 transition ease-in duration-700'>
              Inicio
            </Link>
            <Link href='/desarrollo' className='text-white hover:bg-primary rounded-lg p-2 transition ease-in duration-700'>
              Desarrollo
            </Link>
            <Link href='/nosotros' className='text-white hover:bg-primary rounded-lg p-2 transition ease-in duration-700'>
              Nosotros
            </Link>
            <Link href='/blog' className='text-white hover:bg-primary rounded-lg p-2 transition ease-in duration-700'>
              Blog
            </Link>
            <Link href='/contacto' className='text-white hover:bg-primary rounded-lg p-2 transition ease-in duration-700'>
              Contacto
            </Link>
          </div>

          {/* Iconos de Redes Sociales (Derecha) */}
          <div className='hidden lg:flex items-center justify-end'>
            <IconSMedia />
          </div>
          <button
      className='inline-flex items-center justify-end p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden'
      onClick={toggleMenu}
    >
      {isMenu ? <RiCloseLine className='text-xl' /> : <RiMenuFill className='text-xl' />}
    </button>
        </div>
        

        {/* Menú desplegable */}

        {isMenu && (

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}

            className={`md:hidden fixed  inset-x-0 bg-black bg-opacity-75 transition-all duration-500 ease-in ${scrolling ? 'bg-primary' : 'bg-opacity-5 bg-black'
              }`}>

            <div className={`px-4 py-3 space-y-1 sm:px-3 transition-all  ${scrolling ? 'bg-primary ' : 'bg-transparent'}`}>
              <Link onClick={() => handleLinkClick('/')}
                href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Inicio
              </Link>
              <Link onClick={() => handleLinkClick('/nosotros')} href='/nosotros' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Nosotros
              </Link>
              <Link onClick={() => handleLinkClick('/desarrollo')} href='/desarrollo' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Desarrollo
              </Link>
              <Link onClick={() => handleLinkClick('/blog')} href='/blog' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Blog
              </Link>
              <Link onClick={() => handleLinkClick('/contacto')} href='/contacto' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Contacto
              </Link>
            </div>
          </motion.div>
        )}

      </nav>
    </header >
  )
}

export default Navbar