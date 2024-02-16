/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1
    '>
        <div className="px-20 textstructure mt-52">
        {["We create","Eye Opening", "presentations"].map((item,index)=>{
          return <div key={item} className=" masker ">
              <div className="w-fit flex items-end overflow-hidden">
              {index=== 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:2}} className="w-[8vw] rounded-lg bg-white mr-5 h-[5.7vw] relative -top-[1vw]"></motion.div>)}
              <h1 className="uppercase pt-[2vw] -mb-[1vw] leading-[.70] h-full font-medium text-[9vw] font-['Founders_Grotesk_X']">{item}</h1>
              </div>
                
            </div>
        })}
        </div>
        <div className=" flex justify-between items-center py-5 px-20 border-t-[1px] border-zinc-800 mt-28">
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p key={item} className=' text-lg font-light tracking-tight leading-none'>{item}</p>
          ))}
          <div className="button flex items-center gap-2">
            <div className="px-5 py-2 border-[1px] border-zinc-500 text-[17px] rounded-full uppercase">start the project</div>
            <div className="w-10 h-10 border-[1px] border-zinc-500 flex items-center justify-center rounded-full">
              <span className='rotate-[45deg]'>
              <FaArrowUpLong/>
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage