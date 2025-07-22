import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import company_logo from "../../assets/Frame 4.svg";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import whatsapp from "../../assets/images/whatsapp.png";
import smallEmailSvg from "../../assets/images/smallEmailSvg.svg";
import smallMapIcon from "../../assets/images/smallMapIcon.svg";
import smallPhoneSvg from "../../assets/images/smallPhoneSvg.svg";
import ArrowDown from "../../assets/Arrow down sign to navigate.png";

const FreeDemoForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    timeSlot: "",
    duration: "",
    language: {
      english: true,
      hindi: false,
    },
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "english" || name === "hindi") {
      setFormData((prev) => ({
        ...prev,
        language: {
          ...prev.language,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add submission logic here
  };

  const [dropdowns, setDropdowns] = useState({
    timeSlotOpen: false,
    backgroundOpen: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const selectOption = (key, value) => {
    handleChange({ target: { name: key, value } });
    setDropdowns((prev) => ({ ...prev, [`${key}Open`]: false }));
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="flex justify-center bg-[#FFFFFF] md:bg-[#dbe2e3] md:px-[clamp(16px,6.53vw,120px)] md:py-10 pb-20 min-h-screen overflow-x-hidden">
        <div className="md:relative md:bg-white md:shadow-lg md:pb-10 md:rounded-[2rem] md:w-full md:xl:h-[clamp(500px,46.66vw,2015.6835px)]">
          <div className="flex flex-col items-center gap-3 md:gap-0 bg-[linear-gradient(to_right,_#EAFDFB,_#DAF6F7)] md:bg-[linear-gradient(to_right,_#EAFDFB,_#DAF6F7)] px-4 pt-9 md:pt-0 pb-10.5 md:pb-0 md:rounded-[2rem] rounded-b-[2rem] md:h-[clamp(300px,24.88vw,716.68px)] text-center">
            <h2 className="items-center md:mt-4 xl:mt-0 md:pt-2 w-[76%] md:w-full font-['Montserrat'] font-bold text-[36px] text-gray-900 md:text-[clamp(20px,2.77vw,120px)] leading-[43px] md:leading-[clamp(40px,5.55vw,240px)]">
              Get 3–5 Days of Free Live Demo Classes
            </h2>
            <p className="w-[82%] md:w-[80%] font-['Montserrat'] font-normal text-[#1216F] md:text-[clamp(16px,1.25vw,54px)] text-center md:leading-[clamp(18px,2.01vw,87px)]">
              Experience real course content through live sessions with
              instructors, interactive doubt-clearing, and flexible time
              slots—absolutely free.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:top-[160px] 2xl:top-[200px] 4xl:top-[250px] left-1/2 md:left-1/2 z-10 md:absolute relative gap-3 md:gap-4 grid grid-cols-1 md:grid-cols-2 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.15)] md:shadow-[0_4px_30px_rgba(33,180,149,0.4)] mt-9 md:mt-0 md:p-3 px-6 py-3 rounded-[2rem] w-[90%] md:w-[75%] overflow-visible -translate-x-1/2 md:-translate-x-1/2"
          >
            {/* Full Name */}
            <div>
              <label className="block font-semibold text-[13px] md:text-[clamp(10px,1.11vw,39px)] leading-[46px] md:leading-[clamp(30px,2.971vw,128.3616px)]">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-[#F4F4F4] px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 w-full font-semibold text-[#777777] text-[13px] md:text-[clamp(10px,0.97vw,42px)] leading-[46px]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold md:text-[clamp(10px,1.11vw,39px)] md:leading-[clamp(30px,2.971vw,128.3616px)]">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#F4F4F4] px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 w-full font-semibold text-[#777777] text-[13px] md:text-[clamp(10px,0.97vw,42px)] leading-[46px]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold md:text-[clamp(10px,1.11vw,39px)] md:leading-[clamp(30px,2.971vw,128.3616px)]">
                Phone no. *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#F4F4F4] px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 w-full font-semibold text-[#777777] text-[13px] md:text-[clamp(10px,0.97vw,42px)] leading-[46px]"
                required
              />
            </div>

            {/* Course */}
            <div className="relative">
              <label className="block font-semibold md:text-[clamp(10px,1.11vw,39px)] md:leading-[clamp(30px,2.971vw,128.3616px)]">
                Course *
              </label>
              <div
                onClick={() => toggleDropdown("courseOpen")}
                className="flex justify-between items-center bg-[#F4F4F4] px-4 py-2 border border-gray-200 rounded-lg cursor-pointer"
              >
                <span
                  className={formData.course ? "text-black" : "text-gray-500"}
                >
                  {formData.course || "Select course"}
                </span>
                <span
                  className={`ml-2 transition-transform duration-300 ${
                    dropdowns.courseOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={ArrowDown} alt="arrow" className="w-[17px] md:w-[19px] h-[17px] md:h-[19px]" />
                </span>
              </div>

              {dropdowns.courseOpen && (
                <ul className="z-10 absolute bg-[#F4F4F4] shadow-md mt-1 px-2.5 border border-gray-300 rounded-b-lg w-full">
                  {["SEDT", "FullStack Developer"].map((course) => (
                    <li
                      key={course}
                      onClick={() => selectOption("course", course)}
                      className={`cursor-pointer hover:text-[#00b39f] border-b border-gray-500 last:border-b-0 md:text-[clamp(12px,0.97vw,28px)] md:leading-[clamp(28px,2.97vw,42.78px)] font-bold ${
                        formData.course === course
                          ? "font-semibold text-[#00b39f]"
                          : ""
                      }`}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Preferred Demo Slot */}
            <div className="relative">
              <label className="block font-semibold md:text-[clamp(10px,1.11vw,39px)] md:leading-[clamp(30px,2.971vw,128.3616px)]">
                Preferred demo slot *
              </label>
              <div
                onClick={() => toggleDropdown("timeSlotOpen")}
                className="flex justify-between items-center bg-[#F4F4F4] px-4 py-2 border border-gray-200 rounded-lg cursor-pointer"
              >
                <span
                  className={formData.timeSlot ? "text-black" : "text-gray-500"}
                >
                  {formData.timeSlot || "Select time slot"}
                </span>
                <span
                  className={`ml-2 transition-transform duration-300 ${
                    dropdowns.timeSlotOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={ArrowDown} alt="arrow" className="w-[17px] md:w-[19px] h-[17px] md:h-[19px]" />
                </span>
              </div>

              {dropdowns.timeSlotOpen && (
                <ul className="z-10 absolute bg-[#F4F4F4] shadow-md mt-1 px-2.5 border border-gray-300 rounded-b-lg w-full">
                  {[
                    "7:00am - 8:30am",
                    "9:00am - 10:30am",
                    "8:00pm - 9:30pm",
                  ].map((slot) => (
                    <li
                      key={slot}
                      onClick={() => selectOption("timeSlot", slot)}
                      className={`cursor-pointer hover:text-[#00b39f] border-b border-gray-500 last:border-b-0 md:text-[clamp(12px,0.97vw,28px)] md:leading-[clamp(28px,2.97vw,42.78px)] font-bold ${
                        formData.timeSlot === slot
                          ? "font-semibold text-[#00b39f]"
                          : ""
                      }`}
                    >
                      {slot}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Background */}
            <div className="relative">
              <label className="block font-semibold md:text-[clamp(10px,1.11vw,39px)] md:leading-[clamp(30px,2.971vw,128.3616px)]">
                Background *
              </label>
              <div
                onClick={() => toggleDropdown("backgroundOpen")}
                className="flex justify-between items-center bg-[#F4F4F4] px-4 py-2 border border-gray-200 rounded-lg cursor-pointer"
              >
                <span
                  className={formData.duration ? "text-black" : "text-gray-500"}
                >
                  {formData.duration || "Select your background"}
                </span>
                <span
                  className={`ml-2 transition-transform duration-300 ${
                    dropdowns.backgroundOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={ArrowDown} alt="arrow" className="w-[17px] md:w-[19px] h-[17px] md:h-[19px]" />
                </span>
              </div>

              {dropdowns.backgroundOpen && (
                <ul className="z-10 absolute bg-[#F4F4F4] shadow-md mt-1 px-2.5 border border-gray-300 rounded-b-lg w-full max-h-40 overflow-auto">
                  {["Student", "Recent Graduate", "Working Professional"].map(
                    (bg) => (
                      <li
                        key={bg}
                        onClick={() => selectOption("duration", bg)}
                        className={`cursor-pointer hover:text-[#00b39f] border-b border-gray-500 last:border-b-0 md:text-[clamp(12px,0.97vw,28px)] md:leading-[clamp(28px,2.97vw,42.78px)] font-bold ${
                          formData.duration === bg
                            ? "text-[#00b39f] font-semibold"
                            : ""
                        }`}
                      >
                        {bg}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            {/* Language and Message */}
            <div className="flex md:flex-row flex-col gap-6 col-span-1 md:col-span-2">
              <div className="w-full md:w-1/2">
                <label className="block font-semibold md:text-[clamp(10px,1.11vw,39px)] md:leading-[clamp(30px,2.971vw,128.3616px)]">
                  Preferred Language *
                </label>
                <div className="flex items-center gap-4">
                  <div className="bg-[#F4F4F4] px-4 py-2 rounded-lg">
                    <label className="flex flex-row justify-between items-center md:w-[clamp(16px,13.89vw,185px)]">
                      <span className="ml-2">English</span>
                      <input
                        type="checkbox"
                        name="english"
                        checked={formData.language.english}
                        onChange={handleChange}
                        className="w-5 h-5 accent-black"
                      />
                    </label>
                  </div>
                  <div className="bg-[#F4F4F4] px-4 py-2 rounded-lg">
                    <label className="flex flex-row justify-between items-center md:w-[clamp(16px,13.89vw,185px)]">
                      <span className="ml-2">Hindi</span>
                      <input
                        type="checkbox"
                        name="hindi"
                        checked={formData.language.hindi}
                        onChange={handleChange}
                        className="w-5 h-5 accent-black"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label className="block font-semibold md:text-[clamp(10px,1.11vw,39px)] md:leading-[clamp(30px,2.971vw,128.3616px)]">
                  Message *
                </label>
                <input
                  type="text"
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#F4F4F4] px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 w-full"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center col-span-1 md:col-span-2">
              <button
                type="submit"
                className="bg-[#00f5c6] hover:bg-[#00e6b7] shadow md:px-50 py-3 rounded-lg font-bold text-black transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="flex justify-center bg-[rgb(47,54,69)] px-4 py-10 md:pt-[clamp(10px,3.125vw,45px)] md:pr-[clamp(94px,3.40vw,49px)] pb-20 md:pl-[clamp(94px,8.19vw,236px)]">
        <div className="flex md:flex-row flex-col justify-between w-full">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:w-[25%] text-center md:text-start">
            <div className="flex items-center gap-2">
              <img
                src={company_logo}
                alt="Logo"
                className="md:w-[181.619px] md:h-[47.4427px]"
              />
            </div>
            <p className="w-[75%] md:w-[120%] text-[#fff] text-[12px] md:text-[clamp(12px,1.04vw,30px)] text-center md:text-start">
              Empowering future-ready professionals through practical tech
              training and real-world skills.
            </p>
            <div className="hidden md:flex gap-3 mt-4">
              <a
                href="#"
                className="flex justify-center items-center bg-[#21B495] rounded-full w-[50px] h-[50px]"
              >
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center bg-[#21B495] rounded-full w-[50px] h-[50px]"
              >
                <img src={instagram} alt="Instagram" className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center bg-[#21B495] rounded-full w-[50px] h-[50px]"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-0 text-center">
            <h3 className="md:mb-5 font-[Montserrat] font-bold text-[16px] text-white md:text-[clamp(12px,1.38vw,40px)] text-center">
              Quick Links
            </h3>
            <ul className="space-y-4 font-medium text-[#00FFCA] text-sm">
              <li className="md:text-[clamp(12px,1.041vw,30px)]">
                <a href="#">Home</a>
              </li>
              <li className="md:text-[clamp(12px,1.041vw,30px)]">
                <a href="#">About</a>
              </li>
              <li className="md:text-[clamp(12px,1.041vw,30px)]">
                <a href="#">Courses</a>
              </li>
              <li className="md:text-[clamp(12px,1.041vw,30px)]">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info  */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-center">
            <h3 className="font-[Montserrat] font-bold text-[16px] text-white md:text-[clamp(16px,1.38vw,40px)]">
              CONTACT
            </h3>

            <div className="flex md:flex-row flex-col items-center md:items-start">
              <div className="flex flex-col">
                <div className="flex md:flex-row flex-col items-center md:items-start gap-2">
                  <img
                    src={smallMapIcon}
                    className="md:mt-2 w-[20px] h-[16px]"
                  />
                  <p className="font-bold text-[12px] text-white md:text-[clamp(12px,1.38vw,40px)]">
                    Location
                  </p>
                </div>
                <p className="font-medium text-[#21B495] text-[12px] md:text-[clamp(12px,1.11vw,32.6px)]">
                  Pune, Maharashtra
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col">
                <div className="flex md:flex-row flex-col items-center md:items-start gap-2">
                  <img
                    src={smallPhoneSvg}
                    className="md:mt-2 w-[20px] h-[16px]"
                  />
                  <p className="font-bold text-[12px] text-white md:text-[clamp(12px,1.38vw,40px)]">
                    Phone
                  </p>
                </div>
                <p className="font-medium text-[#21B495] text-[12px] md:text-[clamp(12px,1.11vw,32.6px)]">
                  +91-9322374766
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col">
                <div className="flex md:flex-row flex-col items-center md:items-start gap-2">
                  <img
                    src={smallEmailSvg}
                    className="md:mt-2 w-[20px] h-[16px]"
                  />
                  <p className="font-bold text-[12px] text-white md:text-[clamp(12px,1.38vw,40px)]">
                    Email
                  </p>
                </div>
                <p className="font-medium text-[#21B495] text-[12px] md:text-[clamp(12px,1.11vw,32.6px)]">
                  info@kamlaniltech.com
                </p>
              </div>
            </div>
          </div>

          <div className="md:hidden flex flex-col items-center space-y-4">
            <h3 className="font-[Montserrat] font-bold text-[16px] text-white text-center">
              Social Media
            </h3>
            <div className="flex flex-row gap-3">
              <div className="flex justify-center items-center bg-black rounded-full w-[24px] h-[24px]">
                <img src={linkedin} className="w-[16px] h-[16px]" />
              </div>
              <div className="flex justify-center items-center bg-black rounded-full w-[24px] h-[24px]">
                <img src={instagram} className="w-[16px] h-[16px]" />
              </div>
              <div className="flex justify-center items-center bg-black rounded-full w-[24px] h-[24px]">
                <img src={whatsapp} className="w-[16px] h-[16px]" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FreeDemoForm;
