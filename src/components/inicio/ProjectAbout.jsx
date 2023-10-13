import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectAbout() {
  return (
    <main>


      {/* Aureo*/}

      <div className=' relative w-full h-screen bg-[#262724]'>
        <Image src='/ACCESO AUREO2 nochr.png'
          alt='Imagen1'
          fill className='object-cover'
        />

        <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
          <Image src='/LOGO-02.png' alt='LOGO' width={400} height={400} />
        </div>
      </div>

      <div className=' -translate-y-[193px] md:-translate-y-[156px] p-4 md:p-8 py-8 bg-opacity-70 bg-black text-left  font-bold text-gray-200 flex justify-between items-center mx-auto'>
        <p className=' text-xs md:text-sm md:w-[40%] p-4 '> Proyecto de 26 casas, en una ubicación privilegiada con alta plusvalía,<br /> que conecta con los princiaples centros de negocios, plazas comerciales <br /> y residenciales de la cuidad de Tijuana.</p>
        <div className='flex flex-col justify-center items-center '>
          <p className='text-xs font-light text-center'>Preventa desde <br /> <span className='font-bold text-base'>$5,397,600 MXN</span></p>
          <Link href='/proyectos/aureo' >
            <button className='bg-gray-200 text-xs md:text-sm text-gray-800 rounded-3xl md:px-8 px-4 py-2 md:py-2 mt-4 hover:bg-transparent hover:text-gray-200  focus:ring-white hover:ring-1 hover:ring-white '>Conocer más</button>
          </Link>
        </div>
      </div>

      {/* Platinum */}

      <div className=' relative w-full h-screen bg-[#262724]'>
        <Image src='/ACCESO ENTRADA PLATINUM 4K.png'
          alt='Imagen1'
          fill className='object-cover'
        />

        <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
          <Image src='/logo platinum png-02.png' alt='LOGO' width={400} height={400} />
        </div>
      </div>

      <div className=' -translate-y-[193px] md:-translate-y-[156px] p-4 md:p-8 py-8 bg-opacity-70 bg-black text-left  font-bold text-gray-200 flex justify-between items-center mx-auto'>
        <p className=' text-xs md:text-sm md:w-[40%] p-4 '> Exclusivo desarrollo de solo 18 casas ubicadas en un punto muy estratégico<br /> de la cuidad, con el dinamismo y la actividad comercial que tu estilo de vida <br /> requiere, inverte en una zona de alta plusvalía.  </p>
        <div className='flex flex-col justify-center items-center '>
          <p className='text-xs font-light text-center'>Preventa desde <br /> <span className='font-bold text-base'>$5,450,541 MXN</span></p>
          <Link href='/proyectos/aureo' >
            <button className='bg-gray-200 text-xs md:text-sm text-gray-800 rounded-3xl md:px-8 px-4 py-2 md:py-2 mt-4 hover:bg-transparent hover:text-gray-200  focus:ring-white hover:ring-1 hover:ring-white '>Conocer más</button>
          </Link>
        </div>
      </div>

      {/*  
      Jade */}

      <div className=' relative  w-full h-screen bg-gray-200'>
        <Image src='/JADE 4K 4 CASAS.PNG'
          alt='Imagen1' fill className='object-cover '
        />

        <div className='absolute top-0 bg-gray-200 transform'>
          <Image src='/logo Jade-01.png' alt='LOGO' width={199} height={200} />
        </div>
      </div>

      <div className=' -translate-y-[193px] md:-translate-y-[156px] p-4 md:p-8 py-8 bg-[#336783]  text-left  font-bold text-gray-200 flex justify-between items-center mx-auto'>
        <p className=' text-xs md:text-sm md:w-[40%] p-4 '> Proyecto de únicamente 21 casas diseñadas con espacios cómodos <br /> y modernos que te permitirán sentir la emocion de un nuevo hogar.  </p>
        <div className='flex flex-col justify-center items-center '>
          <p className='text-xs font-light text-center'>Preventa desde <br /> <span className='font-bold text-base'>$2,348,431 MXN</span></p>
          <Link href='/proyectos/aureo' >
            <button className='bg-gray-200 text-xs md:text-sm text-gray-800 rounded-3xl md:px-8 px-4 py-2 md:py-2 mt-4 hover:bg-transparent hover:text-gray-200  focus:ring-white hover:ring-1 hover:ring-white '>Conocer más</button>
          </Link>

        </div>
      </div>
      {/* 
      Torres del colorado */}
      <div className='relative'>
        <div className=' relative  w-full h-screen bg-gray-200'>
          <Image src='/el colorado 4k.png'
            alt='Imagen1' fill className='object-cover '
          />

          <div className='absolute top-0  transform'>
            <Image src='/logo con bandera_Mesa de trabajo 1.png' alt='LOGO' width={199} height={200} />
          </div>
        </div>

        <figcaption className=' -translate-y-[193px] md:-translate-y-[156px] p-4 md:p-8 py-8 bg-[#432624] text-left  font-bold text-gray-200 flex justify-between items-center mx-auto'>
          <p className='text-xs md:text-sm md:w-[40%] p-4  '>Es un conjunto urbano de departamentos que destaca <br /> por su gran conectividad y cercanía a vialidades principales, <br /> parques industriales y centros comerciales.  </p>
          <div className='flex flex-col justify-center items-center '>
            <p className='text-xs font-light text-center'>Preventa desde <br /> <span className='font-bold text-base'>$1,3477,351 MXN</span></p>
            <Link href='/proyectos/aureo' >
              <button className='bg-gray-200 text-xs md:text-sm text-gray-800 hover:bg-[#432624] hover:text-gray-200  focus:ring-white hover:ring-1 hover:ring-white rounded-3xl md:px-8 px-4 py-2 md:py-2 mt-4 '>Conocer más</button>
            </Link>
          </div>
        </figcaption>
      </div>
    </main>
  )
}

export default ProjectAbout