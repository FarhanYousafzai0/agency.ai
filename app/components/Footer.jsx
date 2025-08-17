"use client"
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.svg"
              alt="agency.ai logo"
              width={100}
              height={100}
              
              priority
            />
            
          </div>
          <p className="text-gray-600 max-w-md">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          <nav className="flex gap-6 mt-6 text-gray-700 font-medium">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Our Work</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
          <p className="text-gray-600 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-200 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>Copyright 2025 © GreatStack - All Rights Reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-indigo-600 transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-indigo-600 transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-indigo-600 transition" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-indigo-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
