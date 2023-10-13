import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1">
    <div className="col-span-1 md:col-span-1">
      <Image src={'/banner nosotros.webp'} alt="House" width={900} height={200} />
    </div>
    <div className="col-span-1 md:col-start-2 flex justify-center items-center bg-[#FCFFFE] ">
      <p className="text-center text-gray-900 p-10 md:m-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fuga nobis dolorum eveniet, atque nesciunt voluptatem blanditiis, quos dolorem quaerat tempora. Doloremque quam blanditiis libero magnam mollitia sed atque quas.</p>
    </div>
  </div>
  )
}

export default Hero