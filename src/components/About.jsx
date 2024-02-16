/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black '>
        <h1 className=' text-[4vw] leading-[4vw] font-["Neue_Montreal"] tracking-tight '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full mt-20 border-[#a1b562] border-t-[1px] flex gap-5">
            <div className="w-1/2">
                <h1 className="text-7xl pt-20 ">Our approach:</h1>
                <button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex items-center gap-10">Read More
                <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-[#a6c730] mt-5 rounded-3xl"></div>
        </div>
    </div>
  )
}

export default About