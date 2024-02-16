/* eslint-disable no-unused-vars */
import React from 'react'

function Featured() {
  return (
    <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
            <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">Featured Projects</h1>
        </div>
        <div className="px-20">    
            <div className="cards w-full flex gap-10 pt-10">
                <div className="card-container relative rounded-2xl w-1/2 h-[75vh] bg-slate-200">
                        <h1 className='text-[#CDEA68] absolute left-full -translate-y-1/2 -translate-x-1/2 top-1/2 z-10  tracking-tight leading-none  text-8xl'>{"FYDE".split('').map((item,index)=>
                        <span className='' key={item}>{item}</span>)}</h1>
                    <div className="w-full h-full rounded-2xl scale-50 overflow-hidden">
                        <img className='w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>

                <div className="card-container relative rounded-2xl w-1/2 h-[75vh] ">
                    <h1 className='text-[#CDEA68] absolute right-full -translate-y-1/2 translate-x-1/2 top-1/2 z-10  tracking-tight leading-none  text-8xl'>
                        {"VISE".split('').map((item,index)=>
                        <span className='' key={item}>{item}</span>)}
                    </h1>
                    <div className="w-full h-full rounded-2xl scale-50 overflow-hidden">
                        <img className='w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured