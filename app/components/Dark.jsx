"use client "
import React from 'react'

const Dark = () => {

  // Define an array of AI tools with name and SVG/icon


  const handletoggle = ()=>{

    const currentTheme = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
          (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
      );
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem("theme");

  }
  const aiTools = [
    {
      name: "ChatGPT",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#10A37F"/>
          <path d="M24 13a7 7 0 0 1 7 7v1.1a5.5 5.5 0 0 1 2.5 9.9l-1.1.6a7 7 0 1 1-13.8 0l-1.1-.6A5.5 5.5 0 0 1 17 21.1V20a7 7 0 0 1 7-7z" fill="#fff"/>
        </svg>
      ),
    },
    {
      name: "Claude",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#F9B800"/>
          <ellipse cx="24" cy="24" rx="12" ry="8" fill="#fff"/>
          <ellipse cx="24" cy="24" rx="6" ry="4" fill="#F9B800"/>
        </svg>
      ),
    },
    {
      name: "Cluely",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="24" fill="#5044E5"/>
          <circle cx="24" cy="24" r="10" fill="#fff"/>
          <circle cx="24" cy="24" r="5" fill="#5044E5"/>
        </svg>
      ),
    },
    {
      name: "PixelAI",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#FF5A5F"/>
          <rect x="12" y="12" width="24" height="24" rx="6" fill="#fff"/>
          <rect x="18" y="18" width="12" height="12" rx="3" fill="#FF5A5F"/>
        </svg>
      ),
    },
  ];
  return (
   <div className='flex items-center justify-center h-screen w-full bg-white '>
    
    
    <div className='w-[25%] h-[60%] relative p-4 dark:bg-amber-800 bg-neutral-100 shadow-xl overflow-hidden  rounded-2xl border border-neutral-200 '>

        <div className="flex items-center  animate-marque  justify-center h-40 gap-4 mask-r-from-50%  mask-b-from-50% mask-t-from-50% mask-l-from-50%">

{aiTools.map((tool, idx) => <div className='flex items-center  justify-center rounded-full size-12 bg-neutral-300'>
    {tool.icon}
</div>)}

        </div>

        <button onClick={handletoggle} className='px-4 py-1 rounded-xl border border-neutral-200 cursor-pointer '>Switch</button>
    </div>
    
     </div>
  )
}

export default Dark



