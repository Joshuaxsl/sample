import React from "react";
const OurLocation = () => {
  return (
    <div className="h-screen bg-[#2B343D] text-white pt-20">
      <div className="space-y-12">
        <h1 className="mx-auto uppercase text-2xl lg:text-3xl w-fit text-center font-serif font-bold px-5 py-3 bg-[#EC4034] rounded-full ">
          Where to find us
        </h1>
        <div className="flex justify-center items-center">
          <img
            className="px-5"
            src={require("./images/mylocation.png")}
            alt="Display"
            style={{ width: "800px" }}
          />
        </div>
        <div className="text-center">
          <h1 className="font-serif text-2xl">Becuran,Sta.Rita,Pampanga</h1>
          <p>Philippines</p>
          <p>+6395-065-0068</p>
          <p>Info@company.com</p>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
