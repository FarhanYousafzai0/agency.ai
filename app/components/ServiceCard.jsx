"use client";
import React, { useState } from "react";

const ServiceCard = ({ services }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });


  return (
    <div
   
      className="relative overflow-hidden  rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-2xl dark:shadow-white/10 max-w-lg m-2"
      
    >
      {/* Gradient Border on Hover */}
      <div
        className="absolute pointer-events-none rounded-full blur-2xl bg-gradient-to-r from-pink-500  via-indigo-500 to-purple-500 transition-opacity  duration-500 mix-blend-lighten w-[300px] h-[400px] z-0 "
        style={{
            top:position.y - 150,
            left:position.x - 150,
        }}
      />

      <div className="relative flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 group transition-all z-10">
        {/* Icon */}
        <div className="flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <img
            src={services?.icon}
            alt={services?.title || "Service Icon"}
            className="object-contain max-w-30 rounded-full bg-white dark:bg-gray-900 m-2"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {services?.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {services?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
