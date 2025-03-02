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
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="reviews">
          <ClientReview />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
      </div>
    </div>
  )
}

export default Home;