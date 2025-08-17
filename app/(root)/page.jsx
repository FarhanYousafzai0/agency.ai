"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import Services from '../components/Services'
import Work from '../components/Work'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const page = () => {

  return (
    <>
      <div className='lg:w-[90%]  mx-auto relative '>
        <Nav />
        <Hero/>
        <Companies/>
        <Services/>
        <Work/>
        <Team/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default page
