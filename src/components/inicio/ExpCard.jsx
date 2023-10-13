import React from 'react'
import Image from 'next/image'

function ExpCard() {
  return (
    <div className='bg-white p-4'>
    <div className="flex flex-col lg:flex-row text-gray-800 justify-between items-center   pl-10 pr-16">
      <div className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
        <Image alt='Imagen1' src='/elementos web-05.png' width={200} height={100} loading='lazy' className='' />
      </div>
      <div className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
        <Image alt='Imagen1' src='/elementos web-06.png' width={200} height={100} loading='lazy' className='' />
      </div>
      <div className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
        <Image alt='Imagen1' src='/elementos web-07.png' width={200} height={100} loading='lazy' className='mb-4' />
      </div>
    </div>
  </div>
  )
}

export default ExpCard