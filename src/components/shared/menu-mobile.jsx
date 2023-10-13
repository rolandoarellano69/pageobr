import React from 'react'
import Link from 'next/link'
function Menumobile() {
  return (
    <div className='fixed top-0 left-0 w-[85%] sm-[40%] h-full z-50 bg-black bg-opacity-75 flex items-center justify-center '>
       <ul className='ml-4 flex flex-col gap-4 lg:flex-row items-center justify-center lg:space-x-4 transition-all duration-300 ease-in-out' >
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
          </ul>
    </div>
  )
}

export default Menumobile