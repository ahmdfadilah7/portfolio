import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage2 from '../components/Hero/HeroImage2'
import Content from '../components/Contact/Content'

function Contact() {
  return (
    <div>
        <Navbar />
        <HeroImage2 heading="CONTACT." text="Lets have a chat" />
        <Content />
        <Footer />
    </div>
  )
}

export default Contact
