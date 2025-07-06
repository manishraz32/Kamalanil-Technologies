import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image 113.png";
import company_logo from "../assets/company_logo.png";
import Arrow_down from "../assets/Arrow down filled triangle.png";
import image117 from "../assets/image 117.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="top-0 z-50 sticky bg-[#12161F] py-4 md:py-[26px] text-white section-padding-x">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="md:flex items-center gap-4">
            <img src={company_logo} alt="company_logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden relative md:flex items-center gap-[clamp(16px,4.17vw,80px)]">
            <a
              href="#home"
              className="font-medium text-20px hover:text-[#00FFCA] cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium text-20px hover:text-[#00FFCA] cursor-pointer"
            >
              About Us
            </a>

            {/* Courses Dropdown */}
            <div className="relative">
              <span
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 font-medium text-20px hover:text-[#00FFCA] cursor-pointer"
              >
                Courses ▼
              </span>

              {isDropdownOpen && (
                <div className="top-full left-0 z-50 absolute bg-white shadow-md mt-2 py-2 rounded-md w-[208.775px] text-black">
                  <Link
                    to="/sdet"
                    className="block px-4 font-bold text-[14px] hover:text-[#009D7C] leading-[32.073px]"
                  >
                    SDET
                  </Link>
                  <hr className="my-1 border-[#12161F] border-t" />
                  <Link
                    to="/fullstack"
                    className="block px-4 font-bold text-[14px] hover:text-[#009D7C] leading-[32.073px]"
                  >
                    Full Stack Development
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="font-medium text-20px hover:text-[#00FFCA] cursor-pointer"
            >
              Contact Us
            </a>

            <button className="inline-flex flex-col justify-center items-center bg-[#00FFCA] px-[clamp(12px,1.5vw,21.6px)] py-[14.4px] border-[#00FFCA] border-[1.8px] rounded-[50px] font-semibold text-20px text-black">
              Apply Now
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex justify-end">
            {!isMobileMenuOpen ? (
              <img
                src={image1}
                alt="Mobile Logo"
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-10 h-10 object-contain cursor-pointer"
              />
            ) : (
              <div>
                <img
                  src={image117}
                  alt="Close Menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 object-contain cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden top-[70px] left-0 z-40 absolute bg-white shadow-md rounded-b-lg w-full">
          <div className="flex flex-col gap-2 px-4 py-2 font-semibold text-[16px] text-black">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 pb-2 border-b"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="pb-2 border-b"
            >
              About us
            </a>

            {/* Courses Dropdown */}
            <div className="pb-2 border-b">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
               
                className="flex justify-between items-center cursor-pointer"
              >
                <span>Courses</span>
                <span
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <img src={Arrow_down} alt="dropdown" className="w-4 h-4" />
                </span>
              </div>
              {isDropdownOpen && (
                <div className="flex flex-col gap-2 mt-2 font-medium text-[14px]">
                  <Link
                    to="/sdet"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:underline"
                  >
                    SDET
                  </Link>
                  <Link
                    to="/fullstack"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:underline"
                  >
                    Full Stack Development
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className=""
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
