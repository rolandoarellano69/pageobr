
import { motion } from 'framer-motion'
import Image from 'next/image'



function CardAbout() {


  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }


  return (

    <motion.section
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      variants={variants}
      aria-labelledby="who-we-are-heading">
      <div className='relative bg-primary py-4 lg:py-8 mx-4 md:mx-10 lg:mx-[20rem] rounded-[4rem] -translate-y-8 z-20'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-9'>
          <div className='w-full flex justify-center mb-8'>
            <Image
              src='/asesora b.png'
              alt='Equipo de OBR Grupo Inmobiliario'
              width={300}
              height={200}
              quality={100}
              className='object-cover w-full h-auto' />
          </div>
          <div className='w-full'>
            <h2 id="who-we-are-heading" className="text-lg md:text-xl lg:text-3xl font-bold text-center text-gray-100 mb-4">¿QUIÉNES SOMOS?</h2>
            <p className="text-center lg:text-lg text-gray-200 mb-8">
              Somos una desarrolladora Inmobiliaria en constante crecimiento con diversos desarrollos en Tijuana B.C., en zonas estratégicas y privilegiadas. Nuestros proyectos están llamados a convertirse en referentes.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default CardAbout  