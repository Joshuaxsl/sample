import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-screen bg-[#3A434C] pt-20 text-white">
      <div className="space-y-24">
        <h1 className="text-white mx-auto uppercase text-2xl lg:text-3xl w-fit text-center font-serif font-bold px-5 py-3 bg-[#EC4034] rounded-full">
          Get in touch
        </h1>
        <h1 className="text-[3rem] text-center">All rights reserved @ JoshuaSantos</h1>
        <div className="flex text-3xl justify-center items-center space-x-5">
            <BsGithub />
            <BsTwitter />
            <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
