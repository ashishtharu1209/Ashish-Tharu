import React from "react";
import { FaHome,FaPhone,FaUser,FaUserGraduate,FaCode,FaFolder,FaHistory} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left nav_items">⎡Ashish Tharu⎦</div>
        <div className="right">
          <a href="#home" className="nav_items">
            Home
                <FaHome/>
          </a>
          <a href="#experience" className="nav_items">
            Experience<FaHistory/>
          </a>
          <a href="#skills" className="nav_items">
            Skills<FaCode/>
          </a>
          <a href="#projects" className="nav_items">
            Projects<FaFolder/>
          </a>
          <a href="#contact" className="nav_items">
            Contact<FaPhone/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
