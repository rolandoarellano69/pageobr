import React from 'react'
import Hero from '@/components/nosotros/Hero'
import MisioVision from '@/components/nosotros/MisioVision'
import Valores from '@/components/nosotros/Valores'
import BannerHands from '@/components/nosotros/BannerHands'
import Team from '@/components/nosotros/Team'
function Aboutpage() {
  return (
    <section>
      <Hero />
      <MisioVision />
      <Valores /> 
      <BannerHands />
      <Team />
    </section>
  )
}

export default Aboutpage