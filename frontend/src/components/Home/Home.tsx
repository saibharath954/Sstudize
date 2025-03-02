import React from 'react'
import HeroSection from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import ClientReview from "./ClientReview/ClientReview";
import Pricing from "./Pricing/Pricing";

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div>
        <HeroSection />
        <About />
        <Services />
        <ClientReview />
        <Pricing />
      </div>
    </div>
  )
}

export default Home;