import React from 'react'
import Mycartoonone from '../assets/images/Mycartoonone.jpg'

const HeaderBar = () => {
  return (
    <header className=' bg-[#a31621] pt-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-[1100px] mx-auto p-4 font-serif'>
            <div>
                <h1 className='lg:text-[35px] text-[20px] text-white'>Hello, I'm</h1>
                <marquee behavior="scroll" direction="left" scrollAmount="20">
                    <span className='lg:text-[58px] text-[32px] font-semibold bg-gradient-to-r from-blue-300 to-rose-400 bg-clip-text text-transparent'>Jinadu Folakemi,</span>
                </marquee>
                <p className='lg:text-[28px] text-[20px] text-white'>I design with logic and code with creativity.</p>
            </div>
            <div>
                <img className='lg:w-[400px] w-[200px] lg:h-[400px] h-[200px] lg:mt-0 mt-15 rounded-full border-[5px] border-white shadow-sm hover:shadow-md hover:scale-105 transition' src={Mycartoonone} alt="" />
            </div>
        </div>
        <p className='bg-white lg:w-[100%] w-full h-[1px]'></p>
    </header>
  )
}

export default HeaderBar