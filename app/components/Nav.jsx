import assets from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = ({theme,setTheme}) => {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Service", id: "service" },
    { name: "Testimonial", id: "testimonial" },
    { name: "Our Work", id: "our-work" },
  ];

  return (
    <nav className="flex w-full py-4 px-3 sticky top-0  z-20 backdrop-blur-2xl  bg-white/50  items-center justify-between sm:px-10 ">
      {/* Logo */}
      <div>
        <Image src={theme == "dark" ? "/logo_dark.svg" : "/logo.svg"} width={150} height={150} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="lg:flex gap-6 hidden ">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={`/#${link.id}`}
            scroll={true} // Ensures smooth scrolling in Next.js
            className="text-gray-700  font-medium transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>



      <Link href="#conatct-us" >
      <button className="bg-[#5044E5] text-white px-6 flex items-center gap-2 py-2 rounded-full text-sm max-sm:hidden  ">
        Connect 
      </button>
      </Link>
    </nav>
  );
};

export default Nav;
