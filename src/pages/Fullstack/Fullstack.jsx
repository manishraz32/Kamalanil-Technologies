import React from "react";
import image110 from "../../assets/image 110 (1).png";
import image79 from "../../assets/image 79.png";
import image111 from "../../assets/image 111-pica.png";
import image86 from "../../assets/image 86.png";
import image87 from "../../assets/image 87.png";
import image88 from "../../assets/image 88.png";
import image89 from "../../assets/image 89.png";
import Arowdwon from "../../assets/Arrow down sign to navigate.png";
import image61 from "../../assets/image 61.png";
import image66 from "../../assets/image 66.png";
import image65 from "../../assets/image 65.png";
import image114 from "../../assets/image 114.png";
import gh from "../../assets/gh.svg";

const Fullstack = () => {
  return (
    <>
      <div className="flex lg:flex-row 2xl:flex-row 3xl:flex-row xl:flex-row flex-col gap-15 section-padding">
        <div className="flex flex-col gap-[clamp(10px,2.083vw,60px)]">
          <div className="flex flex-col gap-2">
            <div className="font-montserrat font-bold text-[#12161F] text-[clamp(28px,8.73vw,36px)] md:text-[clamp(36px,3.47vw,100px)] leading-[clamp(36px,11.28vw,46.482px)] md:leading-[clamp(46px,4.375vw,126px)]">
              <h1>Build It All.Be a </h1>
              <h1>
                <span className="text-[#21B495]"> Full Stack</span> Pro
              </h1>
            </div>

            <p className="font-montserrat font-medium text-[#575757] text-[clamp(14px,3.89vw,16px)] md:text-[clamp(16px,1.319vw,38px)] leading-[clamp(21px,1.67vw,24px)] md:leading-[clamp(24px ,2.02vw,29px)]">
              Our programs are delivered through flexible online training, with
              offline batches launching soon. Designed for beginners and
              aspiring professionals, our courses build strong foundations in
              both core concepts and technical skills—no prior coding experience
              required.
            </p>
          </div>
          <div>
            <ul className="flex flex-col justify-center pl-6 font-montserrat font-bold text-[#12161F] text-[clamp(16px,4.367vw,18px)] md:text-[clamp(16px,1.39vw,40px)] leading-[clamp(27px,7.28vw,30px)] md:leading-[clamp(27px,2.084vw,60px)] list-disc">
              <li>HTML, CSS & JavaScript</li>
              <li>React.js</li>
              <li>Node.js + Express.js</li>
              <li>MongoDB / MySQL</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <button className="flex flex-col justify-center items-center gap-[12.91px] md:gap-[clamp(8px,1vw,12.91px)] bg-[#00FFCA] px-[30.988px] md:px-[clamp(20px,5vw,30.98px)] py-[20.659px] md:py-[clamp(12px,3vw,20.66px)] border-[#00FFCA] border-[2.582px] rounded-[48.308px] md:rounded-[clamp(24px,5vw,48.3px)] w-full h-[56px] md:h-[clamp(50px,5vw,64.73px)] font-semibold text-[clamp(17px,4.917vw,20.659px)] text-black md:text-[clamp(20px,1.39vw,40.659px)] leading-[clamp(25.5px,2.6vw,30.988px)] md:leading-[clamp(30.988px,2.6vw,60.988px)]">
            Apply now
          </button>

          <div className="gap-5 grid grid-cols-2 bg-white text-[#12161F]">
            <div className="flex items-start gap-3">
              <img
                src={image61}
                alt="Rupee"
                className="w-[clamp(25px,7.73vw,31.878px] md:w-[clamp(25px,2.43vw,70px]] h-[clamp(25px,7.73vw,31.878px] md:h-[clamp(25px,2.43vw,70px]"
              />
              <div>
                <p className="font-inter font-bold text-[#12161F] text-[clamp(14px,3.77vw,15.55px)] md:text-[clamp(15.55px,1.528vw,44px)] leading-[clamp(22.3px,5.98vw,24.67px)] md:leading-[clamp(24.67px,1.713vw,49.34px)]">
                  Get 65% OFF
                </p>
                <p className="font-inter font-normal text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)] leading-[clamp(14px,5.98vw,24.67px)] md:leading-[clamp(24.67px,2.22vw,64.073px)]">
                  Starting from ₹4,000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pl-6 border-[#00775F] border-l-[3px]">
              <img
                src={image65}
                alt="Calendar"
                className="w-[clamp(25px,7.73vw,31.878px] md:w-[clamp(25px,2.43vw,70px]] h-[clamp(25px,7.73vw,31.878px] md:h-[clamp(25px,2.43vw,70px]"
              />
              <div>
                <p className="font-inter font-bold text-[#12161F] text-[clamp(14px,3.77vw,15.55px)] md:text-[clamp(15.55px,1.528vw,44px)] leading-[clamp(22.3px,5.98vw,24.67px)] md:leading-[clamp(24.67px,1.713vw,49.34px)]">
                  3 Months
                </p>
                <p className="font-inter font-normal text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)] leading-[clamp(14px,5.98vw,24.67px)] md:leading-[clamp(24.67px,2.22vw,64.073px)]">
                  Course Duration
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img
                src={image114}
                alt="Placement"
                className="w-[clamp(25px,7.73vw,31.878px] md:w-[clamp(25px,2.43vw,70px]] h-[clamp(25px,7.73vw,31.878px] md:h-[clamp(25px,2.43vw,70px]"
              />
              <div>
                <p className="font-inter font-bold text-[#12161F] text-[clamp(14px,3.77vw,15.55px)] md:text-[clamp(15.55px,1.528vw,44px)] leading-[clamp(22.3px,5.98vw,24.67px)] md:leading-[clamp(24.67px,1.713vw,49.34px)]">
                  100% Placement
                </p>
                <p className="font-inter font-normal text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)] leading-[clamp(14px,5.98vw,24.67px)] md:leading-[clamp(24.67px,2.22vw,64.073px)]">
                  Placement Assurance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pl-6 border-[#00775F] border-l-[3px]">
              <img
                src={image66}
                alt="Certificate"
                className="mt-1 w-[clamp(25px,7.73vw,31.878px] md:w-[clamp(25px,2.43vw,70px]] h-[clamp(25px,7.73vw,31.878px] md:h-[clamp(25px,2.43vw,70px]"
              />
              <div>
                <p className="font-inter font-bold text-[#12161F] text-[clamp(14px,3.77vw,15.55px)] md:text-[clamp(15.55px,1.528vw,44px)] leading-[clamp(22.3px,5.98vw,24.67px)] md:leading-[clamp(24.67px,1.713vw,49.34px)]">
                  Full Stack Development
                </p>

                <p className="font-inter font-normal text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)] leading-[clamp(14px,5.98vw,24.67px)] md:leading-[clamp(24.67px,2.22vw,64.073px)]">
                  Certificate
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={image110}
          alt=""
          className="rounded-[clamp(24px,4.5vw,66px)] w-full max-w-[clamp(w-full,40vw,720px)] object-cover"
        />
      </div>

      {/* secound section */}
      <div className="flex sm:flex-row flex-col justify-between gap-6 lg:gap-10 bg-[rgba(55,55,55,0.10)] px-10 md:px-[clamp(138px,6.5vw,138px)] w-full">
        <div className="flex flex-col md:gap-5 w-full">
          {/* Heading */}
          <h1 className="md:pt-12 w-full font-montserrat font-bold text-[#12161F] text-[clamp(30px,8.73vw,36px)] md:text-[clamp(36px,3.472vw,100px)] leading-[clamp(40px,11.16vw,46.482px)] md:leading-[clamp(36px,4.375vw,126px)]">
            Become a <span className="text-[#21B495]">Full Stack Pro</span> –
            Seats Filling Fast!
          </h1>
          <div className="flex lg:flex-row flex-col md:gap-[clamp(20px,9.73vw,280px)] md:px-10">
            {/* Left side - Dates */}
            <div className="flex flex-col items-start xl:text-left text-center">
              <div className="flex items-center gap-2">
                <img src={image79} alt="calendar" className="w-8 h-8" />
                <h2 className="font-bold text-[#12161F] text-[clamp(16px,1.73vw,25px)] md:text-[clamp(16px,1.73vw,50px)] leading-[clamp(24px,15.29vw,63px)] md:leading-[clamp(24px,4.375vw,126px)]">
                  July 1st, 2025
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <img src={image79} alt="calendar" className="w-8 h-8" />
                <h2 className="font-bold text-[#12161F] text-[clamp(16px,1.73vw,25px)] md:text-[clamp(16px,1.73vw,50px)] leading-[clamp(24px,15.29vw,63px)] md:leading-[clamp(24px,4.375vw,126px)]">
                  Oct 1st, 2025
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <img src={image79} alt="calendar" className="w-8 h-8" />
                <h2 className="font-bold text-[#12161F] text-[clamp(16px,1.73vw,25px)] md:text-[clamp(16px,1.73vw,50px)] leading-[clamp(24px,15.29vw,63px)] md:leading-[clamp(24px,4.375vw,126px)]">
                  Jan 1st, 2026
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-2 mt-8 lg:mt-0 w-[65%]">
              <span className="hidden sm:flex mb-60 text-[#00C853] text-[48px] leading-[48px]">
                •
              </span>
              <p className="font-montserrat font-medium text-[#575757] text-[clamp(14px,3.88vw,16px)] md:text-[#000000] md:text-[clamp(16px,1.52vw,44px)] leading-[clamp(24px,3vw,40px)] md:leading-[clamp(24px,2.5vw,72px)]">
                Each batch includes comprehensive training in QA fundamentals,
                automation using Python and Selenium, hands-on real-world
                project work, expert-led live sessions, and dedicated placement
                support to help you confidently step into the industry as a
                skilled SDET.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* secound section */}
      <div
        className="bg-black"
        style={{
          backgroundImage: `url('/path-to-your-image.jpg')`,
        }}
      >
        <div className="z-10 relative mx-auto px-[16px] md:px-[184px] md:py-20 md:pb-25 text-white text-center">
          <div className="flex flex-col justify-center items-center font-montserrat font-bold text-[clamp(28px,8.73vw,36px)] md:text-[clamp(36px,3.47vw,100px)] text-center leading-[clamp(36px,11.28vw,46.482px)] md:leading-[clamp(46px,4.375vw,126px)]">
            <p className="m-0 text-[#FFF]">Our motto is</p>
            <p className="text-[#00FFCA]">#LearnandGrow</p>
          </div>

          <p className="md:mt-5 font-montserrat font-semibold text-[#F5F5F5] text-[clamp(12px,3.64vw,15px)] md:text-[clamp(15px,1.52vw,44px)] text-center leading-[clamp(19px,5.33vw,22px)] md:leading-[clamp(22px,2.08vw,60px)]">
            We will help you unlock your inner potential so you can excel in
            your professional field. Learn to use all the related tools, walk
            into a job and be a rockstar from day one.
          </p>
        </div>
      </div>

      {/* third section */}
      <section className="px-[20px] md:px-[clamp(16px,8.89vw,246px)] py-[clamp(28px,7.76vw,40px)] sm:py-20 md:py-[clamp(40px,4.16vw,120px)]">
        <div className="flex lg:flex-row flex-col justify-between gap-10">
          <div className="max-w-[600px] lg:text-lef">
            <h2 className="font-montserrat font-bold text-[#12161F] text-[clamp(37px,4vw,100px)] leading-[clamp(37px,4vw,100px)">
              What is{" "}
              <span className="text-[#21B495]">Full Stack Development</span>?
            </h2>
            <p className="p-2 font-medium text-[#575757] text-[clamp(12px,3.88vw,16px)] md:text-[clamp(16px,1.319vw,38px)] leading-[clamp(23px,6.56vw,27px)] md:leading-[clamp(23px,1.875vw,54px)] [font-montserrat">
              Full Stack Development involves building both the front-end and
              back-end of web applications. A Full Stack Developer handles
              everything from user interfaces to server-side logic and
              databases, ensuring the application is fully functional and meets
              business or client needs.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center w-full">
            <img
              src={image111}
              alt="What is SDET"
              className="w-[clamp(280px,35.55vw,full)] h-[clamp(220px,27.43vw,full)] object-contain"
            />
          </div>
        </div>
      </section>

      {/* fourth section */}
      <section className="bg-[#2A2E3B] px-[20px] md:md:px-[clamp(16px,8.89vw,246px)] py-[clamp(60px,15.77vw,65px)] md:py-[clamp(60px,5.56vw,160px)] text-white">
        <div className="flex sm:flex-row flex-col sm:justify-between items-center gap-20">
          {/* Stat 1 */}
          <div className="flex flex-row items-center gap-2">
            <img
              src={image87}
              alt="clock"
              className="flex-shrink-0 w-[clamp(60px,16.26vw,67px)] md:w-[clamp(60px,5.902vw,170px)] h-[clamp(60px,16.26vw,67px)] md:h-[clamp(60px,5.902vw,170px)] object-contain aspect-[67.09/67.091]"
            />

            <div flex flex-col gap-2>
              <h3 className="font-extrabold text-[#00FFCA] text-[clamp(25px,7.31vw,30.143px)] md:text-[clamp(25px,2.77vw,80px)] leading-[clamp(32px,9.164vw,37.757px)] md:leading-[clamp(32px,3.479vw,100.208px)]">
                1,000+
              </h3>
              <p className="font-[700] font-montserrat text-[#EAEAEA] text-[clamp(12px,3.47vw,14.318pxpx)] md:text-[clamp(14.318px,1.319vw,38px)] leading-[clamp(18px,4.93vw,20.346px)] md:leading-[clamp(18px,1.875vw,54px)]">
                Learners
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <img
              src={image88}
              alt="clock"
              className="flex-shrink-0 w-[clamp(60px,16.26vw,67px)] md:w-[clamp(60px,5.902vw,170px)] h-[clamp(60px,16.26vw,67px)] md:h-[clamp(60px,5.902vw,170px)] object-contain aspect-[67.09/67.091]"
            />

            <div flex flex-col gap-2>
              <h3 className="font-extrabold text-[#00FFCA] text-[clamp(25px,7.31vw,30.143px)] md:text-[clamp(25px,2.77vw,80px)] leading-[clamp(32px,9.164vw,37.757px)] md:leading-[clamp(32px,3.479vw,100.208px)]">
                90+
              </h3>
              <p className="font-[700] font-montserrat text-[#EAEAEA] text-[clamp(12px,3.47vw,14.318pxpx)] md:text-[clamp(14.318px,1.319vw,38px)] leading-[clamp(18px,4.93vw,20.346px)] md:leading-[clamp(18px,1.875vw,54px)]">
                Assignments
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <img
              src={image86}
              alt="clock"
              className="flex-shrink-0 w-[clamp(60px,16.26vw,67px)] md:w-[clamp(60px,5.902vw,170px)] h-[clamp(60px,16.26vw,67px)] md:h-[clamp(60px,5.902vw,170px)] object-contain aspect-[67.09/67.091]"
            />

            <div flex flex-col gap-2>
              <h3 className="font-extrabold text-[#00FFCA] text-[clamp(25px,7.31vw,30.143px)] md:text-[clamp(25px,2.77vw,80px)] leading-[clamp(32px,9.164vw,37.757px)] md:leading-[clamp(32px,3.479vw,100.208px)]">
                13
              </h3>
              <p className="font-[700] font-montserrat text-[#EAEAEA] text-[clamp(12px,3.47vw,14.318pxpx)] md:text-[clamp(14.318px,1.319vw,38px)] leading-[clamp(18px,4.93vw,20.346px)] md:leading-[clamp(18px,1.875vw,54px)]">
                Live Sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5th section */}

      <section className="bg-white px-[5px] md:px-[clamp(15px,7.23vw,208px)] md:py-[clamp(15px,5.56vw,160px)] pt-8 overflow-hidden">
        <div className="flex lg:flex-row flex-col gap-10 bg-[rgba(55,55,55,0.10)] p-5 md:p-9.5">
          <div className="flex flex-col flex-1 items-center sm:items-start gap-[clamp(24px,2.055vw,470px)]">
            <h2 className="font-montserrat font-bold text-[#12161F] text-[clamp(35px,9.89vw,40.742px)] md:text-[clamp(40.742px,3.47vw,100px)] text-center md:text-start leading-[clamp(46px,12.45vw,51.335px)] md:leading-[clamp(51.335px,4.375vw,126px)">
              No background in tech? No problem.
            </h2>

            <p className="font-montserrat font-medium text-[#575757] text-[clamp(12px,3.88vw,16px)] md:text-[clamp(16px,1.319vw,38px)] leading-[clamp(23px,6.56vw,27px)] md:leading-[clamp(23px,1.875vw,54px)]">
              This course is perfect for individuals from non-IT backgrounds who
              want to break into the world of software testing. You'll learn how
              to become an SDET (Software Development Engineer in Test) —
              someone who designs, writes, and maintains automated tests to
              ensure software quality. As an SDET, you'll collaborate closely
              with developers to deliver reliable, high-performing applications.
              No prior IT experience is needed. We provide complete training and
              hands-on resources to support your learning journey. If you're
              ready to start a career in software testing, this course is the
              ideal first step.
            </p>
            <button className="flex items-center gap-2 bg-[#00FFC3] hover:bg-[#00e2af] px-6 py-3 rounded-full w-fit transition-all duration-300">
              <span className="flex flex-row gap-2 p-2 font-inter font-extrabold text-[#12161F] text-[clamp(16px,2vw,21.382px)] text-right leading-[clamp(24px,3vw,32.073px)]">
                Learn More <img src={gh} alt="" className="mt-1 w-6 h-6" />
              </span>
            </button>
          </div>
          <div className="flex flex-1 justify-center w-full">
            <img
              src={image89}
              alt="Smiling woman working on laptop"
              className="bg-white p-3 sm:p-8 rounded sm:w-full sm:h-full object-contain5"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-7 bg-white px-4 pt-15 text-[#12161F]">
          <div className="flex-1 sm:pl-5 w-full max-w-[450px]">
            <h2 className="font-montserrat font-bold text-[#12161F] text-[clamp(31px,9.15vw,37.72px)] md:text-[clamp(36px,3.47vw,100px)] leading-[clamp(52.78px,4.75vw,126px)] md:leading-[clamp(52.78px,15.29vw,63px)]">
              Full Stack Development Careers
            </h2>

            <p className="mt-2 font-medium text-[#575757] text-[clamp(12px,3.88vw,16px)] md:text-[clamp(16px,1.319vw,38px)] leading-[clamp(23px,6.55vw,27px)] md:leading-[clamp(27px,1.875vw,54px)]">
             The goal of a Full Stack Developer is to design and build fully functional, end-to-end web applications that meet user needs and business requirements—handling both front-end (client-side) and back-end (server-side) development.
            </p>
          </div>

          <div className="border-[#00775F] border-l-[3px]"></div>

          <div className="flex-1 gap-[clamp(20px,2.5vw,40px)] grid grid-cols-1 sm:grid-cols-2">
            <div className="flex items-start gap-3 max-w-xl">
              <img
                src={image79}
                alt="check icon"
                className="md:hidden mt-2 w-[clamp(18px,3vw,24px)] h-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-[#12161F] text-[clamp(12px,3.39vw,14px)] md:text-[clamp(14px,1.39vw,40px)] leading-[clamp(28px,7.52vw,31.77px)] md:leading-[clamp(31.77px,2.20vw,63.54px)]">
                   Front-end Developer
                </h3>
                <p className="font-medium text-[#575757] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.12vw,36px)] leading-[clamp(18px,3.88vw,19px)] md:leading-[clamp(19px,1.52vw,44px)]">
                  Front-End Developers focus on building the user-facing part of web applications. They use technologies like HTML, CSS, JavaScript, and frameworks such as React or Angular to create intuitive and responsive interfaces.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 max-w-xl">
              <img
                src={image79}
                alt="check icon"
                className="sm:hidden mt-1 w-[clamp(18px,3vw,24px)] h-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-[#12161F] text-[clamp(12px,3.39vw,14px)] md:text-[clamp(14px,1.39vw,40px)] leading-[clamp(28px,7.52vw,31.77px)] md:leading-[clamp(31.77px,2.20vw,63.54px)]">
                  Back-end Developer
                </h3>
                <p className="font-medium text-[#575757] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.12vw,36px)] leading-[clamp(18px,3.88vw,19px)] md:leading-[clamp(19px,1.52vw,44px)]">
                 Back-End Developers manage the server-side logic, databases, APIs, and application performance. They work with languages like Node.js, Java, or Python and databases such as MySQL or MongoDB to ensure smooth data handling and system operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 max-w-xl">
              <img
                src={image79}
                alt="check icon"
                className="sm:hidden mt-1 w-[clamp(18px,3vw,24px)] h-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-[#12161F] text-[clamp(12px,3.39vw,14px)] md:text-[clamp(14px,1.39vw,40px)] leading-[clamp(28px,7.52vw,31.77px)] md:leading-[clamp(31.77px,2.20vw,63.54px)]">
                  Web Application Developer
                </h3>
                <p className="font-medium text-[#575757] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.12vw,36px)] leading-[clamp(18px,3.88vw,19px)] md:leading-[clamp(19px,1.52vw,44px)]">
                   Web Application Developers specialize in creating dynamic websites and online platforms. They work on designing, coding, and maintaining web-based software applications, often collaborating closely with designers and other developers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 max-w-xl">
              <img
                src={image79}
                alt="check icon"
                className="sm:hidden mt-1 w-[clamp(18px,3vw,24px)] h-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-[#12161F] text-[clamp(12px,3.39vw,14px)] md:text-[clamp(14px,1.39vw,40px)] leading-[clamp(28px,7.52vw,31.77px)] md:leading-[clamp(31.77px,2.20vw,63.54px)]">
                  Software Engineer (Web Focus)
                </h3>
                <p className="font-medium text-[#575757] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.12vw,36px)] leading-[clamp(18px,3.88vw,19px)] md:leading-[clamp(19px,1.52vw,44px)]">
                  Software Engineers in web development roles design robust, scalable systems that power online platforms and digital tools. They apply software engineering principles to build secure and efficient web applications across various domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-[20px]">
        <h2 className="sm:pb-2 font-montserrat font-bold text-[#12161F] text-[clamp(30px,8.49vw,35px)] md:text-[clamp(35px,3.47vw,100px)] text-center leading-[clamp(43.146px,6vw,51.335px)] md:leading-[clamp(51.335px,4.375vw,126px)]">
          Frequently asked Questions
        </h2>
      </section>

      <section className="padding-left: bg-[rgba(55,55,55,0.10)] px-4 md:px-[clamp(15px,6.51vw,187.64px)] py-3.5 md:py-[clamp(14px,3.88vw,112px)]">
        <div className="flex flex-col bg-white mx-auto sm:p-2">
          {[
            "Is an IT background required to enroll in the SDET course?",
            "Which certification is recommended to pursue a career as an SDET?",
            "How much time does it take to learn and become an SDET?",
            "Is there a trial period available for the course?",
            "What is the average salary of a Software Development Engineer in Test (SDET)?",
            "What is the tuition fee for the SDET training program?",
          ].map((question, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-2 border-[#9E9E9E] border-b-[1px] font-montserrat font-semibold text-[#12161F] text-[clamp(14px,1.8vw,18px)] leading-[1.6]"
            >
              <span className="p-7 font-montserrat font-bold text-[#12161F] text-[clamp(11px,3.15vw,13px)] md:text-[clamp(13px,1.67vw,48px)] leading-[clamp(18px,4.85vw,20px)] md:leading-[clamp(20px,4.375vw,126px)]">
                {question}
              </span>
              <span>
                <img src={Arowdwon} alt="" />
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Fullstack;
