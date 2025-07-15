import React from "react";
import Mycartoontwo from "../assets/images/Mycartoontwo.jpg";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#a31621] pt-15">
      <div>
        <h1 className="text-center lg:text-[58px] text-[35px] font-serif font-semibold text-blue-100 underline">
          About <span className="text-rose-300">Me</span>
        </h1>
      </div>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-[1100px] mx-auto p-4 font-serif">
        <div className="w-full lg:w-[50%]">
          <img
            className="lg:w-[400px] w-[200px] lg:h-[400px] h-[200px] lg:mt-0 mt-15 rounded-full border-[5px] border-white shadow-sm hover:shadow-md hover:scale-105 transition"
            src={Mycartoontwo}
            alt=""
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <p className="lg:text-[20px] text-white leading-8">
            Hi, I’m a passionate Front-End Developer with a strong eye for
            design and a love for clean, efficient code. I specialize in
            building responsive, accessible, and user-focused websites using
            HTML, CSS, JavaScript, Tailwind CSS, and React. Whether it’s turning
            mockups into pixel-perfect pages or optimizing user interfaces for
            performance and usability—I enjoy bringing ideas to life in the
            browser. I thrive in environments where creativity meets
            functionality, and I’m constantly learning to stay up to date with
            modern web technologies. I value writing clean, maintainable code
            and collaborating with designers and developers to create seamless
            digital experiences.
          </p>
          <div className="flex items-center lg:px-8 lg:py-5 px-4 py-2 bg-blue-500 lg:w-[40%] w-[60%] rounded-full lg:mt-10 mt-5 cursor-pointer gap-4 text-white text-[18px] font-mono hover:bg-blue-500/60">
            <button>Download CV</button>
            <Download />
          </div>
        </div>
      </section>
      <p className="bg-white lg:w-[100%] w-full h-[1px]"></p>
    </div>
  );
};

export default About;
