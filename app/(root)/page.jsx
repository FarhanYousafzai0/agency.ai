"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

const page = () => {

  return (
    <>
      <section className='lg:w-[90%] h-screen mx-auto relative '>
        <Nav />
        <Hero/>
      </section>
    </>
  )
}

export default page
