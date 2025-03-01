"use client";
import React, { useState, useEffect } from 'react';
import { PiExam } from "react-icons/pi";
import { navLinks } from '../../../../constant/constant';
import Link from 'next/link';
import { HiBars3 } from "react-icons/hi2";

type NavProps = {
    openNav: () => void;
};

const Nav = ({openNav}:NavProps) => {
  const [navbg, setNavbg] = useState(false);
  useEffect(() => {
    const handler = () => {
        if(window.scrollY >= 30) setNavbg(true);
        if(window.scrollY < 30) setNavbg(false);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);  
  return (
    <div className={`transition-all ${navbg? 'bg-white shadow-md':'fixed'} duration-200 h-[12vh] z-[100] fixed w-full`}>
        <div className='flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-md transition-transform transform hover:scale-105">
                    <PiExam className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-2xl font-semibold text-indigo-800 hover:text-indigo-600 transition-colors duration-300 hidden sm:block">
                    Sstudize
                </h1>
            </div>
            {/* Navlinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return (
                        <Link href={link.url} key={link.id} className='text-black font-semibold hover:text-blue-800 transition-all duration-200'>
                            <p>{link.label}</p>
                        </Link>
                    );
                })}
            </div>
            {/* buttons */}
            <div className='flex items-center space-x-4'>
                <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Create Account</span>
                </a>
                {/* burger menu */}
                <HiBars3 onClick={openNav} className='w-8 h-8 cursor-pointer lg:hidden text-3xl' />
            </div>
        </div>
    </div>
  )
}

export default Nav;