import React from 'react'
import HeroSection from '../components/HeroSection'
import Products from '../components/Products'
import Facts from '../components/Facts'
import Testimonials from '../components/Testimonials'

const ProductPages = () => {
  return (
    <>
      <HeroSection title="Product"/>
      <Facts/>
      <Products/>
      <Testimonials/>
    </>
  )
}

export default ProductPages
