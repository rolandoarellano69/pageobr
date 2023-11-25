import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProjectCard({imageSrc, imageM, title, description, price, linkHref}) {
  return (
    <article className="overflow-hidden bg-transparent">
      <div className=" hidden md:block  md:h-[65vh] lg:h-[57vh] xl:h-[97vh]">
        <Image
          src={imageSrc}
          alt={`Vista de ${title}`}
          fill
          quality={100}
          className="z-0 object-fill"
        />
        <div className=" block absolute mb-8 bottom-0 right-0 sm:right-8 md:right-[1rem] md:mb-2 lg:right-[2rem] lg:mb-1 xl:right-[6rem] xl:mb-6 2xl:right-[10rem] z-10">
          <Link href={linkHref}>
            <p className="bg-secondary font-medium text-white rounded-lg md:px-[3rem] px-[8rem] py-1 transition duration-300 ease-in-out hover:bg-[#d3822d]">
              Conocer más
            </p>
          </Link>
        </div>
      </div>
      <div className=' relative flex  md:hidden h-[17rem] '>
      <Image
          src={imageM}
          alt={`Vista de ${title}`}
          fill
          quality={100}
          className="object-fill"
        />
      </div>
        <div className='relative flex justify-center mt-4 md:hidden'>
        <button className='bg-secondary px-[8rem] py-1 rounded-3xl text-sm'>  Conoce más </button>
        </div>
  
    </article>
  )
}

export default ProjectCard