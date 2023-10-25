import React from 'react'
import Image from 'next/image'


function BannerHands() {
  return (
    <div className='relative w-full md:h-80 h-[192px] p-4 md:p-8'>
    <div className="relative w-full h-full ">
      <Image src='/manosEquipo.webp' alt='Imagen1' fill className='object-cover rounded-2xl' />
      <div className="absolute inset-0 bg-primary opacity-80 rounded-2xl"></div>
    </div>
  </div>
  )
}

export default BannerHands