import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Facts from '../components/Facts'
import Testimonials from '../components/Testimonials'

const FeaturePages = () => {
  return (
    <>
     <HeroSection title="Features"/>
     <Features/>
     <Facts/>
     <Testimonials/> 
    </>
  )
}

export default FeaturePages
