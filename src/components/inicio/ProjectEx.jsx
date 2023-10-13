import React from 'react'
import Image from 'next/image'


function ProjectEx() {
  return (
    <div>
      <h2 className='text-2xl text-center bg-gray-700 py-5'>Proyectos de <span className='font-bold'>éxito</span></h2>
      <div className='bg-gray-200 relative h-screen'>
      <Image src='/romeo.png'
          alt='Imagen1'
          fill className='object-cover'
        />
        <div className='absolute top-0 right-0 transform'>
            <Image src='/etiqueta.png' alt='LOGO' width={500} height={200} />
          </div>
          <div className='absolute top-0 transform p-4 bg-gray-200'>
            <Image src='/Privadas Romeo Logo 1.png' alt='LOGO' width={250} height={200} />
          </div>
      </div>
    </div>
  )
}

export default ProjectEx