import React from 'react'
import HeroSection from '../components/HeroSection'
import Facts from '../components/Facts'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'

const ContactUsPage = () => {
  return (
    <>
      <HeroSection title="Contact Us"/>
      <Facts/>
      <ContactUs/>
      <Testimonials/>
    </>
  )
}

export default ContactUsPage
