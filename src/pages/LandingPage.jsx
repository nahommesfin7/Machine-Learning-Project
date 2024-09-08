import React from 'react'
import AboutSection from '../components/AboutSection'

import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import IntroSection from '../components/IntroSection'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className=''>
         <Navbar />
        <Herosection/>
        <IntroSection/>
        <AboutSection />
        <Footer />
    </div>
  )
}

export default LandingPage