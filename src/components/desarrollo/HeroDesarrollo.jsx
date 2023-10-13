import React from 'react'
import Link from 'next/link'
function HeroDesarrollo() {
  return (
    <section>
      <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 "
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 p-4">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <img
              alt="Party"
              src="/ACCESO AUREO2 nochr.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 ">
            <h2 className="text-3xl font-bold sm:text-4xl">Desarrollos OBR GROUP</h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
              atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
              veniam tempora deserunt? Molestiae eius quidem quam repellat.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
      <section>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-10">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
      </section>
    </section>
  )
}

export default HeroDesarrollo