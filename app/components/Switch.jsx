"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <label className="relative inline-block w-[60px] h-[30px] cursor-pointer">
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        className="hidden"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />

      {/* Slider background */}
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-500 overflow-hidden ${
          isDark ? "bg-black" : "bg-blue-500"
        }`}
      >
        {/* Sun / Moon */}
        <div
          className={`absolute h-[20px] w-[20px] left-[4px] bottom-[4px] rounded-full transition-all duration-500 ${
            isDark ? "translate-x-[26px] bg-white" : "bg-yellow-400"
          }`}
        >
          {/* Moon dots */}
          {isDark && (
            <>
              <svg
                className="absolute left-[10px] top-[3px] w-[6px] h-[6px] fill-gray-400"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="50" />
              </svg>
              <svg
                className="absolute left-[2px] top-[10px] w-[10px] h-[10px] fill-gray-400"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="50" />
              </svg>
              <svg
                className="absolute left-[16px] top-[18px] w-[3px] h-[3px] fill-gray-400"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="50" />
              </svg>
            </>
          )}
        </div>

        {/* Clouds & Stars */}
        {isDark ? (
          /* Stars for dark mode */
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="absolute w-[20px] top-[2px] left-[3px] fill-white animate-pulse"
              viewBox="0 0 20 20"
            >
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg
              className="absolute w-[6px] top-[16px] left-[3px] fill-white animate-pulse"
              viewBox="0 0 20 20"
            >
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          </div>
        ) : (
          /* Clouds for light mode */
          <div className="absolute inset-0">
            <svg
              className="absolute left-[30px] top-[15px] w-[40px] fill-gray-200 animate-[cloud-move_6s_infinite]"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="absolute left-[44px] top-[10px] w-[20px] fill-gray-200 animate-[cloud-move_6s_infinite_1s]"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
        )}
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes cloud-move {
          0% {
            transform: translateX(0px);
          }
          40% {
            transform: translateX(4px);
          }
          80% {
            transform: translateX(-4px);
          }
          100% {
            transform: translateX(0px);
          }
        }
      `}</style>
    </label>
  );
}
