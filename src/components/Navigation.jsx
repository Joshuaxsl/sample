import React from "react";
import { FaBars } from "react-icons/fa";
const Navigation = () => {
  return (
    <div id="Navigation" className="Navigation">
      <div className="header">
      <nav className="flex justify-between items-center p-5   bg-[#EC4034] text-white">
        <div>
          <h1 className="text-3xl sm:text-5xl font-serif ml-10">Satu</h1>
        </div>
        <div className="md:block hidden">
          <ul className="flex md:space-x-8 mr-10">
            <li className="border-2 border-white p-2 text-base  sm:text-xl">
              About
            </li>
            <li className="p-2 text-base sm:text-xl">
              Services
            </li>
            <li className="p-2 text-base sm:text-xl">
              Contact
            </li>
          </ul>
        </div>
        <div className="md:hidden block">
          <FaBars style={{fontSize:"30px"}}/>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navigation;
