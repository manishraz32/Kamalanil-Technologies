import React from "react";
import Navbar from "../../components/Navbar";
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
import company_logo from "../../assets/Frame 4.svg";
import gh from "../../assets/gh.svg";
import mapIcon from "../../assets/images/mapIcon.svg";
import phoneIcon from "../../assets/images/phoneIcon.png";
import emailIcon from "../../assets/images/emailIcon.png";

import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import whatsapp from "../../assets/images/whatsapp.png";

import smallEmailSvg from "../../assets/images/smallEmailSvg.svg";
import smallMapIcon from "../../assets/images/smallMapIcon.svg";
import smallPhoneSvg from "../../assets/images/smallPhoneSvg.svg";
import emailjs from "emailjs-com";
import { useState, useEffect, useRef } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import image44 from "../../assets/image44.png";
import image131 from "../../assets/image 131.svg";
import SuccessModal from "../../components/SuccessModal";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import image91 from "../../assets/image 91.svg";
import image92 from "../../assets/image 92.svg";
import image97 from "../../assets/image 97.svg";


const SDET = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const handleChange = (e) => {
    console.log("e", e);
    console.log("e.target", e.target);
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setFormData((prev) => {
      console.log("Previous formData:", prev);
      const updated = { ...prev, [name]: value };
      console.log("Updated formData:", updated);
      return updated;
    });

    //Clear error for the current field if it's being fixed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";

    // Phone number validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Course validation
    if (!formData.course) newErrors.course = "Please select a course";

    // City validation
    if (!formData.city.trim()) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);

      // Add timestamp if using {{time}} in template
      const fullData = {
        ...formData,
        time: new Date().toLocaleString(),
      };

      // Send form data to EmailJS
      emailjs
        .send(
          "service_rg7zslu", // Your service ID
          "template_q99yq7q", // Your template ID
          fullData, //  Your form data + time
          "2qMCy92i-24VLWAM9" // Your public key
        )
        .then((response) => {
          alert("Form submitted successfully!");
          console.log("Email sent:", response.status, response.text);

          setFormData({
            name: "",
            phone: "",
            email: "",
            course: "",
            city: "",
            message: "",
          });
          setErrors({});
          setShowSuccess(true);
        })
        .catch((error) => {
          alert("Failed to send email.");
          console.error("EmailJS error:", error);
        });
    }
  };

  // ************************************
  const fullText = "#LearnandGrow";
  const [displayedText, setDisplayedText] = useState("");
  const { ref: typeRef, inView: typeInView } = useInView({
    triggerOnce: false, // or true if you want it only once
    threshold: 0.5,
  });

  useEffect(() => {
    let index = -1;
    let timeoutId;

    if (typeInView) {
      setDisplayedText(""); // clear previous text

      const typeLetter = () => {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(index));
          index++;
          timeoutId = setTimeout(typeLetter, 100);
        }
      };

      timeoutId = setTimeout(typeLetter, 100); // small delay before starting
    }

    return () => clearTimeout(timeoutId);
  }, [typeInView]);


  // *****************************************
  const SedtText =
    "An SDET’s primary goal is to ensure the software developed meets high-quality standards and aligns with business or client requirements.";
  const words = SedtText.split(" ");
  const [displayedWords, setDisplayedWords] = useState([]);
  const [startTyping, setStartTyping] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (startTyping) {
      setDisplayedWords([]); // Reset before typing again
      let index = 0;

      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setDisplayedWords((prev) => [...prev, words[index]]);
        index++;
        if (index >= words.length) {
          clearInterval(intervalRef.current);
        }
      }, 200);
    }
  }, [startTyping]);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  // ********************************************
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already open
    } else {
      setActiveIndex(index); // Show new
    }
  };

  const questions = [
    {
      question: "Is an IT background required to enroll in the SDET course?",
      answer:
        "No, an IT background is not mandatory. Anyone with a strong interest in learning software testing and basic programming logic can join. We start from the basics and gradually move to advanced topics."
    },
    {
      question: "Which certification is recommended to pursue a career as an SDET?",
      answer:
        "While not mandatory, certifications like ISTQB, Certified Selenium Tester, or AWS Developer Associate can strengthen your resume. Our course includes guidance on certification paths.",
    },
    {
      question: "How much time does it take to learn and become an SDET?",
      answer:
        "On average, it takes 3 to 6 months to become proficient, depending on your learning pace and practice. Our structured program is designed to get you job-ready within this timeframe.",
    },
    {
      question: "Is there a trial period available for the course?",
      answer: "Yes, we offer a free trial or orientation session so you can understand the course structure, trainer style, and tools used before committing.",
    },
    {
      question:
        "What is the average salary of a Software Development Engineer in Test (SDET)?",
      answer:
        "In India, entry-level SDETs earn around ₹4.5 – ₹7 LPA, while experienced professionals can earn ₹12 – ₹20 LPA or more depending on skills and company.",
    },
    {
      question: "What is the tuition fee for the SDET training program?",
      answer:
        "Our course is currently offered as part of a free internship program, with options for paid upgrades or certification assistance depending on your goals. Contact us for the latest details.",
    },
  ];

  // ******************************************



  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* hero section */}
      <div className="overflow-x-hidden">
        <div className="flex lg:flex-row 2xl:flex-row 3xl:flex-row xl:flex-row flex-col gap-15 px-4 md:px-[clamp(16px,6.53vw,120px)] py-8 md:py-[clamp(28px,4.86vw,70px)] overflow-x-hidden">
          <div className="flex flex-col gap-[clamp(10px,2.083vw,60px)]">
            <div className="flex flex-col gap-2">
              <div className="font-montserrat font-bold text-[#12161F] text-[clamp(28px,8.73vw,36px)] md:text-[clamp(36px,3.47vw,100px)] leading-[clamp(36px,11.28vw,46.482px)] md:leading-[clamp(46px,4.375vw,126px)]">
                <h1>Kick Start your</h1>
                <h1>
                  <span className="text-[#21B495]">SDET</span> Career
                </h1>
              </div>

              <p className="font-montserrat font-medium text-[#575757] text-[clamp(14px,3.89vw,16px)] md:text-[clamp(16px,1.319vw,50px)] leading-[clamp(21px,1.67vw,24px)] md:leading-[clamp(23px,1.875vw,108px)]">
                Our programs are delivered through flexible online training, with
                offline batches launching soon. Designed for beginners and
                aspiring professionals, our courses build strong foundations in
                both core concepts and technical skills—no prior coding experience
                required.
              </p>
            </div>
            <div>
              <ul className="flex flex-col justify-center pl-6 font-montserrat font-bold text-[#12161F] text-[clamp(16px,4.367vw,18px)] md:text-[clamp(16px,1.39vw,40px)] leading-[clamp(27px,7.28vw,30px)] md:leading-[clamp(27px,2.084vw,60px)] list-disc">
                <li>UI Automation</li>
                <li>API Automation</li>
                <li>GIT / GitHub</li>
                <li>AWS Setup</li>
                <li>JIRA</li>
              </ul>
            </div>
            <button className="flex flex-col justify-center items-center gap-[12.91px] md:gap-[clamp(8px,1vw,12.91px)] bg-[#00FFCA] px-[30.988px] md:px-[clamp(20px,5vw,30.98px)] py-[20.659px] md:py-[clamp(12px,3vw,20.66px)]  rounded-[48.308px] md:rounded-[clamp(24px,5vw,48.3px)] w-full h-[56px] md:h-[clamp(50px,5vw,64.73px)] font-semibold text-[clamp(17px,4.917vw,20.659px)] text-black md:text-[clamp(20px,1.39vw,40.659px)] leading-[clamp(25.5px,2.6vw,30.988px)] md:leading-[clamp(30.988px,2.6vw,60.988px)] cursor-pointer hover:bg-[#008368]">
              Apply now
            </button>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? -50 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.36 }}
              className="gap-5 grid grid-cols-2 bg-white text-[#12161F] ">
              <div className="flex items-start gap-3">
                <img
                  src={image61}
                  alt="Rupee"
                  className="w-[clamp(25px,7.73vw,31.878px)] md:w-[clamp(25px,2.43vw,70px)] h-[clamp(25px,7.73vw,31.878px)] md:h-[clamp(25px,2.43vw,70px)]"
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
                  className="w-[clamp(25px,7.73vw,31.878px)] md:w-[clamp(25px,2.43vw,70px)] h-[clamp(25px,7.73vw,31.878px)] md:h-[clamp(25px,2.43vw,70px)]"
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
                  className="w-[clamp(25px,7.73vw,31.878px] md:w-[clamp(25px,2.43vw,70px)] h-[clamp(25px,7.73vw,31.878px)] md:h-[clamp(25px,2.43vw,70px)]"
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
                  className="mt-1 w-[clamp(25px,7.73vw,31.878px] md:w-[clamp(25px,2.43vw,70px)] h-[clamp(25px,7.73vw,31.878px)] md:h-[clamp(25px,2.43vw,70px)]"
                />
                <div>
                  <p className="font-inter font-bold text-[#12161F] text-[clamp(14px,3.77vw,15.55px)] md:text-[clamp(15.55px,1.528vw,44px)] leading-[clamp(22.3px,5.98vw,24.67px)] md:leading-[clamp(24.67px,1.713vw,49.34px)]">
                    SDET
                  </p>

                  <p className="font-inter font-normal text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)] leading-[clamp(14px,5.98vw,24.67px)] md:leading-[clamp(24.67px,2.22vw,64.073px)]">
                    Certificate
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.img
            initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={image110}
            alt=""
            className="rounded-[clamp(24px,4.5vw,66px)] w-full max-w-[clamp(400px,40vw,720px)] object-cover "
          />
        </div>

        {/* secound section */}
        <div className="flex sm:flex-row flex-col justify-between gap-6 lg:gap-10 bg-[rgba(55,55,55,0.10)] px-4 md:px-[clamp(138px,6.5vw,138px)] py-7 w-full overflow-x-hidden">
          <div className="flex flex-col gap-3 md:gap-5 w-full">
            {/* Heading */}
            <h1 className="items-center md:pt-12 w-full font-montserrat font-bold text-[#12161F] text-[clamp(30px,8.73vw,36px)] md:text-[clamp(36px,3.472vw,100px)] text-center md:text-start leading-[clamp(40px,11.16vw,46.482px)] md:leading-[clamp(36px,4.375vw,126px)]">
              Secure Your Spot in the Next{" "}
              <span className="text-[#21B495]">SDET</span> Batch
            </h1>
            <div className="flex lg:flex-row flex-col md:gap-[clamp(20px,9.73vw,280px)] md:px-10">
              {/* Left side - Dates */}
              <div className="flex flex-col items-center md:items-start md:text-left text-center">
                <div className="flex items-center gap-2">
                  <img src={image79} alt="calendar" className="w-8 h-8" />
                  <h2 className="font-bold text-[#12161F] text-[clamp(16px,6.06vw,25px)] md:text-[clamp(16px,1.73vw,50px)] leading-[clamp(24px,15.29vw,63px)] md:leading-[clamp(24px,4.375vw,126px)]">
                    July 1st, 2025
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <img src={image79} alt="calendar" className="w-8 h-8" />
                  <h2 className="font-bold text-[#12161F] text-[clamp(16px,6.06vw,25px)] md:text-[clamp(16px,1.73vw,50px)] leading-[clamp(24px,15.29vw,63px)] md:leading-[clamp(24px,4.375vw,126px)]">
                    Oct 1st, 2025
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <img src={image79} alt="calendar" className="w-8 h-8" />
                  <h2 className="font-bold text-[#12161F] text-[clamp(16px,6.06vw,25px)] md:text-[clamp(16px,1.73vw,50px)] leading-[clamp(24px,15.29vw,63px)] md:leading-[clamp(24px,4.375vw,126px)]">
                    Jan 1st, 2026
                  </h2>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex items-start gap-2 mt-8 lg:mt-0 md:w-[65%] ">
                <span className="hidden relative sm:flex mt-[-11px] text-[#138A71] text-[48px] leading-[50px]">
                  •
                </span>
                <p className="font-montserrat font-medium text-[#575757] text-[clamp(14px,3.88vw,16px)] md:text-[#000000] md:text-[clamp(16px,1.52vw,44px)] leading-[clamp(24px,3vw,40px)] md:leading-[clamp(24px,2.5vw,72px)]">
                  Each batch includes comprehensive training in QA fundamentals,
                  automation using Python and Selenium, hands-on real-world
                  project work, expert-led live sessions, and dedicated placement
                  support to help you confidently step into the industry as a
                  skilled SDET.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* secound section */}

        <div
          className="relative py-14 md:py-0 overflow-x-hidden"
          style={{
            backgroundImage: `url(${image44})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* 🔹 Overlay Layer */}
          <div className="z-0 absolute inset-0 bg-[#373737d6]"></div>

          {/* 🔸 Content (on top of overlay) */}
          <div className="z-10 relative mx-auto px-[16px] md:px-[184px] md:py-20 md:pb-25 text-white text-center">
            <div className="flex flex-col justify-center items-center font-montserrat font-bold text-[clamp(28px,8.73vw,36px)] md:text-[clamp(36px,3.47vw,100px)] text-center leading-[clamp(36px,11.28vw,46.482px)] md:leading-[clamp(46px,4.375vw,126px)]">
              <p className="m-0 text-[#FFF]">Our motto is</p>
              <motion.p
                whileInView={{ opacity: [0, 1], transition: { duration: 1 } }}
                ref={typeRef} className="text-[#00FFCA]">
                {displayedText}
              </motion.p>
            </div>

            <p
              className="mt-4 md:mt-5 w-[95%] font-montserrat font-semibold text-[#F5F5F5] text-[clamp(12px,3.64vw,15px)] md:text-[clamp(15px,1.52vw,44px)] text-center leading-[clamp(19px,5.33vw,22px)] md:leading-[clamp(22px,2.08vw,60px)]">
              We will help you unlock your inner potential so you can excel in
              your professional field. Learn to use all the related tools, walk
              into a job and be a rockstar from day one.
            </p>
          </div>
        </div>

        {/* third section */}
        <section className="px-[20px] md:px-[clamp(16px,8.89vw,246px)] py-[clamp(28px,7.76vw,40px)] sm:py-20 md:py-[clamp(40px,4.16vw,120px)] overflow-x-hidden">
          <div className="flex lg:flex-row flex-col justify-between gap-10">
            <div className="max-w-[600px] lg:text-lef">
              <h2 className="font-montserrat font-bold text-[#12161F] text-[clamp(37px,4vw,100px)] leading-[clamp(37px,4vw,100px)">
                What is <span className="text-[#21B495]">SDET</span>?
              </h2>
              <motion.p
                initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-2 font-medium text-[#575757] text-[clamp(12px,3.88vw,16px)]  md:text-[clamp(16px,1.319vw,38px)] leading-[clamp(23px,6.55vw,27px)] md:leading-[clamp(27px,1.875vw,54px)]"
              >
                SDET stands for "Software Development Engineer in Test." This role
                focuses on ensuring software quality by designing, developing, and
                maintaining tests for applications. SDETs play a crucial role in
                verifying that software meets business or client requirements.
                They also work on automating testing processes and creating tools
                to streamline and enhance testing efficiency.
              </motion.p>

            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center w-full">
              <img
                src={image111}
                alt="What is SDET"
                className="w-[clamp(280px,35.55vw,full)] h-[clamp(220px,27.43vw,full)] object-contain overflow-x-hidden"
              />
            </motion.div>
          </div>
        </section >

        {/* fourth section */}
        < section className="overflow-x-hidden bg-[#2A2E3B] px-[20px] md:md:px-[clamp(16px,8.89vw,246px)] py-[clamp(60px,15.77vw,65px)] md:py-[clamp(60px,5.56vw,160px)] text-white" >
          <div className="flex sm:flex-row flex-col sm:justify-between items-center gap-20 overflow-x-hidden">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? -50 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-row items-center gap-2 ">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0.4, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-row items-center gap-2 ">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-row items-center gap-2 ">
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
            </motion.div>
          </div>
        </section >

        {/* 5th section */}

        < section className=" overflow-x-hidden bg-white px-4 md:px-[clamp(15px,7.23vw,208px)] md:py-[clamp(15px,5.56vw,160px)] pt-8 overflow-hidden" >
          <div className="flex lg:flex-row flex-col gap-10 bg-[rgba(55,55,55,0.10)] md:p-9.5 px-4 py-6 m:py-0">
            <div className="flex flex-col flex-1 items-center sm:items-start gap-[clamp(24px,2.055vw,470px)]">
              <h2 className="font-montserrat font-bold text-[#12161F] text-[clamp(35px,9.89vw,40.742px)] md:text-[clamp(40.742px,3.47vw,150px)] text-center md:text-start leading-[clamp(46px,12.45vw,51.335px)] md:leading-[clamp(51.335px,4.375vw,183px)">
                No background in tech? No problem.
              </h2>

              <p className="px-2 font-montserrat font-medium text-[#575757] text-[clamp(12px,3.88vw,16px)] md:text-[clamp(16px,1.319vw,38px)] leading-[clamp(23px,6.56vw,27px)] md:leading-[clamp(23px,1.875vw,54px)]">
                This course is perfect for individuals from non-IT backgrounds who
                want to break into the world of software testing.
                <br />
                You'll learn how to become an SDET (Software Development Engineer
                in Test) — someone who designs, writes, and maintains automated
                tests to ensure software quality. As an SDET, you'll collaborate
                closely with developers to deliver reliable, high-performing
                applications.
                <br />
                No prior IT experience is needed. We provide complete training and
                hands-on resources to support your learning journey. If you're
                ready to start a career in software testing, this course is the
                ideal first step.
              </p>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-2 bg-[#00FFC3] hover:bg-[#00e2af] px-6 py-3 rounded-full w-fit transition-all duration-300 cursor-pointer hover:bg-[#008368]">
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-row gap-2 p-2 font-inter font-extrabold text-[#12161F] text-[clamp(16px,2vw,21.382px)] text-right leading-[clamp(24px,3vw,32.073px)]">
                  Learn More <img src={gh} alt="" className="mt-1 w-6 h-6" />
                </motion.span>
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-1 justify-center w-full">
              <img
                src={image89}
                alt="Smiling woman working on laptop"
                className="bg-white p-3 sm:p-8 rounded sm:w-full sm:h-full object-contain5"
              />
            </motion.div>
          </div>

          <div className="flex lg:flex-row flex-col gap-3 bg-white px-4 pt-15 text-[#12161F]">
            <div className="flex-1 sm:pl-5 w-full max-w-[450px]">
              <h2 className="font-montserrat font-bold text-[#12161F] text-[clamp(31px,9.15vw,37.72px)] md:text-[clamp(36px,3.47vw,100px)] leading-[clamp(52.78px,4.75vw,126px)] md:leading-[clamp(52.78px,15.29vw,63px)]">
                SDET Careers
              </h2>

              <motion.p
                whileInView={() => setStartTyping(true)}
                onViewportLeave={() => setStartTyping(false)}
                className="mt-2 font-medium text-[#575757] text-[clamp(12px,3.88vw,16px)] md:text-[clamp(16px,1.319vw,38px)] leading-[clamp(23px,6.55vw,27px)] md:leading-[clamp(27px,1.875vw,54px)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                {displayedWords.join(" ")}
              </motion.p>
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
                    Software Test Engineer
                  </h3>
                  <p className="font-medium text-[#575757] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.12vw,36px)] leading-[clamp(18px,3.88vw,19px)] md:leading-[clamp(19px,1.52vw,44px)]">
                    A Software Test Engineer is responsible for designing,
                    developing, and executing test cases to ensure that software
                    applications function correctly and meet business or client
                    expectations. Their work is key to delivering high-quality,
                    reliable products.
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
                    QA Engineer
                  </h3>
                  <p className="font-medium text-[#575757] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.12vw,36px)] leading-[clamp(18px,3.88vw,19px)] md:leading-[clamp(19px,1.52vw,44px)]">
                    Quality Assurance (QA) Engineers focus on validating that
                    software performs as intended. They conduct various types of
                    testing—such as functional, regression, and performance
                    testing— to confirm the software meets all specified
                    requirements and delivers a smooth user experience.
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
                    Automation Engineer
                  </h3>
                  <p className="font-medium text-[#575757] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.12vw,36px)] leading-[clamp(18px,3.88vw,19px)] md:leading-[clamp(19px,1.52vw,44px)]">
                    An Automation Engineer specializes in creating and maintaining
                    automated test scripts. Their main goal is to streamline the
                    testing process by reducing manual effort and improving
                    accuracy, enabling faster and more efficient software
                    delivery.
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
                    Test Engineer
                  </h3>
                  <p className="font-medium text-[#575757] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.12vw,36px)] leading-[clamp(18px,3.88vw,19px)] md:leading-[clamp(19px,1.52vw,44px)]">
                    Test Engineers operate across diverse industries like
                    healthcare, finance, and insurance. They are responsible for
                    developing test plans and test cases, analyzing results, and
                    reporting on product or system quality to ensure standards are
                    consistently met.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section >
        <section className="bg-white px-[20px] pt-7 md:pt-0">
          <h2 className="sm:pb-2 font-montserrat font-bold text-[#12161F] text-[clamp(30px,8.49vw,35px)] md:text-[clamp(35px,3.47vw,100px)] text-center leading-[clamp(43.146px,6vw,51.335px)] md:leading-[clamp(51.335px,4.375vw,126px)]">
            Frequently asked Questions
          </h2>
        </section>

        <section className="bg-[rgba(55,55,55,0.10)] px-4 md:px-[clamp(15px,6.51vw,187.64px)] py-3.5 md:py-[clamp(14px,3.88vw,112px)]">
          <div className="flex flex-col bg-white mx-auto sm:p-2">
            {questions.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleAnswer(index)}
                  className={`
                     cursor-pointer flex justify-between items-center gap-2 px-3.5 
                     font-montserrat font-semibold text-[#12161F] 
                     text-[clamp(14px,1.8vw,18px)] leading-[1.6]
                     ${activeIndex !== index && index !== questions.length - 1 ? "border-b border-[#12161F]" : ""}
                   `}
                >
                  <span className="md:p-7 py-8 font-montserrat font-bold text-[#12161F] text-[clamp(11px,3.15vw,13px)] md:text-[clamp(13px,1.67vw,48px)] leading-[clamp(18px,4.85vw,20px)] md:leading-[clamp(20px,4.375vw,126px)]">
                    {item.question}
                  </span>
                  <span>
                    <img
                      src={Arowdwon}
                      alt="arrow"
                      className={`md:mr-6 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  </span>
                </div>

                {activeIndex === index && (
                  <div
                    className={`
                        px-4 md:px-10 md:text-[20px] text-[13px] text-[#000] bg-white transition-all duration-300 
                       font-normal leading-[33px]
                       ${index !== questions.length - 1 ? "border-b border-[#12161F]" : ""}
                     `}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>


        <section
          id="contact"
          className="items-start gap-10 grid grid-cols-1 md:grid-cols-2 bg-white px-4 py-12 md:pr-[clamp(50px,11.79vw,339.66px)] md:pl-[clamp(15px,6.51vw,187.64px)] w-full"
        >
          {/* Contact Info */}
          <div className="">
            <h2 className="font-bold text-[#12161F] text-[clamp(18px,8.7vw,36px)] md:text-[clamp(16px,3.48vw,100px)] leading-[clamp(23px,11.2vw,46.5px)] md:leading-[clamp(46.5pxpx,4.375vw,126px)]">
              Contact Details
            </h2>
            <h3 className="md:py-5.5 font-bold text-[#12161F] text-[clamp(18px,5.8vw,24px)] md:text-[clamp(24px,1.67vw,48px)] leading-[clamp(24px,7.2vw,30px)] md:leading-[clamp(46.5pxpx,4.375vw,126px)]">
              Let's Connect
            </h3>
            <p className="py-4.5 md:py-0 md:pt-3.4 md:pb-5 md:max-w-[95%] md:font-normal font-medium text-[#12161F] text-[clamp(14px,3.89vw,16px)] md:text-[clamp(16px,1.319vw,50px)] leading-[clamp(21px,6.31vw,26px)] md:leading-[clamp(23px,1.875vw,108px)]">
              We’re here to help! Whether you have questions about our courses,
              need IT consultancy, or just want to say hello — don’t hesitate to
              reach out. Fill out the form below, and our team will get back to
              you as soon as possible.
            </p>

            {/* Contact Icons */}
            <div className="flex flex-col gap-5 text-[clamp(14px,2vw,16px)]">
              <div className="flex gap-2 md:gap-[6px]">
                <img
                  src={mapIcon}
                  className="md:mt-2 w-8 md:w-[clamp(24px,2.77vw,79.698px)] h-8 md:h-[clamp(24px,2.75vw,79.246px)]"
                />
                <div className="font-semibold text-[12px] md:text-[clamp(12px,1.25vw,36px)] leading-4 md:leading-[clamp(18.9px,3.69vw,106.496px)]">
                  <p className="leading-4 md:leading-[clamp(18.9px,2.08vw,60px)]">
                    Location:
                  </p>
                  <p className="text-[#21B495] leading-4">Pune , Maharashtra</p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={phoneIcon}
                  className="md:mt-2 w-8 md:w-[clamp(24px,2.77vw,79.698px)] h-8 md:h-[clamp(24px,2.75vw,79.246px)]"
                />
                <div className="font-semibold text-[12px] md:text-[clamp(12px,1.25vw,36px)] leading-4 md:leading-[clamp(18.9px,3.69vw,106.496px)]">
                  <p className="leading-4 md:leading-[clamp(18.9px,2.08vw,60px)]">
                    Phone(9am - 6am):
                  </p>
                  <p className="text-[#21B495] leading-4">+91-9322374766</p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={emailIcon}
                  className="md:mt-2 w-8 md:w-[clamp(24px,2.77vw,79.698px)] h-8 md:h-[clamp(24px,2.75vw,79.246px)]"
                />
                <div className="font-semibold text-[12px] md:text-[clamp(12px,1.25vw,36px)] leading-4 md:leading-[clamp(18.9px,3.69vw,106.496px)]">
                  <p className="leading-4 md:leading-[clamp(18.9px,2.08vw,60px)]">
                    E-mail::
                  </p>
                  <p className="text-[#21B495] leading-4">
                    info@kamlaniltech.com
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-start gap-[6px] pt-3">
                {/* Left Globe Icon */}

                <div className="flex justify-center items-center bg-[#E1DEE1] mt-2 rounded-lg w-[40px] h-[40px]">
                  <img src={image131} alt="" className="w-[20px] h-[20px]" />
                </div>

                {/* Text + Social Icons */}
                <div className="font-semibold text-[12px] md:text-[clamp(12px,1.25vw,36px)] leading-4 md:leading-[clamp(18.9px,3.69vw,106.496px)]">
                  <p className="leading-4 md:leading-[clamp(18.9px,2.08vw,60px)]">
                    Follow us on:
                  </p>

                  <div className="flex items-center gap-[6px]">
                    {/* LinkedIn */}
                    <div className="flex justify-center items-center bg-[#21B495] rounded-full w-6 md:w-5 h-6 md:h-5">
                      <img
                        src={image91}
                        alt="LinkedIn"
                        className="w-3.5 h-3.5"
                      />
                    </div>

                    {/* Instagram */}
                    <div className="flex justify-center items-center bg-[#21B495] rounded-full w-6 md:w-5 h-6 md:h-5">
                      <img
                        src={image92}
                        alt="Instagram"
                        className="w-3.5 h-3.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="px-4">
            <div className="bg-[rgba(167,159,168,0.34)] px-5 md:px-5 py-3 rounded-[13.583px] w-full">
              <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Phone no. *
                  </label>
                  <div className="flex py-2 input">
                    <div className="inline-flex items-center bg-[#EEE] px-4 border border-gray-300 rounded-md whitespace-nowrap">
                      🇮🇳 +91{"   "}
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block md:pr-10 font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Course *
                  </label>
                  <select
                    className="input"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option>Select Course</option>
                    <option>SEDT</option>
                    <option>Full Stack Developer</option>
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-sm">{errors.course}</p>
                  )}
                </div>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                    className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    rows="3"
                    name="message"
                    className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="block bg-[#00FFC3] cursor-pointer hover:bg-[#008368] mt-3 rounded-[33px] w-full font-bold text-[#000] text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)] transition "
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </section>

        <footer className="flex justify-center bg-[rgb(47,54,69)] px-4 py-10 md:pt-[clamp(10px,3.125vw,45px)] md:pr-[clamp(94px,3.40vw,49px)] pb-20 md:pl-[clamp(94px,8.19vw,236px)]">
          <div className="flex md:flex-row flex-col justify-between w-full">
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:w-[25%] text-center md:text-start">
              <div className="flex items-center gap-2">
                <img src={company_logo} alt="Logo" className="md:w-[181.619px] md:h-[47.4427px]" />
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
                  <img src={image91} alt="LinkedIn" className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center bg-[#21B495] rounded-full w-[50px] h-[50px]"
                >
                  <img src={image92} alt="Instagram" className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center bg-[#21B495] rounded-full w-[50px] h-[50px]"
                >
                  <img src={image97} alt="WhatsApp" className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-0 text-center">
              <h3 className="md:mb-5 font-[Montserrat] font-bold text-[16px] text-white md:text-[clamp(12px,1.38vw,40px)] text-center">
                Quick Links
              </h3>
              <ul className="space-y-4 font-medium text-[#00FFCA] text-sm">
                <li className="md:text-[clamp(12px,1.041vw,30px)] md:mr-3">
                  <a href="#">Home</a>
                </li>
                <li className="md:text-[clamp(12px,1.041vw,30px)] md:mr-3">
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
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-center mt-6 md:mt-0">
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

            {/* border-[#9E9E9E] border-b-[1px] last:border-b-0 */}

            <div className="md:hidden flex flex-col items-center space-y-4 mt-6">
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
      </div>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  );
};

export default SDET;
