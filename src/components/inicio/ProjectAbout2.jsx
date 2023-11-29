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

      <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-2 translate-y-[0rem] md:translate-y-[3rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-900 z-20">
        Conoce nuestros <span className="text-gray-600 font-bold">proyectos</span>
      </div>


      {projects.map((project) => (
        <section className=" md:mt-0 mt-[0rem] p-4 md:p-0" key={project.title}>
          <div className="relative">
            <ProjectCard {...project} />
          </div>
        </section>

      ))}

    </>
  )
}
export default ProjectAbout2;