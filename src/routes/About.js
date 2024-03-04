import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage2 from '../components/Hero/HeroImage2'
import Content from '../components/About/Content'

function About() {
  return (
    <div>
        <Navbar />
        <HeroImage2 heading="ABOUT." text="I am a Web Developer" />
        <Content />
        <Footer />
    </div>
  )
}

export default About
