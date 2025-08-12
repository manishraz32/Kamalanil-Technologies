import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../assets/image 113.svg";
import company_logo from "../assets/Frame 4.svg";
import Arrow_down from "../assets/Arrow down filled triangle.png";
import image117 from "../assets/image 117.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigate = useNavigate();

  // Outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTimeout(() => {
          setIsDropdownOpen(false);
        }, 150);
      }

      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleNavigation = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="top-0 z-100 sticky bg-[#12161F] py-2.5 md:py-6 text-white section-padding-x ">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="md:flex items-center gap-4">
            <img
              src={company_logo}
              alt="company_logo"
              onClick={() => handleNavigation("#home")}
              className="w-[86px] md:w-[181.619px] h-[22.4337px] md:h-[47.4427px] object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden relative md:flex items-center gap-[clamp(16px,4.17vw,80px)]">
            <a
              onClick={() => handleNavigation("#home")}
              className="font-medium text-20px hover:text-[#00FFCA] cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleNavigation("about")}
              className="font-medium text-20px hover:text-[#00FFCA] cursor-pointer"
            >
              About Us
            </a>

            <div className="relative" ref={dropdownRef}>
              <span
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 md:gap-2 font-medium text-[20px] hover:text-[#00FFCA] cursor-pointer"
              >
                Courses
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 9" fill="none" className="transition-colors duration-300 mt-0.5 ">
                  <path d="M7.65918 8.23633L0.15918 0.736328H15.1592L7.65918 8.23633Z" fill="currentColor" />
                </svg>
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
              onClick={() => handleNavigation("contact")}
              className="font-medium text-20px hover:text-[#00FFCA] cursor-pointer"
            >
              Contact Us
            </a>

            <button onClick={() => handleNavigation("contact")} className="inline-flex flex-col justify-center items-center bg-[#00FFCA]  cursor-pointer hover:bg-[#008368] px-[clamp(12px,1.5vw,21.6px)] py-[14.4px]  rounded-[50px] font-semibold text-18px text-black">
              Apply Now
            </button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex justify-end" ref={hamburgerRef}>
            {!isMobileMenuOpen ? (
              <img
                src={image1}
                alt="Mobile Logo"
                onClick={() => setIsMobileMenuOpen(true)}
                className="brightness-105 w-6 h-6 object-contain cursor-pointer contrast-110"
              />
            ) : (
              <img
                src={image117}
                alt="Close Menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 object-contain cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Fixed) */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden top-[70px] left-0 z-40 fixed bg-white shadow-md rounded-b-lg w-full"
          ref={mobileMenuRef}
        >
          <div className="flex flex-col gap-2 px-4 py-2 font-semibold text-[16px] text-black">
            <a
              onClick={() => handleNavigation("#home")}
              className="mt-2 pb-2 border-b"
            >
              Home
            </a>
            <a
              onClick={() => handleNavigation("about")}
              className="pb-2 border-b"
            >
              About us
            </a>

            <div className="pb-2 border-b">
              <div
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>Courses</span>
                {/* <img
                  src={Arrow_down}
                  alt="dropdown"
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isMobileDropdownOpen ? "rotate-180" : ""
                  }`}
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                  <path d="M7.65918 8.23633L0.15918 0.736328H15.1592L7.65918 8.23633Z" fill="#121111ff" />
                </svg>
              </div>

              {isMobileDropdownOpen && (
                <div className="flex flex-col gap-2 mt-2 font-medium text-[14px]">
                  <Link
                    to="/sdet"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="hover:text-[#00FFCA]"
                  >
                    SDET
                  </Link>
                  <Link
                    to="/fullstack"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className="hover:text-[#00FFCA]"
                  >
                    Full Stack Development
                  </Link>
                </div>
              )}
            </div>

            <a onClick={() => handleNavigation("contact")}>Contact us</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
