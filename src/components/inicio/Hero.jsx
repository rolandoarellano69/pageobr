import React from 'react'

function Hero() {
  return (
    <section>
      <div className='relative w-full h-screen'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black to-transparent z-10'></div>
        <div className='absolute top-0 left-0 w-full h-full z-0'>
          <img
            src='/TJ.jpg'
            alt='hero'
            className='object-cover w-full h-full'
          />
        </div>

      </div>
    </section>
  )
}

export default Hero