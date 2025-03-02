"use client";
import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../Services/TiltedCard';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';

interface ServiceItem {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
}

const Services: React.FC = () => {
  // Animation variants for section elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const services: ServiceItem[] = [
    {
      title: "Personalized Learning Roadmap",
      description: "AI-powered roadmaps tailored to each student's academic needs, helping them focus on what matters most for their JEE preparation.",
      imageSrc: "/images/road map copy.png", // Replace with your image paths
      altText: "Personalized Learning Roadmap",
    },
    {
      title: "Coaching Center Dashboard",
      description: "Get real-time data and analytics on student performance. Monitor progress, review results, and make informed decisions to improve coaching strategies.",
      imageSrc: "/images/analytics.png",
      altText: "Coaching Dashboard",
    },
    {
      title: "Comprehensive Student Analysis",
      description: "Deep insights into students' academic performance, cognitive abilities, and study patterns, ensuring personalized guidance for optimal learning outcomes.",
      imageSrc: "/images/soca.png",
      altText: "Student Analysis",
    },
    {
      title: "StudizeGPT",
      description: "Our in-house AI chatbot for JEE-specific data, provides instant solutions to student queries, ensuring a seamless learning experience.",
      imageSrc: "/images/studize gpt copy.png",
      altText: "StudizeGPT",
    }
  ];

  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      {/* Main content */}
      <div className="relative w-[90%] md:w-[80%] mx-auto h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the key features that make Sstudize the smart choice for students and coaching centers alike
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <TiltedCard
                imageSrc={service.imageSrc}
                altText={service.altText}
                captionText={service.title}
                containerHeight="250px"
                containerWidth="100%"
                imageHeight="250px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="tilted-card-overlay p-4">
                    <h3 className="text-xl font-bold text-gray-600 mb-2">{service.title}</h3>
                  </div>
                }
              />
              <div className="mt-4 text-center px-2">
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;