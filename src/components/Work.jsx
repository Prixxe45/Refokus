import React, { useState } from 'react'
import { useMotionValueEvent, useScroll } from "motion/react";
function Work() {

const [images, setimages] = useState([
  {
    url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d713cb10965e8dbdee18_YIR%202021%20-%204%203.webp",
    top: "50%",
    left: "50%",
    isActive: false,
  },
  {
    url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67b89d9110d0a5d6615f273a_umaultAwards.png",
    top: "56%",
    left: "44%",
    isActive: false,
  },
  {
    url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d84ab75f918dc8617448_YIR%202022%20-4%204.webp",
    top: "45%",
    left: "56%",
    isActive: false,
  },
  {
    url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac97237a8c9515ca43ccf8_YIR2021-thumbnail_B-4_3.webp",
    top: "60%",
    left: "53%",
    isActive: false,
  },
  {
    url: "https://i.pinimg.com/736x/b1/60/01/b16001955a118673074ec76efcbf4571.jpg",
    top: "43%",
    left: "40%",
    isActive: false,
  },
]);

const { scrollYProgress } = useScroll();

scrollYProgress.on("change", (data) => {
  function imageShow(arr){
   setimages((prev) => 
prev.map((item,index) =>
  arr.indexOf(index) === -1
  ?{...item, isActive: false}
  :{...item, isActive: true}
)
);   
  }
  switch (Math.floor(data * 100)) {
    case 0:
      imageShow([]);
      break;
    case 1:
      imageShow([0]);
      break;
    case 2:
      imageShow([0,1]);
      break;
    case 3:
      imageShow([0,1,2]);
      break;
    case 4:
      imageShow([0,1,2,3]);
      break;
    case 5:
      imageShow([0, 1,2,3,4]);
      break;
  }
})
  return (
    <div className="w-full mt-20">
      <div className="relative max-w-screen-xl mx-auto text-center ">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full  ">
          {images.map(
            (elem, index) => 
          elem.isActive && (
            <img
              className="w-100 absolute rounded-md -translate-y-[50%] -translate-x-[50%]"
              src={elem.url}
              style={{ top: elem.top, left: elem.left }}
              alt=""
            />
          )
          )}
        </div>
      </div>
     
    </div>
  );
}

export default Work