import React from 'react'
import Image from 'next/image'
function Banner1() {
  return (
    <>
      <div className=' relative w-full h-96 bg-gray-200 z-0'>
        <div className='relative w-full h-full'>
          <Image src='/TJ.jpg' alt='Imagen1' width={1600} height={384} className='object-cover z-' style={{ width: 2860, height: 384 }} />
          <div className='absolute inset-0 bg-primary opacity-80'></div>
          <div className='absolute inset-0 flex items-center justify-center  text-white'>
            <p className=' text-xl  md:text-3xl font-bold  text-center md:text-left'> Calidad y Excelencia: Nuestra Pasión</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner1