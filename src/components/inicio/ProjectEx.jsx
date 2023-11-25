import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function ProjectEx() {
  return (
    <section className='overflow-hidden p-4 md:p-0'>
      <div className="relative hidden md:block md:h-[65vh] lg:h-[57vh] xl:h-[97vh]  ">
        <div>
          <Image
            src='/RESIDENCIALES_Mesa de trabajo 1 copia 4.jpg'
            alt='Vista de Romeo'
            fill
            quality={100}
            className="z-0"
          />
        </div>
        </div>

        <div className=' relative block md:hidden h-[17rem] '>
          <Image
            src='/RESIDENCIALES-10.png'
            alt='Vista de Romeo'
            fill
            quality={100}
            className="object-fill"
          />
        </div>
        {/* <div className='relative flex justify-center mt-4 md:hidden'>
          <button className='bg-secondary px-[8rem] py-1 rounded-3xl text-sm'>  Conoce más </button>
        </div> */}

    </section>
  )
}

export default ProjectEx