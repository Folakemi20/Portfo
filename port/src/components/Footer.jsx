import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1f1c2c] lg:w-[100%] w-full h-[40px]'>
        <div className='flex items-center justify-center mx-auto max-w-[1100px]'>
            <p className='text-white lg:text-[20px] text-[15px] font-sans'>Created By <span className='text-rose-500 font-semibold font-mono text-[20px]'><a href="#">Fola.co</a></span> |</p>
            <p className='text-white lg:text-[20px] text-[15px] font-sans'>&copy; 2025 All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer