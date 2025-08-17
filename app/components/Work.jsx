import React from 'react'
import Title from './Title'
import Image from 'next/image'

const Work = () => {

  const workData = [
  {
    title: "Mobile app marketing",
    description: "Boosted app downloads and engagement with targeted mobile campaigns.",
    image: "/work_dashboard_management.png"
  },
  {
    title: "Fitness app promotion",
    description: "Increased brand awareness and users via influencer partnerships.",
    image: "/work_fitness_app.png"
  },
  {
    title: "Dashboard management",
    description: "Built and managed a real-time analytics dashboard for clients.",
    image: "/work_mobile_app.png"
  },


  ]
  return (
    <section id='work' className='relative h-auto flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <Title title="Out latest work" desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results." />

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 w-full  gap-6 max-w-6xl'>


          {workData.map((work,index)=>(<div key={index} className='hover:scale-102 transition-all  duration-500 cursor-pointer'>

        <img src={work.image} className='w-full rounded-xl' alt="" />

        <h3 className='mt-3 font-semibold text-lg mb-2'>{work.title}</h3>
        <p className='text-sm w-5/6 opacity-70'>{work.description}</p>
          </div>))}
        </div>


    </section>
  )
}

export default Work
