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
    linkHref: '/learn-more'
  },
  {
    imageSrc: '/PLATINUM.jpg',
    imageM: '/RESIDENCIALES-06.png',
    logoSrc: '/logo platinum png-02.png',
    title: 'Platinum Residencial',
    description: 'Exclusivo desarrollo de solo 18 casas ubicadas en un punto muy estratégico de la cuidad, con el dinamismo y la actividad comercial que tu estilo de vida  requiere, inverte en una zona de alta plusvalía.',
    price: '$5,450,541 MXN',
    linkHref: '/learn-more'
  },
  {
    imageSrc: '/JADE.jpg',
    imageM: '/RESIDENCIALES-08.png',
    logoSrc: '/logo Jade-01.png',
    title: 'Jade Residencial',
    description: 'Proyecto de únicamente 21 casas diseñadas con espacios cómodos y modernos que te permitirán sentir la emocion de un nuevo hogar.',
    price: '$2,348,431 MXN',
    linkHref: '/learn-more'
  },
  {
    imageSrc: '/TORRES.jpg',
    imageM: '/RESIDENCIALES-09.png',
    logoSrc: '/logo con bandera_Mesa de trabajo 1.png',
    title: 'Torres del Colorado',
    description: ' Es un conjunto urbano de departamentos que destaca por su gran conectividad y cercanía a vialidades principales, parques industriales y centros comerciales.',
    price: '$2,348,431 MXN',
    linkHref: '/learn-more'
  },

  ]
  return (
    <>

      <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-4 lg:py-8 mx-[2rem] rounded-[3rem] translate-y-4 bg-white text-sm md:text-3xl  text-gray-900 z-20"> Conoce nuestros <span className="text-gray-600 font-bold">Desarrollos</span></div>

      {projects.map((project) => (
        <section className=" md:mt-0 mt-[0rem] p-4 md:p-0" key={project.title}>
          <div className="relative">
            <ProjectCard {...project} />
          </div>
        </section>

      ))}
      {/* <section className=" p-4 md:p-8 ">
      <div className="container mx-auto rounded-xl overflow-hidden shadow-lg bg-blue-400">
        <div className="relative h-[40vh] md:h-[70vh]">
          <Image
            src="/JADE 4K 4 CASAS.PNG"
            alt="Vista del acceso al proyecto residencial Aureo"
            fill
            className="z-0 object-cover"
          />
          <div className="absolute bg-gray-100 top-0 z-10">
            <Image
              src="/logo Jade-01.png"
              alt="Logo del proyecto Aureo"
              width={127}
              height={200}
            />
          </div>
        </div>
        <div className="p-4 bg-white">
          <h3 className="  text-xl font-bold mb-2 text-gray-800">Jade Residencial</h3>
          <p className="mb-4 text-gray-700">
            Proyecto de únicamente 21 casas diseñadas con espacios cómodos y modernos que te permitirán sentir la emocion de un nuevo hogar.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-gray-800">$2,348,431 MXN</span>
            <Link href="/learn-more">
              <button className="bg-secondary font-medium text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#d3822d]">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    
    <section className=" p-4 md:p-8">
      <div className="container mx-auto rounded-xl overflow-hidden shadow-lg bg-blue-400">
        <div className="relative h-[40vh] md:h-[50vh]">
          <Image
            src="/el colorado 4k.png"
            alt="Vista del acceso al proyecto residencial Aureo"
            fill
            className="z-0 object-cover"
          />
          <div className="absolute top-0 z-10">
            <Image
              src="/logo con bandera_Mesa de trabajo 1.png"
              alt="Logo del proyecto Aureo"
              width={150}
              height={200}
            />
          </div>
        </div>
        <div className="p-4 bg-white">
          <h3 className="  text-xl font-bold mb-2 text-gray-800">Torres del Colorado</h3>
          <p className="mb-4 text-gray-700">
          Es un conjunto urbano de departamentos que destaca por su gran conectividad y cercanía a vialidades principales,  parques industriales y centros comerciales.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-gray-800">$1,3477,351 MXN</span>
            <Link href="/learn-more">
              <button className="bg-secondary font-medium text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#d3822d]">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section> */}

    </>
  )
}
export default ProjectAbout2;