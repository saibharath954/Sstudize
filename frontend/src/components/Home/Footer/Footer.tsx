import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-10 pb-10 bg-gray-100">
      <div className="w-[80%] md:w-[80%] items-start mx-auto grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Solution</h1>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            Enterprice
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            By Work Flow
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            By Team
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Company</h1>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            News & Press
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            Our Custoer
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            Leadership
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Resources</h1>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            Webinars & Events
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            Podcast
          </p>
          <p className="text-gray-600 font-medium cursor-pointer text-sm hover:text-blue-950">
            E-book & Guides
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              +0123 4239434759
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Email</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              Sstudize@gmail.com
            </h1>
          </div>
        </div>
        {/* bottom part */}
      </div>
      <div className="mt-8 flex items-center justify-between w-[80%] mx-auto">
        <p className="text-gray-600 text-sm">
          &copy; 2025 Sstudize. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <span>Social : </span>
          <span className="text-gray-500 cursor-pointer hover:text-gray-800">
            <FaFacebook />
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-gray-800">
            <FaSquareXTwitter />
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-gray-800">
            <FaInstagramSquare />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
