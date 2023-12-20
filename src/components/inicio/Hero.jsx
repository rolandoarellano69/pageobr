import React from 'react'
import Image from 'next/image'


function Hero() {
  return (
    <section>
      <div className=' relative w-full h-screen'>
 
        <div className='absolute top-0 left-0 w-full h-[100vh]  z-0'>
          <video
            autoPlay
            loop
            muted
            src='/video/INTRO PAG WEB OBR h264.mp4'
            className=' hidden md:block object-cover h-screen'
          >
          </video>
        </div>
        <div className='absolute top-0 left-0 w-full h-[100vh]  z-0'>
          <video
            autoPlay
            loop
            muted
            src='/video/INTRO PAG WEB  VERTICAL h264.mp4'
            className=' block md:hidden object-fill h-[93vh] '
          >
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero