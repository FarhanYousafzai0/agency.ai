"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import Services from '../components/Services'
import Work from '../components/Work'

const page = () => {

  return (
    <>
      <section className='lg:w-[90%]  mx-auto relative '>
        <Nav />
        <Hero/>
        <Companies/>
        <Services/>
        <Work/>
      </section>
    </>
  )
}

export default page
