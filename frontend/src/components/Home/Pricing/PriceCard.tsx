"use client";
import React from "react";
import { motion } from "framer-motion";

interface PriceCardProps {
  time: string;
  price: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ time, price }) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-8 relative border-4 border-black overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 },
      }}
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 z-0 opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 bg-blue-700 z-0"
        initial={{ x: 20, y: -20, rotate: 0 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        whileHover={{ rotate: 15 }}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />

      <div className="relative z-10">
        <motion.h1
          className="text-2xl font-bold text-blue-700"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {time} Membership
        </motion.h1>

        <motion.p
          className="text-4xl font-bold text-gray-700 mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          ${price}
        </motion.p>

        {/* Features list with staggered animation */}
        {[1, 2, 3, 4].map((item, index) => (
          <motion.p
            key={index}
            className="text-gray-600 mt-2 flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
          >
            <motion.span
              className="w-2 h-2 bg-purple-900 rounded-full mr-2"
              whileHover={{ scale: 1.5 }}
            />
            Lorem ipsum
          </motion.p>
        ))}

        {/* Animated button */}
        <motion.a
          href="#_"
          className="relative inline-block text-lg group mt-6"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-purple-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-purple-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Upgrade Now</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-purple-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PriceCard;
