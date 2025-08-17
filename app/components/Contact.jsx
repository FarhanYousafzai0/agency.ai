import React from 'react'
import Title from './Title'
import Form from './Form'

const Contact = () => {
  return (
    <>
      <div id='contact' className='relative h-screen flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <Title title="Reach out to us" desc="From strategy to execution, we craft digital solutions that move your business forward."/>

<Form/>
        </div>t
    </>
  )
}

export default Contact
