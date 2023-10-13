import React from 'react'
import Image from 'next/image'
function MisioVision() {
  return (
    <div className=' relative flex justify-center items-center w-full h-auto md:h-60 bg-primary '>
      <div className='relative w-full h-full'>
        <Image src='/textura_ka 1.png' alt='Imagen1' fill className='object-cover' />
        <div className="inset-0 bg-primary opacity-95 flex flex-col justify-center items-center text-white ">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8 md:gap-24 max-w-screen-lg mx-auto p-10 md:p-4">
            <div className='flex flex-col justify-center items-center text-center'>
              <h1 className='text-2xl font-bold mt-8 mb-4'>Misión</h1>
              <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum placeat impedit repellendus harum repudiandae dolorum cupiditate quod consequuntur, quasi tempora eveniet vero temporibus aliquid nemo iste eaque corrupti. Quis!</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <h1 className='text-2xl font-bold mt-8 mb-4'>Visión</h1>
              <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum placeat impedit repellendus harum repudiandae dolorum cupiditate quod consequuntur, quasi tempora eveniet vero temporibus aliquid nemo iste eaque corrupti. Quis!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MisioVision