import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Facts from '../components/Facts'
import Testimonials from '../components/Testimonials'

const AboutPages = () => {
  return (
    <>
      <HeroSection title="About us"/>
      <About/>
      <Facts/>
      <Testimonials/>
    </>
  )
}

export default AboutPages
