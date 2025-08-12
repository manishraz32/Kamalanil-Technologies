// FeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";
const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center md:justify-start">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
          viewport={{ once: true, amount: 0.1 }}
          src={icon}
          alt={title}
          className="w-[clamp(40px,14.8vw,62px)] h-auto mt-1"
        />
      </div>
      <div className="flex flex-col items-center md:items-start gap-3">
        <h3 className="font-bold text-[#12161F] text-[clamp(16px,4.8vw,20px)] leading-[clamp(24px,7.2vw,30px)] md:text-[clamp(14px,1.39vw,30px)] md:leading-[clamp(16.84px,1.67vw,24.056px)] text-center md:text-start">
          {title}
        </h3>
        <p className="text-[#575757] text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] md:text-[clamp(13px,1.1vw,16px)] md:leading-[137%] font-medium text-center md:text-start">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
