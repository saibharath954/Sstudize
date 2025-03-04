import React from "react";

import { navLinks } from "../../../../constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: MobileNavProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transition-opacity duration-300 z-[1002] bg-black/50 w-full h-screen`}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-white ${navOpen} fixed flex flex-col h-screen transform transition-transform duration-300 ease-in-out w-[80%] sm:w-[50%] md:w-[40%] bg-gradient-to-br from-purple-700 to-blue-300 space-y-4 p-8 z-[1050] shadow-2xl`}
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id} className="block">
            <p className="text-xl font-medium hover:text-blue-900 transition-colors duration-200 py-2 border-b border-white">
              {link.label}
            </p>
          </Link>
        ))}
        {/* close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 text-white hover:text-blue-800 transition-colors duration-200 cursor-pointer w-7 h-7"
        />
      </div>
    </div>
  );
};

export default MobileNav;
