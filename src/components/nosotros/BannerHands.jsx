import React from 'react'
import Image from 'next/image'


function BannerHands() {
  return (
    <div className='relative w-full md:h-80 h-[192px] '>
    <div className="relative w-full h-full ">
      <Image src='/manosEquipo.webp' alt='Imagen1' fill className='object-cover ' />
      <div className="absolute inset-0 bg-primary opacity-80 "></div>
    </div>
  </div>
  )
}

export default BannerHands