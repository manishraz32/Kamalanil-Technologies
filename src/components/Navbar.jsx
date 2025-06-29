import React from "react";
import image1 from "../assets/image 113.png";
import company_logo from "../assets/company_logo.png";     

const Navbar = () => {
  return (
    <nav className="bg-[#12161F] sticky top-0 section-padding-x py-4 md:py-[26px] text-white">
      <div className="flex justify-between items-center w-full">
        <div className="md:flex items-center gap-4">
          <img src={company_logo} alt="company_logo" />
        </div>
        
        <div className="hidden md:flex items-center gap-[clamp(16px,4.17vw,80px)]">
          <span className="text-20px font-medium cursor-pointer">Home</span>
          <span className="text-20px font-medium cursor-pointer">About Us</span>
          <span className="text-20px font-medium cursor-pointer">Courses</span>
          <span className="text-20px font-medium cursor-pointer">Contact Us</span>
          <button className="text-20px inline-flex flex-col justify-center items-center bg-[#00FFCA] px-[clamp(12px,1.5vw,21.6px)] py-[14.4px] border-[#00FFCA] border-[1.8px] rounded-[50px] font-semibold text-black">
            Apply Now
          </button>
        </div>
         <div className="md:hidden flex justify-end w-full">
          <img
            src={image1}
            alt="Mobile Logo"
            className="w-10 h-10 object-contain"
          />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
