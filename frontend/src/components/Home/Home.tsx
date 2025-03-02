"use client";
import React, { useEffect } from 'react'
import HeroSection from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import ClientReview from "./ClientReview/ClientReview";
import Pricing from "./Pricing/Pricing";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import ('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  },[]);
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