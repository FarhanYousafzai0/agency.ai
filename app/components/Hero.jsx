import assets from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section id='hero' className='h-auto pointer-events-none  w-full py-10  mt-10 flex flex-col items-center text-center dark:text-white text-gray-700  gap-6 sm:px-14 lg:px-22 xl:px-40 overflow-hidden  '>
<div className='inline-flex items-center rounded-full gap-1 pr-4 p-1.5 border border-neutral-200 '>
<Image src={assets.group_profile} width={100} height={100} alt='Group-Profile'/>
<p className='text-xs font-medium'>Trusted by 10k+ people.</p>
</div>


<h1 className='text-4xl md:text-5xl pointer-events-none lg:text-6xl xl:-text-[84px] font-medium xl:leading-[80px] max-w-4xl'>
    Turning imagination into <br /> <span className=' bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent '>digital</span> impact
</h1>
<p className=' text-sm sm:text-lg text-gray-500 leading-normal max-w-4/5'>Crating meaningfull connection and converting big ideas  <br /> into interactive and digital experience.</p>


<div className='relative '>
<img  src="/hero_img.png" loading='lazy' className='w-full max-w-6xl' alt="" />
<img src="/bgImage1.png" alt="Gradient_image" className='w-full absolute -z-1 -top-40 -right-50 sm:-top-100 sm:-right-70 dark:hidden' />
</div>


      </section>
    </>
  )
}

export default Hero
