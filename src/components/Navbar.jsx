/* eslint-disable no-unused-vars */
import React from 'react'
import DropdownRender from './dropdown'


function Navbar() {

    return (
        <div className="backdrop-blur max-sm:h-5 max-md:h-14 fixed z-[999] w-full px-10 py-8 flex font-custom4 justify-between items-center">
            <div className="logo max-sm:pt-3">
                <h1 className=' text-2xl tracking-wider font-semibold'>Anik Mallick</h1>
            </div>
            <div className="max-sm:hidden max-md:hidden links flex gap-10">
                {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
                    <a key={item} className={` cursor-pointer relative underline-transition text-lg font-regular capitalize ${index === 4 && " md:ml-20 ml-56"} `}>{item}</a>
                ))}
            </div>

            <DropdownRender className=""/>

        </div>
    )
}

export default Navbar