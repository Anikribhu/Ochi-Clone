/* eslint-disable no-unused-vars */
import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex max-sm:flex-col gap-5 items-center px-20 bg-zinc-900'>
      <div className="card-container h-[50vh] max-sm:w-full w-1/2">
        <div className="card relative rounded-2xl flex items-center justify-center w-full h-full  bg-[#6b186c]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute font-medium text-[#CDEA68] left-10 bottom-10 border-[2px] border-[#CDEA68] rounded-full px-2 py-1'>&copy;2023-2024</button>
        </div>
      </div>
      <div className="card-container max-sm:w-full  max-sm:flex-col max-md:flex-col h-[50vh] flex gap-5 w-1/2">
        <div className="card relative  flex items-center justify-center rounded-2xl w-full h-full  bg-[#8bb7ed]">
        <img className='w-32 max-sm:mb-8 max-md:mb-8' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute  font-medium text-[#CDEA68] left-8 bottom-10 border-[2px] max-sm:bottom-8 border-[#CDEA68] rounded-full px-2 py-1'>RATING 5.0 ON CLUTCH</button>
        </div>


        <div className="card relative max-sm:h-[60vh] max-sm:w-full flex items-center justify-center rounded-2xl w-full h-full   bg-zinc-700">
        <img className='w-32 max-sm:mb-8   ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute max-sm:bottom-4   font-medium text-[#CDEA68] left-6 bottom-10 border-[2px] border-[#CDEA68] rounded-full px-2 py-1'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards