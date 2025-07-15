import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#a31621] pt-15'>
    <h1 className="text-center lg:text-[58px] text-[35px] font-serif  text-blue-100 underline">My <span className="text-rose-300">Services</span></h1>
    <div className='flex flex-col lg:flex-row gap-12 w-full max-w-[1100px] mx-auto p-4 font-serif lg:pt-15 pt-10'>
      <div className='bg-white hover:bg-rose-300 hover:text-white lg:w-[30%] p-10  w-full h-[350px] rounded-2xl shadow-md hover:shadow-md hover:scale-95 transition'>
        <p className='text-[25px] font-medium text-[#a31621]'>HTML/CSS/JavaScript Coding</p>
        <p className='font-sans '>. Clean, sematic HTML</p>
        <p className='font-sans'>. Custom-styled components using CSS (or Tailwind, SCSS)</p>
        <p className='font-sans'>. Interactivity via JavaScript or frameworks like React, Vue, or Angular</p>
      </div>

       <div className='bg-white hover:bg-rose-300 hover:text-white lg:w-[30%] p-10 w-full h-[350px] rounded-2xl shadow-md hover:shadow-md hover:scale-95 transition'>
        <p className='text-[25px] font-medium text-[#a31621]'>Frontend Framework Setup</p>
        <p className='font-sans'>. Setup of modern tools like:</p>
        <p className='font-sans'>. React.js/ Vue.js/ Angular</p>
        <p className='font-sans'>. Next.js/ Nuxt.js for SSR (server-side rendering)</p>
        <p className='text-[20px] font-medium text-[#a31621]'>Animations and Interaction</p>
        <p className='font-sans'>. Smooth transitions, hover effect</p>
        <p className='font-sans'>. Scroll animations (e.g using libraries like AOS or GSAP)</p>
      </div>

       <div className='bg-white hover:bg-rose-300 hover:text-white lg:w-[30%] p-10 w-full h-[350px] rounded-2xl shadow-md hover:shadow-md hover:scale-95 transition'>
        <p className='text-[25px] font-medium text-[#a31621]'>Integration with APIs</p>
        <p className='font-sans'>. Connecting the front-end with back-end services.</p>
        <p className='font-sans'>. Fetching and displaying data from databases or services.</p>
        <p className='text-[20px] font-medium text-[#a31621]'>Cross-Browser Compatibility</p>
        <p className='font-sans'>. Ensuring the website works well on Chrome, Safari, Edge, Firefox, etc.</p>
      </div>

    </div>
    <p className='bg-white lg:w-[100%] w-full h-[1px]'></p>
    </div>
  )
}

export default Services