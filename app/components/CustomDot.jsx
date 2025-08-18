"use client "
import React, { useEffect, useRef } from 'react'

const CustomDot = () => {

const outLineRef = useRef(null);
const dotRef = useRef()


const mouse = useRef({x:0,y:0})
const position = useRef({x:0,y:0});

useEffect(() => {

    const handleMouse = (e)=>{
        mouse.current.x = e.ClientX
        mouse.current.y = e.ClientY

    }

    document.addEventListener('mousemove',handleMouse);

    const animate = ()=>{

        position.current.x += (mouse.current.x - position.current.x) * 0.1
        position.current.y += (mouse.current.y - position.current.y) * 0.1

        if(dotRef.current && outLineRef.current){

            dotRef.current.style.transform = `translate3d(${mouse.current.x -6}px,${mouse.current.y -6}px,0)`
             outLineRef.current.style.transform = `translate3d(${position.current.x -20}px,${position.current.y -20}px,0)`
        }
requestAnimationFrame(animate)

    }
animate()
  return () => {
   document.removeEventListener('mousemove',handleMouse)
  }
}, [])





  return (
    <>
    <div ref={outLineRef} className='fixed top-0 left-0 bg-blue-500 rounded-full w-3 h-3  pointer-events-none z-[999]'></div>
    <div ref={dotRef} className='fixed top-0 left-0 border border-blue-300 rounded-full w-10 h-10  pointer-events-none z-[999]'></div>

    </>
  )
}

export default CustomDot
