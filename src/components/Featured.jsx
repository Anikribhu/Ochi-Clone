/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl max-sm:leading-[20vw] font-custom4 tracking-tight max-sm:tracking-normal">
          My Hand-Made Projects
        </h1>
      </div>
      <div className="px-20 max-sm:px-10">
        <div className="cards w-full  max-sm:flex-col max-md:flex-col flex gap-10 pt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container transform transition duration-500 hover:scale-110 m-2  relative rounded-2xl w-1/2  max-sm:h-[40vh] max-md:h-[60vh] max-sm:w-full max-md:w-full bg-zinc-800"
          >
            <h1 className="text-[#CDEA68] overflow-hidden flex absolute left-[40%] max-sm:left-52 max-md:left-72 -translate-y-1/2 -translate-x-60 top-1/2 z-10  tracking-tight leading-none  text-8xl">
              {"GEMINI_CLONE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.06 }}
                  className="inline-block max-md:invisible max-sm:invisible"
                  key={item}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            {/* <div className="w-full h-full  rounded-2xl scale-50 overflow-hidden">
                            
                        
                        </div> */}
            <a
              target="blank"
              href="https://gemini-clone-gules-three.vercel.app/"
            >
              <img
                className="w-full  h-full  object-contain"
                src="https://bulksignature.com/wp-content/uploads/2024/02/Frame-876-1024x569.png"
                alt="##"
              />
            </a>
            <h1 className="text-[#CDEA68] invisible font-custom max-sm:visible text-center text-3xl pt-4">Gemini Clone</h1>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container transform transition duration-500 hover:scale-110 relative rounded-2xl w-1/2 h-[75vh] max-sm:h-[40vh] max-md:h-[60vh] max-sm:w-full max-md:w-full"
          >
            <h1 className=" max-md:right-72  flex overflow-hidden text-[#CDEA68] absolute right-[48%] -translate-y-1/2 translate-x-1/2 top-1/2 z-10  tracking-tight leading-none  text-8xl">
              {"WEATHER_APP".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.06 }}
                  className="inline-block max-md:invisible max-sm:invisible"
                  key={item}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <a target="blank" href="https://anikribhu.github.io/WeatherApp/">
              <img
                className="w-full h-full object-contain"
                src="https://github.com/Anikribhu/WeatherApp/blob/main/ScreenShot/home.png?raw=true"
                alt=""
              />
            </a>
            <h1 className="text-[#CDEA68] invisible font-custom max-sm:visible text-center text-3xl">Weather App</h1>

            {/* <div className="w-full h-full rounded-2xl scale-50 overflow-hidden">
                        
                        </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
