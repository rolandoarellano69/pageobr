"use client";
import Banner1 from '@/components/inicio/Banner1';
import CardAbout from '@/components/inicio/CardAbout'
import ExpCard from '@/components/inicio/ExpCard'
import Hero from '@/components/inicio/Hero'
import ProjectAbout from '@/components/inicio/ProjectAbout'
import ProjectEx from '@/components/inicio/ProjectEx'
import React from 'react'


function Home() {
  return (
    <main>
      <Hero />
      <CardAbout />
      <ExpCard />
      <ProjectAbout />
      <Banner1 />
      <ProjectEx />
    </main>
  )
}

export default Home