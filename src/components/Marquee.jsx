/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='0.1' className=" w-full py-20 rounded-t-3xl  bg-[#013932]">
            <div className="text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden">
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{  ease: "linear", repeat: Infinity, duration: 7 }} className='text-[18vw] leading-none font-custom5 font-semibold uppercase mb-[.5vw] pt-10 pr-10 '>i am a frontend webdev</motion.h1>
                
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{  ease: "linear", repeat: Infinity, duration: 7 }} className='text-[18vw] leading-none font-custom5 font-semibold uppercase mb-[.5vw] pt-10 pr-10 '>i am a frontend webdev</motion.h1>

                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{  ease: "linear", repeat: Infinity, duration: 7 }} className='text-[18vw] leading-none font-custom5 font-semibold uppercase mb-[.5vw] pt-10 pr-10 '>i am a frontend webdev</motion.h1>
            </div>
        </div>
    )
}

export default Marquee