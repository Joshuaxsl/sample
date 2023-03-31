import Fade from "react-reveal/Fade";
import { FaBars } from "react-icons/fa";
const Navigation = () => {
  return (
    <div id="Navigation" className="Navigation ">
      <div className="header">
        <nav className="flex justify-between items-center p-5   bg-[#EC4034] text-white">
          <div>
            <Fade top delay={500}>
              <h1 className="text-3xl sm:text-5xl font-serif ml-10">Satu</h1>
            </Fade>
          </div>
          <div className="md:block hidden">
            <ul className="flex md:space-x-8 mr-10">
              <Fade top delay={1000}>
                <li className="border-2 border-white p-2 text-base  sm:text-xl">
                  About
                </li>
              </Fade>
              <Fade top delay={1100}>
                <li className="p-2 text-base sm:text-xl">Services</li>
              </Fade>
              <Fade top delay={1200}>
                <li className="p-2 text-base sm:text-xl">Contact</li>
              </Fade>
            </ul>
          </div>

          <div className="md:hidden block">
            <button>
              <FaBars style={{ fontSize: "30px" }} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
