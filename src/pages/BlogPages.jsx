import React from 'react'
import HeroSection from '../components/HeroSection'
import Facts from '../components/Facts'
import Blogs from '../components/Blogs'
import Testimonials from '../components/Testimonials'

const BlogPages = () => {
  return (
    <>
      <HeroSection title="Blogs"/>
      <Facts/>
      <Blogs/>
      <Testimonials/>
    </>
  )
}

export default BlogPages
