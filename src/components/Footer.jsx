/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <div className="w-full max-sm:flex-col  font-custom4 flex justify-evenly gap-5 max-sm:px-8 p-20 h-screen bg-zinc-900">
      <div className="w-1/2 max-sm:w-full h-full flex flex-col max-sm:gap-5 justify-between ">
        <div className="headings font-custom2">
          <h1 className="text-[8vw] max-sm:invisible font-semibold uppercase leading-none -mb-8 max-sm:mb-1">
            Eye-
          </h1>
          <h1 className="text-[8vw] max-sm:invisible font-semibold uppercase leading-none -mb-8 max-sm:mb-1">
            Opening
          </h1>
          <h1 className="text-[8vw] invisible  max-sm:visible font-semibold uppercase leading-none -mb-8 max-sm:mb-1">
            Eye-opening
          </h1>
        </div>
        <h1 className=" text-2xl  tracking-wider font-semibold">
          Anik Mallick
        </h1>
      </div>
      <div className="w-1/2 ">
        <h1 className="font-custom2 text-[5vw] font-semibold uppercase leading-none mb-10">
          Presentations
        </h1>
        <div className="dets mt-10 ">
          <h1 className="ml-2 text-xl max-sm:text-2xl">Social:</h1>
          {/* {["Instagram","Facebook","Linkedin"].map((items,index)=><a key={index} className='block m-2  underline'>{items}</a>)} */}
          <a
            className="block m-2  underline"
            target="blank"
            href="https://github.com/Anikribhu"
          >
            Github
          </a>
          <a
            className="block m-2  underline"
            target="blank"
            href="https://www.instagram.com/invinsible_anik_reign/"
          >
            Instagram
          </a>
          <a
            className="block m-2  underline"
            target="blank"
            href="https://www.linkedin.com/in/anik-mallick-sn/"
          >
            Linkedin
          </a>
        </div>
        <div className="dets-2 max-sm:gap-2  flex max-sm:flex-col  justify-between">
          <div className="dets mt-10 font-['Neue_Montreal]">
            <h1 className="ml-2 text-xl max-sm:text-2xl">Location:</h1>
            {["New Hospital Road, Chinsurah", "Hooghly,West Bengal,India"].map(
              (items, index) => (
                <a key={index} className="block m-2  underline leading-9">
                  {items}
                </a>
              )
            )}
          </div>
          <div className="dets mt-10 w-full font-['Neue_Montreal]">
            <h1 className="ml-2 text-xl max-sm:text-2xl">Mentions:</h1>
            {/* {["Home","Services","Our Work","About Us","Insights","Contact Us"].map((items,index)=><a key={index} className='block m-2   underline'>{items}</a>)} */}
            <a className="block m-2   underline" href="">
              Home
            </a>
            <a className="block m-2   underline" href="">
              Services
            </a>
            <a className="block m-2   underline" href="">
              My Work
            </a>
            <a className="block m-2   underline" href="">
              Contact Me
            </a>
          </div>
        </div>
        <div className="dets mt-10 max-sm:mt-10 font-['Neue_Montreal]">
          <h1 className="ml-2 text-xl max-sm:text-2xl">Email:</h1>
          {/* {["anikmallick28@gmail.com"].map((items,index)=><a key={index} className='block m-2  underline'>{items}</a>)} */}
          <a className="block m-2 underline" href="">
            anikmallick28@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
