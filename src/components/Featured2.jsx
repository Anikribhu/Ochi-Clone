/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { assets } from "../assets/assets";

function Featured2() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 pt-0">
      <div className="px-20 max-sm:px-10">
        <div className="cards  w-full max-md:flex-col flex gap-10 pt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container transform transition duration-500 hover:scale-110 m-2  relative rounded-2xl w-1/2  max-sm:h-[40vh] max-md:h-[60vh] max-sm:w-full max-md:w-full bg-zinc-800"
          >
            <h1 className="text-[#CDEA68]  overflow-hidden flex absolute left-[36%]  max-md:left-72 -translate-y-1/2 -translate-x-60 top-1/2 z-10  tracking-tight leading-none   text-8xl">
              {"Award_Website".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.06 }}
                  className="inline-block max-md:invisible max-sm:invisible"
                  key={item}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <a
              target="blank"
              href="https://award-website-clone.vercel.app/"
            >
              <img
                className="w-full h-full object-contain"
                src="https://assets.awwwards.com/awards/element/2023/05/646866fdcb69a649837017.png"
                alt="##"
              />
            </a>
            <h1 className="text-[#CDEA68] invisible font-custom max-sm:visible text-center text-3xl pt-2">Award website</h1>
          </motion.div>

          {/* <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container  relative rounded-2xl w-1/2 h-[75vh] max-sm:h-[40vh] max-md:h-[60vh] max-sm:w-full max-md:w-full"
          >
            <h1 className="max-sm:right-52 max-sm:text-6xl max-md:right-72  flex overflow-hidden text-[#CDEA68] absolute right-full -translate-y-1/2 translate-x-1/2 top-1/2 z-10  tracking-tight leading-none  text-8xl">
              {"WEATHER_APP".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.06 }}
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
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}

export default Featured2;
