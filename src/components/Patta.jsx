import React from 'react'
import { motion } from 'motion/react';
import { IoIosArrowRoundForward } from "react-icons/io";
function Patta({width,start ,para,hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff",padding:"25px"}}
      className={`min-h-[30rem] bg-zinc-800 p-5  rounded-xl ${width} flex flex-col justify-between`}
    >
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>Up</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever HEading</h1>
      </div>
      <div className="down w-full ">
        {start === true ? (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-1 border-zinc-50">
              Contact Us
            </button>
          </>
        ) : null}
        {para && (
          <>
            <p className="text-sm text-zinc-500 font-medium mt-2">
              This is the clone of refokus Created by Prince
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Patta