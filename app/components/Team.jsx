import React from 'react'
import Title from './Title'
import { teamData } from '@/public/assets'


const Team = () => {
  return (
    <section id='team' className='relative h-screen flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <Title title="Meet the team" desc="A passionate team of digital experts dedicated to your brands success"/>
      

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4 w-full'>

        {teamData.map((team,index)=>(<div key={index} className='border border-neutral-100 dark:border-gray-500 hover:scale-103 transition-all duration-500  shadow-xl bg-white dark:bg-gray-900  rounded-xl p-3 flex max-sm:flex-col  items-center gap-5'>
<img src={team.image} alt=""  className='w-12 h-12 rounded-full' />

<div className="flex-1">
    <h1 className='font-semibold text-sm'>{team.name}</h1>
    <p className='text-xs opacity-75'>{team.title}</p>
    <p></p>
</div>
        </div>))}
      </div>
    </section >
  )
}

export default Team
 