import React from 'react'

const NavBar = () => {
  return (
    <nav className='sticky top-0 z-20 backdrop-blur-md w-full bg-[#fcf7f8]/60 border border-[#fcf7f8] shadow-sm'>
        <div className='flex items-center justify-between w-full max-w-[1100px] mx-auto p-4 font-serif'>
            <h1 className='text-[25px] font-bold text-[#a31621]'>Folakemi</h1>
            <ul className='lg:flex hidden items-center space-x-8 '>
                <li className='text-[#a31621] text-[20px] font-medium hover:underline'><a href="#">About</a></li>
                <li className='text-[#a31621] text-[20px] font-medium hover:underline'><a href="#">Skills</a></li>
                <li className='text-[#a31621] text-[20px] font-medium hover:underline'><a href="#">Services</a></li>
                <li className='text-[#a31621] text-[20px] font-medium hover:underline'><a href="#">Contact</a></li>
            </ul>

        </div>
    </nav>
  )
}

export default NavBar