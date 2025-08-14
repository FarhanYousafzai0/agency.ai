"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav'
import Dark from '../components/Dark'

const page = () => {
  const [theme,setTheme] = useState('light')
  return (
    <>
      <Dark/>
    </>
  )
}

export default page
