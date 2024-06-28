/* eslint-disable no-unused-vars */
import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards = [useAnimation(),useAnimation()]
    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }

    return (
        <div className="w-full py-20">
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-7xl font-custom4 tracking-tight max-sm:tracking-normal">My Hand-Made Projects</h1>
            </div>
            <div className="px-20 max-sm:px-10">
                <div className="cards w-full  max-sm:flex-col max-md:flex-col flex gap-10 pt-10">
                    <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="card-container  relative rounded-2xl w-1/2 h-[75vh] max-sm:h-[40vh] max-md:h-[60vh] max-sm:w-full max-md:w-full bg-slate-200">
                        <h1 className='text-[#CDEA68] overflow-hidden flex absolute left-full max-sm:left-52 max-md:left-72 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10  tracking-tight leading-none  text-8xl'>{"FYDE".split('').map((item, index) =>
                            <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.83, 0, 0.17, 1],delay:index*.06}}  className='inline-block' key={item}>{item}</motion.span>)}</h1>
                        <div className="w-full h-full  rounded-2xl scale-50 overflow-hidden">
                            <img className='w-full h-full  bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>

                    <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)}  className="card-container  relative rounded-2xl w-1/2 h-[75vh] max-sm:h-[40vh] max-md:h-[60vh] max-sm:w-full max-md:w-full">
                        <h1 className='max-sm:right-52 max-md:right-72  flex overflow-hidden text-[#CDEA68] absolute right-full -translate-y-1/2 translate-x-1/2 top-1/2 z-10  tracking-tight leading-none  text-8xl'>
                            {"VISE".split('').map((item, index) =>
                                <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.83, 0, 0.17, 1],delay:index*.06}}  className='inline-block' key={item}>{item}</motion.span>)}
                        </h1>
                        <div className="w-full h-full rounded-2xl scale-50 overflow-hidden">
                            <img className='w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured