import React from 'react'
import Image from 'next/image'
function IconsDesarrollos() {
  return (
    <section>
      <div className='bg-white'>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 lg:grid-cols-2 lg:gap-8 p-10">
          <div className=" rounded-lg bg-primary">
            <Image
              src="/icon/LOGO AUREO.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className=" rounded-lg bg-primary">
            <Image
              src="/icon/LOGO TORRES.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="rounded-lg bg-primary"> <Image
            src="/icon/LOGO PLATINUM.png"
            alt="Picture of the author"
            width={500}
            height={500}
          /></div>
          <div className="rounded-lg bg-primary"> <Image
            src="/icon/LOGO CIPRES.png"
            alt="Picture of the author"
            width={500}
            height={500}
          /></div>
          <div className="rounded-lg bg-primary"> <Image
            src="/icon/LOGO JADE.png"
            alt="Picture of the author"
            width={500}
            height={500}
          /></div>
          <div className="rounded-lg bg-primary"> <Image
            src="/icon/LOGO ALMERIA.png"
            alt="Picture of the author"
            width={500}
            height={500}
          /></div>
        </div>
      </div>
    </section>
  )
}

export default IconsDesarrollos