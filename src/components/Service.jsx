import React from "react";
import { FaBroadcastTower } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import { BsArrowUpRightSquare } from "react-icons/bs";
const Service = () => {
  return (
    <div className="px-10 md:px-20 xl:px-40 pt-14 bg-[#191C21] text-white">
      <div className="py-5">
        {/* Top content */}
        <h1 className="text-white mx-auto uppercase text-2xl lg:text-3xl w-fit text-center font-serif font-bold px-5 py-3 bg-[#EC4034] rounded-full">
          What do we do
        </h1>
      </div>
      {/* mid content */}
      <div className="font-serif lg:w-10/12 mx-auto pt-10 text-center">
        In the example above, we've added a border radius of 10 pixels to the
        img tag. We've set the borderRadius CSS property to "10px". This means
        that the corners of the image will be rounded.
      </div>
      {/* Grid */}
      <div className="grid sm:grid-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-10 py-14 xl:py-20">
        {/* Grid 1 */}
        <div className="flex flex-col justify-center items-center border-2 py-10 px-5 space-y-5 hover:-translate-y-5 cursor-pointer group hover:bg-[#EC4034] transition ease-in duration-100 leading-10">
          <div className="">
            <FaBroadcastTower style={{ fontSize: "8rem" }} />
          </div>
          <h1 className="uppercase text-red-500 text-2xl pb-5 font-serif group-hover:text-white">
            Global search
          </h1>
          <div className="relative">
            Note that you can adjust the border color and width to your
            preference by modifying the border CSS property.
            <div className="absolute left-40 bottom-2 text-xl group-hover:scale-150">
              <BsArrowUpRightSquare />
            </div>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="flex flex-col justify-center items-center border-2 py-10 px-5 space-y-5  hover:-translate-y-5 cursor-pointer group hover:bg-[#EC4034] transition ease-in duration-100 leading-10">
          <FaDesktop style={{ fontSize: "8rem" }} />
          <h1 className="uppercase text-red-500 text-2xl pb-5 font-serif group-hover:text-white">
            Quality Service
          </h1>
          <div className="relative">
            Note that you can adjust the border color and width to your
            preference by modifying the border CSS property.
            <div className="absolute left-40 bottom-2 text-xl group-hover:scale-150">
              <BsArrowUpRightSquare />
            </div>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="flex flex-col justify-center items-center border-2 py-10 px-5 space-y-5  hover:-translate-y-5 cursor-pointer group hover:bg-[#EC4034] transition ease-in duration-100 leading-10">
          <SiAltiumdesigner style={{ fontSize: "8rem" }} />
          <h1 className="uppercase text-red-500 text-2xl pb-5 font-serif group-hover:text-white">
            creative design
          </h1>
          <div className="relative">
            Note that you can adjust the border color and width to your
            preference by modifying the border CSS property.
            <div className="absolute left-40 bottom-2 text-xl group-hover:scale-150">
              <BsArrowUpRightSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
