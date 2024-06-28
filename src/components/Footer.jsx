/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
    return (
        <div className='w-full font-custom4 flex gap-5 max-sm:px-8 p-20 h-screen bg-zinc-900'>
            <div className="w-1/2 h-full flex flex-col justify-between ">
                <div className="headings font-custom2">
                    <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-8 max-sm:mb-1'>Eye-</h1>
                    <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-8 max-sm:mb-1'>Opening</h1>
                </div>
                <h1 className=' text-2xl  tracking-wider font-semibold'>Anik Mallick</h1>
            </div>
            <div className="w-1/2 ">
            <h1 className='font-custom2 text-[5vw] font-semibold uppercase leading-none mb-10'>Presentations</h1>
            <div className="dets mt-10 ">
                <h1 className='ml-2 text-xl max-sm:text-2xl'>S:</h1>
                {["Instagram","Behance","Facebook","Linkedin"].map((items,index)=><a key={index} className='block m-2  underline'>{items}</a>)}
            </div>
            <div className="dets-2 max-sm:gap-5  flex  justify-between">
                <div className="dets mt-10 font-['Neue_Montreal]">
                    <h1 className='ml-2 text-xl max-sm:text-2xl'>L:</h1>
                    {["202-1965 W 4th AveVancouver, Canada","30 Chukarina StLviv, Ukraine"].map((items,index)=><a key={index} className='block m-2  underline leading-9'>{items}</a>)}
                </div>
                <div className="dets mt-10 font-['Neue_Montreal]">
                    <h1 className='ml-2 text-xl max-sm:text-2xl'>M:</h1>
                    {["Home","Services","Our Work","About Us","Insights","Contact Us"].map((items,index)=><a key={index} className='block m-2   underline'>{items}</a>)}
                </div>
            </div>
            <div className="dets mt-10 max-sm:mt-20 font-['Neue_Montreal]">
                    <h1 className='ml-2 text-xl max-sm:text-2xl'>E:</h1>
                    {["hello@ochi.design"].map((items,index)=><a key={index} className='block m-2  underline'>{items}</a>)}
                </div>
            </div>
        </div>
    )
}

export default Footer