import React from 'react'
import Laptop from "../assets/images/Laptop.jpeg"
import Linkedin from "../assets/images/Linkedin.jpeg"
import Whatsapp from "../assets/images/Whatsapp.jpeg" 
import Twitter from "../assets/images/Twitter.jpeg"
import Github from "../assets/images/Github.jpeg"

const Links = () => {
  return (
    <div className='bg-[#a31621] py-10'>
        <h1 className='text-center lg:text-[58px] text-[35px] font-serif text-blue-100 underline'>Work <span className='text-rose-200'>With <span className='text-blue-100'>Me</span></span></h1>
        <section className="flex flex-col lg:flex-row items-center space-x-12 w-full max-w-[1100px] mx-auto p-4 font-serif">
            <div className='lg:pt-15  pt-10 lg:m-2 mx-auto'>
                <img className='lg:w-[500px] w-[400px] lg:h-[500px] h-[400px] rounded-2xl' src={Laptop} alt="" />
            </div>
            <div className=''>
                <a href=""><p className='text-[20px] text-white font-sans underline'>+2348123809020</p></a>
                <a href=""><p className='text-[20px] text-white font-sans'>jinadufathia2004@gmail.com</p></a>
                <div className='flex flex-row gap-5 pt-5'>
                    <a href="https://wa.me/2348123809020" target='_blank'>
                    <img className='w-10 h-10 rounded-2xl hover:scale-95 transition' src={Whatsapp} alt="" />
                    </a>
                    <a href="https://twitter.com/Prettyfola_02" target='_blank'>
                    <img className='w-10 h-10 rounded-2xl hover:scale-95 transition' src={Twitter} alt="" />
                    </a>
                    <a href="https://github.com/Folakemi20" target='_blank'>
                    <img className='w-10 h-10 rounded-2xl hover:scale-95 transition' src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/jinadu-fathia-00a079335" target='_blank'>
                    <img className='w-10 h-10 rounded-2xl hover:scale-95 transition' src={Linkedin} alt="" />
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Links