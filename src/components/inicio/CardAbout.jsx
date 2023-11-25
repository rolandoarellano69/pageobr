// npm run de
import { motion } from 'framer-motion'
import Image from 'next/image'
// import DiagBubble from '@/components/inicio/DiagBubble'


function CardAbout() {
  // const dialogues = ['!Compra tu casa', 'En Tijuana!', 'Con OBR Group'];
  // const [currentDialogue, setCurrentDialogue] = useState(dialogues[0]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  // const variants1 = {
  //   enter: { opacity: 0, scale: 0.95 },
  //   center: { opacity: 1, scale: 1 },
  //   exit: { opacity: 0, scale: 1.05 }
  // };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentDialogue(prev =>
  //       dialogues[(dialogues.indexOf(prev) + 2) % dialogues.length]
  //     );
  //   }, 3000); // Cambia cada 3 segundos

  //   return () => clearInterval(interval);
  // }, []);

  return (

    <motion.section
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      variants={variants}
      aria-labelledby="who-we-are-heading">
      <div className='relative bg-primary py-4 lg:py-8 mx-[6rem] rounded-xl -translate-y-8 z-20'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-9'>
          <div className='lg:w-1/2 flex justify-center lg:justify-evenly mb-8 lg:mb-0'>
            <Image
              src='/ASESORA OBR.png'
              alt='Equipo de OBR Grupo Inmobiliario'
              width={300}
              height={200} 
              className='object-cover'/>
            {/* <motion.div
            className='absolute '
              key={currentDialogue}
              variants={variants1}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {/* <DiagBubble text={currentDialogue}  /> 
            </motion.div> */}
          </div>
          <div className='lg:w-1/2'>
            <h2 id="who-we-are-heading" className="text-xl lg:text-3xl font-bold text-center text-gray-100 mb-4">¿QUIENES SOMOS?</h2>
            <p className="text-base lg:text-lg text-gray-200 mb-8">
              Somos una desarrolladora Inmobiliaria en constante crecimiento con diversos desarrollos en Tijuana B.C., en zonas estratégicas y privilegiadas. Nuestros proyectos están llamados a convertirse en referentes.
            </p>
       
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default CardAbout  