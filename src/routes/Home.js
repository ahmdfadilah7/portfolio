import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/Hero/HeroImage'
import Footer from '../components/Footer/Footer'
import Work from '../components/Project/Work'

function Home() {
  return (
    <div>
        <Navbar />
        <HeroImage />
        <Work />
        <Footer />
    </div>
  )
}

export default Home
