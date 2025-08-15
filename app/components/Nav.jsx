"use client";
import assets from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import ThemeSwitch from "./Switch";


const Nav = () => {
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Prevents hydration issues

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Service", id: "service" },
    { name: "Testimonial", id: "testimonial" },
    { name: "Our Work", id: "our-work" },
  ];

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex w-full py-4 px-3 rounded-md sticky top-0 z-20 backdrop-blur-2xl bg-white/50 dark:bg-black/50 font-normal items-center justify-between sm:px-10">
      {/* Logo */}
      <div>
        <Image
          src={theme === "dark" ? "/logo_dark.svg" : "/logo.svg"}
          width={150}
          height={150}
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="md:flex gap-6 hidden">
        {navLinks.map((link, index) => {
          const isActive =
            pathName === `/${link.id}` ||
            pathName === link.id ||
            pathName.startsWith(`/${link.id}/`) ||
            pathName.startsWith(`${link.id}/`);
          return (
            <Link
              key={index}
              href={`/#${link.id}`}
              scroll={true}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                isActive ? "bg-blue-500 text-white" : ""
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Desktop Connect + Theme Button */}
      <div className="hidden lg:flex items-center gap-3">
      
   
          <ThemeSwitch/>
       
        <Link href="#contact-us">
          <button className="bg-[#5044E5] text-white cursor-pointer transition-all hover:scale-105 px-6 items-center gap-2 py-3 rounded-full text-sm flex">
            Connect
            <Image
              src={assets.arrow_icon}
              alt="arrow right"
              width={18}
              height={18}
            />
          </button>
        </Link>
      </div>

      {/* Hamburger / Close Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          {menuOpen ? (
            <Image
              src={assets.close_icon}
              alt="Close menu"
              className="cursor-pointer"
              width={32}
              height={32}
            />
          ) : (
            <Image
              src={assets.menu_icon}
              className="cursor-pointer"
              alt="Open menu"
              width={32}
              height={32}
            />
          )}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 left-0 w-3/4 max-w-xs h-screen z-50 bg-white dark:bg-black flex flex-col justify-between shadow-2xl"
          >
            {/* Top section with logo & close button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 dark:border-neutral-700">
              <Image
                src={theme === "dark" ? "/logo_dark.svg" : "/logo.svg"}
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full bg-[#5044E5] cursor-pointer transition"
              >
                <Image
                  src={assets.close_icon}
                  alt="Close menu"
                  width={18}
                  height={18}
                />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-6 px-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={`/#${link.id}`}
                  scroll={true}
                  className="text-black dark:text-white text-lg font-semibold transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Bottom section with theme toggle & connect button */}
            <div className="px-6 py-5 border-t border-white/20 dark:border-neutral-700 flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border hover:scale-105 transition-all dark:border-neutral-700"
              >
                {mounted &&
                  (theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-800" />
                  ))}
              </button>
              <button className="flex-1 text-white bg-[#5044E5] flex items-center justify-center hover:scale-105 transition-all gap-2 font-semibold py-2 rounded-lg cursor-pointer">
                Connect{" "}
                <Image
                  src={assets.arrow_icon}
                  alt="arrow right"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
