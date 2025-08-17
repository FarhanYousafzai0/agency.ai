"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import Services from '../components/Services'
import Work from '../components/Work'
import Team from '../components/Team'

const page = () => {

  return (
    <>
      <section className='lg:w-[90%]  mx-auto relative '>
        <Nav />
        <Hero/>
        <Companies/>
        <Services/>
        <Work/>
        <Team/>
      </section>
    </>
  )
}

export default page
