import assets from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const Form = () => {
  return (
    <>
      <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

        {/* Name Input */}
        <div>
          <p className='text-sm mb-2 font-medium'>Your name</p>
          <div className='flex items-center px-2 gap-1 border border-neutral-200 dark:border-neutral-700 rounded'>
            <img src="/person_icon.svg" alt="" />
            <input type="text" placeholder='Enter your name...' className='w-full p-3 text-sm outline-none bg-transparent' />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <p className='text-sm mb-2 font-medium'>Your email</p>
          <div className='flex items-center px-2 gap-1 border border-neutral-200 dark:border-neutral-700 rounded'>
            <img src="/email_icon.svg" alt="" />
            <input type="email" placeholder='Enter your email...' className='w-full p-3 text-sm outline-none bg-transparent' />
          </div>
        </div>

        {/* Message Input (full width) */}
        <div className='sm:col-span-2'>
          <p className='text-sm mb-2 font-medium'>Message</p>
          <textarea
            placeholder='Type your message...'
            rows={10}
            className='w-full p-3 text-sm outline-none min-h-[100px] resize-y border border-neutral-200 dark:border-neutral-700 rounded bg-transparent'
          />
        </div>

        {/* Submit Button (full width) */}
        <div className='sm:col-span-2 flex justify-end'>
          <button
            type="submit"
            className='bg-[#5044E5] text-[16px] hover:scale-103 flex items-center gap-1 text-white font-medium px-8 rounded-full py-3 cursor-pointer  transition-all'
          >
            Submit
            <Image
              src={assets.arrow_icon}
              alt="arrow right"
              width={18}
              height={18}
            />
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
