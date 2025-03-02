"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-[110vh] sm:h-screen overflow-hidden">
      {/* Background with overlay gradient */}
      <div 
        className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center"
        style={{
          boxShadow: 'inset 0 0 0 2000px rgba(255, 255, 255, 0.1)'
        }}
      />
      
      {/* Animated geometric shapes (optional decorative elements) */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      
      {/* Main content */}
      <div className='relative w-[90%] md:w-[80%] mx-auto h-full flex items-center'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 w-full items-center'>
          {/* Text Content with Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='text-sm sm:text-base md:text-xl font-bold text-blue-950 tracking-wide'
            >
              Welcome to Sstudize
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight'
            >
              Learn with us{' '}
              <span className='text-blue-600 relative inline-block'>
                anytime
                <span className='absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
              </span>{' '}
              and{' '}
              <span className='text-blue-600 relative inline-block'>
                anywhere
                <span className='absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='text-gray-700 text-base md:text-lg max-w-lg'
            >
              Revolutionising JEE Preparation with AI-Driven Personalised Roadmaps to Maximize Your Academic Potential
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/explore" passHref>
                <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg 
                  transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 
                  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 
                  shadow-lg hover:shadow-xl">
                  Explore More
                </button>
              </Link>
              
              <Link href="/demo" passHref>
                <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 
                  font-medium rounded-lg transform transition-all duration-300 
                  hover:bg-blue-50 hover:scale-105 focus:outline-none">
                  Request Demo
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src='/images/hero.png' 
                alt='Students learning with AI technology' 
                className='w-full h-full object-cover' 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-70"></div>
            </div>
            
            {/* Floating badges/elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <span className="font-medium text-blue-900">AI-Powered Learning</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-10 -right-5 bg-white p-3 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Personalized Paths</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.7 } : {}}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-blue-800 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-blue-800 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-blue-800 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;