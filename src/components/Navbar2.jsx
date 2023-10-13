'use client'
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menumobile from './shared/menu-mobile'
import { RiCloseLine, RiMenuFill } from 'react-icons/ri'

function Navbar2() {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <header className='bg-transparent fixed top-0 left-0 p-5 w-full z-40'>
      <div className='flex items-center justify-between container mx-auto px-5 lg:px-0'>
        <section> <Link href='/'>
          <Image
            alt='logo'
            src='/logogtipo OBR versiones de color-03-02.png'
            width={100}
            height={100}
            loading='lazy'
          />
        </Link></section>
        <section className='hidden lg:block'>
          <div
            className='ml-4 flex flex-col lg:flex-row items-center space-x-4 transition-all duration-300 ease-in-out'

          >
            <li>
              <Link href='/' className='py-2 px-4 text-white hover:bg-white hover:text-black rounded-lg p-4 transition ease-in duration-500'>
                Inicio
              </Link>
            </li>
            <li>
              <Link href='/desarrollo' className='py-2 px-4 text-white hover:bg-white hover:text-black rounded-lg p-4 transition ease-in duration-500'>
                Desarrollo
              </Link>
            </li>
            <li>
              <Link href='/nosotros' className='py-2 px-4 text-white hover:bg-white hover:text-black rounded-lg p-4 transition ease-in duration-500'>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href='/blog' className='py-2 px-4 text-white hover:bg-white hover:text-black rounded-lg p-4 transition ease-in duration-500'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/contacto' className='py-2 px-4 text-white hover:bg-white hover:text-black rounded-lg p-4 transition ease-in duration-500'>
                Contacto
              </Link>
            </li>
          </div>
        </section>
        <section className='lg:hidden'>
          <button type='button' onClick={toggleMenu}>
            {showMenu ? <RiCloseLine className='text-xl' /> : <RiMenuFill className='text-xl' />}
          </button>
          {showMenu && <Menumobile />}
        </section>
      </div>
    </header>
  )
}

export default Navbar2