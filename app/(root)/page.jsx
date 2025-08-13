"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav'

const page = () => {
  const [theme,setTheme] = useState('light')
  return (
    <>
      <section className='lg:w-[90%] h-screen mx-auto relative '>
        <Nav theme={theme} setTheme={setTheme}/>
      </section>
    </>
  )
}

export default page
