import React from 'react'
import Hero from "./Hero/Hero";
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='h-[100vh] flex items-center justify-center'>
        <Hero />
      </div>
    </div>
  )
}

export default Home;