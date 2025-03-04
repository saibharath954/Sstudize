"use client";
import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // More pronounced parallax effects
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const bgShapeParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Advanced animation variants with custom easing
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.215, 0.61, 0.355, 1], // Custom easing for more dynamic feel
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.2 + 0.5,
        ease: [0.175, 0.885, 0.32, 1.275], // Slight bounce effect
      },
    }),
    hover: {
      scale: 1.03,
      y: -8,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Cards data
  const cards = [
    {
      title: "For Teachers",
      content:
        "Our AI-driven insights help you monitor student progress, track performance, and make data-backed decisions to ensure the best results for your students.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      iconBg: "bg-blue-100",
      hoverAccent: "after:bg-blue-600",
    },
    {
      title: "For Students",
      content:
        "Get customised learning roadmaps based on your strengths, weaknesses, and learning patterns, helping you optimise your study time and reach your academic goals.",
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
      iconBg: "bg-purple-100",
      hoverAccent: "after:bg-purple-600",
    },
    {
      title: "For Parents",
      content:
        "We provide parents with real-time progress updates and detailed reports, giving them peace of mind about their child's academic journey.",
      icon: (
        <svg
          className="w-12 h-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
      iconBg: "bg-green-100",
      hoverAccent: "after:bg-green-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gray-100"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y: bgShapeParallax }}
        className="absolute -top-32 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -50]) }}
        className="absolute -bottom-32 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 20]) }}
        className="absolute right-10 top-64 w-64 h-64 border-4 border-blue-200 rounded-3xl opacity-20"
      />

      {/* Main content container - same width as hero section */}
      <div className="relative w-[90%] md:w-[80%] mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-15 w-full items-center">
          {/* Left column with image - REVERSED from original */}
          <motion.div
            style={{ y: imageParallax }}
            className="relative order-2 xl:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="aspect-w-4 aspect-h-3 h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/studize gpt 2.png"
                    alt="Students using Sstudize"
                    className="object-cover w-full h-full h-[500px] md:h-[650px]"
                  />
                </div>

                {/* Interactive overlay that reveals on hover */}
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-600/30 to-transparent"
                />

                {/* Animated stats floating on the image */}
                <AnimatePresence>
                  {isInView && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg"
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className="text-3xl font-bold text-blue-600 
                            bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
                          >
                            98%
                          </div>
                          <div className="text-sm text-gray-700">
                            Student
                            <br />
                            Satisfaction
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                            5x
                          </div>
                          <div className="text-sm text-gray-700">
                            Performance
                            <br />
                            Improvement
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -z-10 -bottom-8 -left-8 w-2/3 h-2/3 border-4 border-blue-200 rounded-2xl"
              style={{
                rotate: -4,
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.7 } : {}}
              transition={{ delay: 0.7, duration: 1 }}
              className="absolute -z-10 -top-8 -right-8 w-1/2 h-1/2 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-xl opacity-30"
            />
          </motion.div>

          {/* Right column with text content */}
          <motion.div
            style={{ y: textParallax }}
            className="order-1 xl:order-1"
          >
            <motion.span
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              custom={0}
              className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              custom={1}
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600"
            >
              What is <span className="text-blue-600">Sstudize</span>?
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              custom={2}
              className="text-gray-700 text-lg mb-8 leading-relaxed"
            >
              We help you to take your Coaching Class to the Next Level by
              Empowering Students, Enhancing Coaching with the use of AI.
            </motion.p>

            {/* Feature cards - now with enhanced interactive effects */}
            <div className="space-y-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  variants={cardVariants}
                  custom={index}
                  className={`p-6 rounded-xl border transition-all duration-300 relative cursor-pointer 
                    overflow-hidden ${card.color} 
                    after:absolute after:inset-0 after:w-full after:h-full after:opacity-0 
                    after:transition-opacity hover:after:opacity-10 ${card.hoverAccent}`}
                >
                  <div className="flex items-start space-x-5">
                    <motion.div
                      whileHover={{
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 },
                      }}
                      className={`${card.iconBg} p-3 rounded-lg`}
                    >
                      {card.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-gray-700">{card.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
