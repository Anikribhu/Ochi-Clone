/* eslint-disable no-unused-vars */
import React from 'react'
import DropdownRender from './dropdown'


function Navbar() {

    return (
        <div className="backdrop-blur max-sm:h-5 max-md:h-14 fixed z-[999] w-full px-10 py-8 font-custom2 flex font-custom4 justify-between items-center">
            <div className="logo">
                <h1 className=' text-2xl tracking-wider font-semibold'>Anik Mallick</h1>
            </div>
            <div className="max-sm:hidden max-md:hidden links flex gap-10">
                {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
                    <a key={item} className={` cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  text-lg font-regular capitalize ${index === 4 && " md:ml-20 ml-56"} `}>{item}</a>
                ))}
            </div>

            <DropdownRender className=""/>

        </div>
    )
}

export default Navbar