import React from 'react'
import HeroSection from "./Hero/Hero";
import About from "./About/About";

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div>
        <HeroSection />
        <About />
      </div>
    </div>
  )
}

export default Home;