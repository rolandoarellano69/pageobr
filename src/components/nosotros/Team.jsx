import React from 'react'
import TeamSlider from './TeamSlider'
function Team() {
  return (
    <div>
      <h1 className='text-black py-8 text-center text-xl md:text-4xl'>Nuestro <span className='font-bold text-secondary'>Equipo</span></h1>
      <TeamSlider />
    </div>
  )
}
export default Team