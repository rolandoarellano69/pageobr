import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function ProjectCard({ imageSrc, imageM, title, description, price, linkHref }) {
  return (
    <article className="mt-[.5rem] overflow-hidden bg-transparent">
    
      {/*mobile */}
      <div className=' relative flex  lg:hidden h-[20rem] '>
        <Image
          src={imageM}
          alt={`Vista de ${title}`}
          fill
          quality={100}
          className="object-contain"
        />
      </div>
      <div className='relative flex justify-center mt-4 lg:hidden'>
        <Link href={linkHref}>
        <button className='bg-secondary px-[8rem] py-1 rounded-3xl text-sm'>  Conoce más </button>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard

