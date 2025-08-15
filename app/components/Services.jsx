import assets from '@/public/assets';
import React from 'react'
import Title from './Title';
import ServiceCard from './ServiceCard';

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
<Title title='How can we help ?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

<div className='flex flex-col gap-5 md:grid grid-cols-2'>
    {services?.map((services,index)=>(
        <ServiceCard services={services} key={index} index={index}/>
    ))}
</div>
      </section>
    </>
  )
}

export default Services
