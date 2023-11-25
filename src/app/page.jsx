"use client";
import Banner1 from '@/components/inicio/Banner1';
import CardAbout from '@/components/inicio/CardAbout'
import ExpCard from '@/components/inicio/ExpCard'
import Hero from '@/components/inicio/Hero'
import ProjectAbout2 from '@/components/inicio/ProjectAbout2';
import ProjectEx from '@/components/inicio/ProjectEx';
import React from 'react'


function Home() {
  return (
    <main>
      <Hero />
      <CardAbout />
      <ExpCard />
      <ProjectAbout2/>
      {/* <ProjectAbout /> */}
      <Banner1 />
      <ProjectEx />
    </main>
  )
}

export default Home