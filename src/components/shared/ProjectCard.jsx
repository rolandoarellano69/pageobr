import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProjectCard({imageSrc, logoSrc, title, description, price, linkHref}) {
  return (
    <article className="overflow-hidden shadow-lg bg-blue-300">
      <div className=" h-[16rem] md:h-[100vh]">
        <Image
          src={imageSrc}
          alt={`Vista de ${title}`}
          fill
          className="z-0"
        />
        <div className="absolute bottom-0 right-1/2 transform translate-x-[14rem] z-10">
       
          {/* <Link href={linkHref}>
            <p className="bg-secondary font-medium text-white rounded-lg px-2 py-2 transition duration-300 ease-in-out hover:bg-[#d3822d]">
              Conocer más
            </p>
          </Link> */}
      
        </div>
      </div>
      {/* <div className="p-4 bg-white">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-700">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-gray-800">{price}</span>
          <Link href={linkHref}>
            <p className="bg-secondary font-medium text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#d3822d]">
              Conocer más
            </p>
          </Link>
        </div>
      </div> */}
    </article>
  )
}

export default ProjectCard