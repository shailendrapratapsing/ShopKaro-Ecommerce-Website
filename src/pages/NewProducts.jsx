import React from 'react'
import HeroSection from '../components/HeroSection'
import Facts from '../components/Facts'
import ProductSlider from '../components/ProductSlider'
import Testimonials from '../components/Testimonials'

const NewProducts = () => {
  return (
    <>
      <HeroSection title="Our Product"/>
      <Facts/>
      <ProductSlider/>
      <Testimonials/>
    </>
  )
}

export default NewProducts
