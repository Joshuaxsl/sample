import React from "react";
import profile from "./images/profile.png";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className=" bg-[#363940] py-10 flex justify-center items-center  text-white">
      <Fade bottom>
      <div className="container flex flex-col xl:flex-row justify-center items-center leading-8">
        {/* Right content */}
        <div className="p-10">
          <img src={profile} alt="Profile" style={{ width: "300px",  border: '10px solid blue-gray',borderRadius: '50%' }} />
        </div>
        {/* Left content */}
        <div className="w-11/12 xl:w-4/12 ">
          {/* 1st */}
          <div>
            <h1 className="mx-auto uppercase text-2xl lg:text-3xl w-fit text-center font-serif font-bold px-5 py-3 bg-[#EC4034] rounded-full ">Who we are</h1>
          </div>
          {/* 2nd */}
          <div className="py-8 text-left font-serif">
            Import the image file into your component file using the import
            statement. For example, if you have an image file named
            "example.png" in your src folder, you can import it like this:
          </div>
          {/* 3rd */}
          <div className="text-left font-serif">
            Import the image file into your component file using the import
            statement. For example, if you have an image file named
            "example.png" in your src folder, you can import it like this:
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default About;
