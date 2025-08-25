import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react';
function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "Combining high-end design with Webflow development and Creative development, we create websites that not only look stunning but also convert, engage, and help companies scal",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Combining high-end design with Webflow development and Creative development, we create websites that not only look stunning but also convert, engage, and help companies scal",
      live: true,
      case: false,
    },
    {
      title: "YTR 2022",
      description:
        "Combining high-end design with Webflow development and Creative development, we create websites that not only look stunning but also convert, engage, and help companies scal",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "Combining high-end design with Webflow development and Creative development, we create websites that not only look stunning but also convert, engage, and help companies scal",
      live: true,
      case: true,
    },
    {
      title: "Spotify",
      description:
        "Combining high-end design with Webflow development and Creative development, we create websites that not only look stunning but also convert, engage, and help companies scal",
      live: true,
      case: false,
    },
  ];
const [pos, setPos] = useState(0);
const mover = (val) =>{
  setPos(val*23)
}
  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full  pointer-events-none">
        <motion.div
          initial={{ y: pos, x: " -50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-sky-100 left-[44%] bg-white-100    overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full object-contain  bg-sky-100"
          >
            <video
              autoPlay
              loop
              muted
              src="/src/assets/vidio/arqitel-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full object-contain bg-sky-200"
          >
            <video
              autoPlay
              loop
              muted
              src="/src/assets/vidio/chargeflow-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full   bg-zinc-900"
          >
            <video
              autoPlay
              loop
              muted
              src="/src/assets/vidio/cula-169.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full object-contain  bg-sky-400"
          >
            <video
              autoPlay
              loop
              muted
              src="/src/assets/vidio/deepset-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full object-contain bg-zinc-900"
          >
            <video
              autoPlay
              loop
              muted
              src="/src/assets/vidio/umault-169.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products