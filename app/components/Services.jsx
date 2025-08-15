import assets from '@/public/assets';
import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Advertising",
      desc: "Maximize your reach and ROI with targeted, data-driven advertising campaigns tailored to your business goals.",
      icon: "/ads_icon.svg"
    },
    {
      title: "Content Managment",
      desc: "Efficiently organize, schedule, and manage your digital content across platforms for a seamless brand experience.",
      icon: "/content_icon.svg"
    },
    {
      title: "Content Wrting",
      desc: "Engage your audience with compelling, high-quality written content crafted to inform, persuade, and inspire.",
      icon: "/marketing_icon.svg"
    },
    {
      title: "Social Media",
      desc: "Grow your online presence and connect with your audience through strategic social media management and campaigns.",
      icon: "/social_icon.svg"
    }
  ];
  return (
    <>
      <section id='services' className='relative h-screen flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <img src="/bgImage2.png" alt="Gradient_image" className='w-full absolute -z-1 -top-110 -left-70 dark:hidden' />

<h1 className='text-3xl sm:text-5xl font-medium'>How can we help ?</h1>
<p className='max-w-lg text-center text-gray-500 dark:text-white mb-6'>From strategy to execution, we craft digital solutions that move your business forward.</p>

      </section>
    </>
  )
}

export default Services
