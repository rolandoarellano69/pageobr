'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Formulario() {
 
 
  return (
    <section className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 container mx-auto mt-[8rem]">
    <div className="max-w-lg mx-auto">
      <form  action='https://forms.zohopublic.com/obrgroup/form/FormOBR/formperma/gTFYw86VPnOZ_sQiY4T04fZNyM17vCOpRQ7VNkBYkkA/htmlRecords/submit' onSubmit={handleSubmit} acceptCharset='UTF-8' encType='multipart/form-data'>
        {/* Nombre */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nombre <span className="text-red-500">*</span></label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Apellido <span className="text-red-500">*</span></label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Apellido" />
        </div>

        {/* Lada */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Lada <span className="text-red-500">*</span></label>
          <select className="block appearance-none w-full bg-white text-gray-500 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="+52">+52</option>
            <option value="+1">+1</option>
            {/* ...otros valores de lada */}
          </select>
        </div>

        {/* Número Celular */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Número Celular <span className="text-red-500">*</span></label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Teléfono" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email <span className="text-red-500">*</span></label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Correo@example.com" />
        </div>

        {/* Mensaje */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Escribe un mensaje..."></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Enviar
        </button>
      </form>
    </div>
  </section>
  )
}

export default Formulario