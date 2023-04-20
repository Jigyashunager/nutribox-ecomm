import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const PopularCategories = () => {
  return (
    <>
      <div className="homepage-popular-categories">
        <div className="popular-categories-heading">
          <h2>POPULAR CATEGORIES</h2>
          <span>
            <ArrowForwardIosIcon width={60} height={60} />
          </span>
        </div>
        <div className="popular-categories">
          <div className="popular-categories-content">
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/proteinp.png"
              width={100}
              height={130}
              priority
            />
            <h6>Protein</h6>
          </div>
          <div className="popular-categories-content">
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/fatp.png"
              width={100}
              height={130}
              priority
            />
            <h6>Fat Burners</h6>
          </div>
          <div className="popular-categories-content">
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/musclep.png"
              width={100}
              height={130}
              priority
            />
            <h6>Muscle Builders</h6>
          </div>
          <div className="popular-categories-content">
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/creatinep.png"
              width={100}
              height={130}
              priority
            />
            <h6>Recovery</h6>
          </div>
          <div className="popular-categories-content">
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/vitamin.png"
              width={100}
              height={130}
              priority
            />
            <h6>Vitamins & Health</h6>
          </div>
          <div className="popular-categories-content">
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/recovery.png"
              width={100}
              height={130}
              priority
            />
            <h6>Creatine</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
