"use client";
import { RiCloseLine, RiMenuFill } from 'react-icons/ri'

import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
function Navbar() {
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
    <header className={`fixed w-full top-0 left-0 z-30 ${scrolling ? ' bg-primary' : 'bg-opacity-50 bg-black'}`}>
      {/* Añadido 'top-0' para fijar en la parte superior */}
      <nav>
        <div className='flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex'>
              <Link href='/'>
                <Image
                  alt='logo'
                  src='/logogtipo OBR versiones de color-03-02.png'
                  width={100}
                  height={100}
                  loading='lazy'
                />
              </Link>
            </div>
          </div>

          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4'>
              <Link href='/' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Inicio
              </Link>
              <Link href='/desarrollo' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Desarrollo
              </Link>
              <Link href='/nosotros' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Nosotros
              </Link>
              <Link href='/blog' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Blog
              </Link>
              <Link href='/contacto' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Contacto
              </Link>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={toggleMenu}
            >
              {isMenu ? <RiCloseLine className='text-xl' /> : <RiMenuFill className='text-xl' />}
            </button>
          </div>
        </div>
        {/* Menú desplegable */}
        {isMenu && (
          <div className={`md:hidden fixed top-16 inset-x-0 bg-black bg-opacity-75 transition-all duration-500 ease-in ${scrolling ? 'bg-primary' : 'bg-opacity-5 bg-black'
            }`}>

            <div className={`px-4 py-3 space-y-1 sm:px-3 transition-all  ${scrolling ? 'bg-primary ' : 'bg-opacity-5 bg-black'}`}>
              <Link onClick={() => handleLinkClick('/')}
              href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
                Inicio
              </Link>
              <Link onClick={() => handleLinkClick('/nosotros')}href='/nosotros' className='text-white block hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700'>
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
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar