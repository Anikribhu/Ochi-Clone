/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.3"
        className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3  h-2/3 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
              >
                <div className=" w-10 h-10 max-sm:h-5 max-sm:w-5  bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3  h-2/3 bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
              >
                <div className=" w-10 h-10 max-sm:h-5 max-sm:w-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
