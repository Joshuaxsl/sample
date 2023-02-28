import React from "react";

const Hero = () => {
  return (
    <div className="h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center text-white relative flex justify-center items-center">
      {/* Content */}
      <div className="absolute bottom-24 xl:bottom-20 ">
        <div>
          <h1 className="uppercase font-bold text-2xl sm:text-3xl lg:text-5xl text-center font-serif">
            Start your day with a smile
          </h1>

          <div className="flex justify-center items-center pt-10">
            <div className="border-b-4 border-white w-10/12  xl:w-8/12"></div>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-center text-2xl p-5 xl:w-8/12 font-serif">
              Here goes the tagline which describes shortly about the company
              and also a lead on on for the next info about the company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
