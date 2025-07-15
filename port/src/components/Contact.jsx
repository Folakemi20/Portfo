import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#a31621] py-10'>
      <h1 className='text-center lg:text-[58px] text-[35px] font-serif text-blue-100 underline'>Contact</h1>
      <div className='bg-white lg:w-[45%] w-full max-w-[1100px] rounded-2xl mx-auto p-10'>
        <form action="">
          <div className='flex lg:gap-21 gap-4'>
            <div className='flex flex-col space-y-2'>
              <label className='text-[20px] font-medium' htmlFor="">First Name</label>
              <input className='lg:w-[220px] w-[150px] px-2 py-2 outline-none border border-[#a31621] rounded-[5px]' type="text" placeholder='First name' required />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='text-[20px] font-medium' htmlFor="">Last Name</label>
              <input className='lg:w-[220px] w-[150px] px-2 py-2 outline-none border  border-[#a31621] rounded-[5px]' type="text" placeholder='Last name' required />
            </div>
            
          </div>
          <div className='flex flex-col pt-5 space-y-2'>
            <label className='text-[20px] font-medium' htmlFor="">E-mail</label>
            <input className='border border-[#a31621] outline-none px-2 py-2 rounded-[5px]' type="email" placeholder='E-mail' required  />
          </div>
          <div className='flex flex-col pt-5 space-y-2'>
            <label className='text-[20px] font-medium' htmlFor="">Message</label>
            <textarea className='resize-none border border-[#a31621] p-2 outline-none rounded-[5px]' name="" id="" cols="50" rows="5" placeholder='Enter Your Message' required></textarea>
          </div>
          <div className='pt-5 flex items-center justify-center'>
            <button className='bg-blue-600 px-7 py-3 rounded-[5px] text-white text-[20px] font-medium hover:bg-blue-600/80 cursor-pointer' type="submit">Submit</button>
          </div>
        </form>

      </div><br /><br />
      <p className='lg:w-[100%] w-full h-[1px] bg-white'></p>
    </div>
  )
}

export default Contact