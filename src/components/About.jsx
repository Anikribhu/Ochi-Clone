/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full p-20 bg-[#CDEA68] rounded-3xl text-black '>
        <h1 className=' text-[4vw] leading-[4vw] font-["Neue_Montreal"] tracking-tight max-sm:text-[6vw] max-sm:leading-none '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full mt-20 max-sm:mt-14 border-[#a1b562] border-t-[1px] flex max-sm:flex-col max-md:flex-col gap-5">
            <div className="w-1/2 ">
                <h1 className="text-7xl pt-20 ">My Specialities</h1>
                <button className="px-10 py-6 max-sm:px-16 max-sm:py-4 max-sm:gap-14 bg-zinc-900 rounded-full text-white max-sm:ml-10 mt-10 flex items-center gap-10">MY RESUME
                <div className="w-2 h-2 rounded-full max-sm:w-3 bg-zinc-100"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] max-sm:h-[40vh] max-md:h-[40vh] max-sm:ml-1 max-sm:w-full max-md:w-full bg-[#a6c730] mb-14 mt-5 rounded-3xl"></div>
        </div>
    </div>
  )
}

export default About