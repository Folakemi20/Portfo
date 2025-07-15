import React from 'react'
import CHATGPT from "../assets/images/CHATGPTPNG.jpeg"
import Chrome from "../assets/images/Chrome.jpeg"
import CSS from "../assets/images/CSS.jpeg"
import Html from "../assets/images/Html.jpeg"
import JavaSriptLogo from "../assets/images/JavaScriptLogo.jpeg"
import Netlify from "../assets/images/Netlify.jpeg"
import Pinterest from "../assets/images/Pinterest.jpeg"
import ReactLogo from "../assets/images/ReactLogoPNG.JPEG"
import Figma from "../assets/images/Figma.jpeg"
import GitHub from "../assets/images/GitHub.jpeg"
import Vercel from "../assets/images/Vercel.jpeg"
import Angular from "../assets/images/Angular.jpeg"


const Tools = () => {
  return (
    <div className='bg-[#a31621] pt-15'>
        <h1 className="text-center lg:text-[58px] text-[35px] font-serif  text-blue-100 underline">Tools <span className="text-rose-300">I Use</span></h1>
        <section className='flex flex-row lg:gap-21 gap-9 w-full max-w-[1100px] mx-auto p-4 font-serif'>
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={CHATGPT} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={Chrome} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={CSS} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={Html} alt="" />
        </section>
         <section className='flex flex-row lg:gap-21 gap-9 w-full max-w-[1100px] mx-auto p-4 font-serif'>
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={JavaSriptLogo} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={Netlify} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={Pinterest} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={ReactLogo} alt="" />
        </section>
        <section className='flex flex-row lg:gap-21 gap-9 w-full max-w-[1100px] mx-auto p-4 font-serif'>
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={Figma} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={GitHub} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={Angular} alt="" />
            <img className='lg:w-50 w-15 h-15 lg:h-50 rounded-2xl hover:scale-95 transition' src={Vercel} alt="" />
        </section>
        <p className='bg-white lg:w-[100%] w-full h-[1px]'></p>
    </div>
  )
}

export default Tools