import Image from "next/image";
import Link from 'next/link'
import ProjectCard from "../shared/ProjectCard";


function ProjectAbout2() {
  const projects = [{
    imageSrc: '/AUREO.jpg',
    imageM: '/RESIDENCIALES-07.png',
    logoSrc: '/LOGO-01.png',
    title: 'Aureo Residencial',
    description: 'Proyecto de 26 casas, en una ubicación privilegiada con alta plusvalía, que conecta con los princiaples centros de negocios, plazas comerciales y residenciales de la cuidad de Tijuana.',
    price: '$5,397,600 MXN',
    linkHref: 'https://residencialaureo.com/inicio'
  },
  {
    imageSrc: '/PLATINUM.jpg',
    imageM: '/RESIDENCIALES-06.png',
    logoSrc: '/logo platinum png-02.png',
    title: 'Platinum Residencial',
    description: 'Exclusivo desarrollo de solo 18 casas ubicadas en un punto muy estratégico de la cuidad, con el dinamismo y la actividad comercial que tu estilo de vida  requiere, inverte en una zona de alta plusvalía.',
    price: '$5,450,541 MXN',
    linkHref: 'https://platinumresidencial.com/'
  },
  {
    imageSrc: '/JADE.jpg',
    imageM: '/RESIDENCIALES-08.png',
    logoSrc: '/logo Jade-01.png',
    title: 'Jade Residencial',
    description: 'Proyecto de únicamente 21 casas diseñadas con espacios cómodos y modernos que te permitirán sentir la emocion de un nuevo hogar.',
    price: '$2,348,431 MXN',
    linkHref: 'https://jaderesidencial.com.mx/'
  },
  {
    imageSrc: '/TORRES.jpg',
    imageM: '/RESIDENCIALES-09.png',
    logoSrc: '/logo con bandera_Mesa de trabajo 1.png',
    title: 'Torres del Colorado',
    description: ' Es un conjunto urbano de departamentos que destaca por su gran conectividad y cercanía a vialidades principales, parques industriales y centros comerciales.',
    price: '$2,348,431 MXN',
    linkHref: 'https://torresdelcolorado.com/'
  },

  ]
  
  return (
    <>

      <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-2 translate-y-[0rem] md:translate-y-[4rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-900 z-20">
        Conoce nuestros <span className="text-gray-600 font-bold">proyectos</span>
      </div>

      {/*cards*/}
      <div className=" hidden lg:block relative overflow-hidden shadow-lg">
        <div className=" h-[20vh] md:h-[65vh]">
          <Image
            src="/ACCESO AUREO2 nochr.png"
            alt="Vista del acceso al proyecto residencial Aureo"
            fill
            quality={100}
            className="z-0 object-cover bg-slate-400"
          />
          <div className="absolute -top-[11rem] left-[35%] transform translate-y-1/2 z-10">
            <Image
              src="/LOGO-01.png"
              alt="Logo del proyecto Aureo"
              quality={100}
              width={550}
              height={200}
            />
          </div>
        </div>
        <div className="p-8 flex justify-between bg-black bg-opacity-60 -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-200 ">
              Proyecto de 26 casas, en una ubicación privilegiada con alta plusvalía, <br />
              que conecta con los princiaples centros de negocios, plazas comerciales <br />
              y residenciales de la cuidad de Tijuana.
            </p>
          </div>
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            <p className="text-sm">Preventa desde</p>
            <span className="font-bold text-[19px] text-gray-200">$5,397,600 MXN</span>
            <Link href="https://residencialaureo.com/inicio">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*cards*/}
      <div className="  hidden lg:block relative overflow-hidden shadow-lg">
        <div className=" h-[40vh] md:h-[95vh] w-full">
          <Image
            src="/ACCESO ENTRADA PLATINUM 4K sin altura.png"
            alt="Vista del acceso al proyecto residencial Aureo"
            fill
            quality={100}
            className="z-0 object-none bg-slate-400"
          />
          <div className="absolute -top-[10rem] left-[38%] transform translate-y-1/2 z-10">
            <Image
              src="/logo platinum png-02.png"
              alt="Logo del proyecto Aureo"
              quality={100}
              width={450}
              height={200}
            />
          </div>
        </div>
        <div className="p-8 flex justify-between bg-black bg-opacity-70  -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-200 ">
              Exclusivo desarrllo de solo 18 casas ubicadas en un punto muy estratégico <br />
              de la cuidad, con el dinamismo y la activadad comercial que tu estuilo de vida <br />requier, invierte en una zona de alta plusvalía.
            </p>
          </div>
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            <p className="text-sm">Preventa desde</p>
            <span className="font-bold text-[19px] text-gray-200">$5,450,541 MXN</span>
            <Link href="https://platinumresidencial.com/">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*cards*/}
      <div className=" hidden lg:block relative overflow-hidden shadow-lg">
        <div className=" h-[40vh] md:h-[80vh] w-full">
          <Image
            src="/JADE 4K 4 CASAS.PNG"
            alt="Vista del acceso al proyecto residencial Aureo"
            fill
            quality={100}
            className="z-0 object-none bg-blue-400"
          />
          <div className="absolute   transform  z-10">
            <Image
              src="/logo Jade-01.png"
              alt="Logo del proyecto Aureo"
              quality={100}
              width={250}
              height={250}
              className="bg-white"
            />
          </div>
        </div>
        <div className="p-8 flex justify-between bg-[#32657F] -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-200 ">
              Proyecto de únicamente 21 casas diseñadas con espacios cómodos <br /> y  modernos
              que te permitirán sentir la emocion de un nuevo hogar.
            </p>
          </div>
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            <p className="text-sm">Preventa desde</p>
            <span className="font-bold text-[19px] text-gray-200">$5,450,541 MXN</span>
            <Link href="https://jaderesidencial.com.mx/">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*cards*/}

      <div className="  hidden lg:block relative overflow-hidden shadow-lg">
        <div className=" h-[40vh] md:h-[90vh] w-full">
          <Image
            src="/el colorado 4k.png"
            alt="Vista del acceso al proyecto residencial Aureo"
            fill
            quality={100}
            className="z-0 object-cover bg-blue-400"
          />
          <div className="absolute left-[5rem] transform z-10">
            <Image
              src="/logo con bandera_Mesa de trabajo 1 (1).png"
              alt="Logo del proyecto Aureo"
              quality={100}
              width={250}
              height={250}
              className=""
            />
          </div>
        </div>
        <div className="p-8 flex justify-between bg-[#432624] -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-200 ">
              Es un conjunto urbano de departamentos que destaca por su gran conectividad <br /> y cercanía a vialidades principales,<br />
              parques industriales y centros comerciales.
            </p>
          </div>
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            <p className="text-sm">Preventa desde</p>
            <span className="font-bold text-[19px] text-gray-200">$1,477,351 MXN</span>
            <Link href="https://torresdelcolorado.com/">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>


      {projects.map((project) => (
        <section className=" md:mt-0 mt-[0rem] p-2 md:p-0" key={project.title}>
          <div className="relative">
            <ProjectCard {...project} />
          </div>
        </section>

      ))}

    </>
  )
}
export default ProjectAbout2;