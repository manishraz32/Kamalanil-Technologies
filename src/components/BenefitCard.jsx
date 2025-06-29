// FeatureCard.jsx
import React from "react";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center">
        <img
          src={icon}
          alt={title}
          className="w-[clamp(40px,14.8vw,62px)] h-auto mt-1"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-[#12161F] text-[clamp(16px,4.8vw,20px)] leading-[clamp(24px,7.2vw,30px)] text-center">
          {title}
        </h3>
        <p className="text-[#575757] text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] font-medium text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
