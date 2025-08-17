import { company_logos } from '@/public/assets'
import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title';

const Companies = () => {
  const companyLogosWithNames = [
    { src:'/microsoft_logo.png', name: "Microsoft" },
    { src:'/zoom_logo.png', name: "Zoom" },
    { src: '/rakuten_logo.png', name: "Rakuten" },
    { src: '/coinbase_logo.png', name: "Coinbase" },
    { src: '/airbnb_logo.svg', name: "Airbnb" },
    { src: '/google_logo.svg', name: "Google" },
  ];

  // Duplicate the logos for seamless marquee effect
  const marqueeLogos = [...companyLogosWithNames, ...companyLogosWithNames];

  return (
    <div className="flex flex-col items-center px-4 sm:px-12 lg:px-23 xl:px-40 gap-10 text-gray-00 dark:text-white">
 

<Title title="Trusted by many companies "/>

      <div className="relative w-full overflow-x-hidden py-2 mask-r-from-50% mask-l-from-50%">
        <motion.div
          className="flex items-center gap-10"
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 12,
            ease: 'linear'
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <img
              src={logo.src}
              key={index}
              alt={logo.name}
              className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
              loading="lazy"
              draggable={false}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Companies
