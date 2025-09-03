import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const Goals = () => {
  return (
    <div className='desktop-goals'>
      <div className="homepage-info-goals">
        <div className="goals-heading">
          <h2>FIND YOUR GOAL</h2>
          <span>
            <ArrowForwardIosIcon width={60} height={60} />
          </span>
        </div>
        <div className="user-goals">
          <div className="user-goals-content">
            <h4>Build Your Strength</h4>
            <h6><span>Get Muscles</span></h6>
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/protein.png"
              width={150}
              height={200}
              priority
            />
          </div>
          <div className="user-goals-content">
            <h4>Build Your Burn</h4>
            <h6><span>Get Cut</span></h6>
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/fatbburner.png"
              width={150}
              height={200}
              priority
            />
          </div>
          <div className="user-goals-content">
            <h4>Build Your Fitness</h4>
            <h6><span>Get Fit</span></h6>
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/creatine.png"
              width={150}
              height={200}
              priority
            />
          </div>
          <div className="user-goals-content">
            <h4>Build Your Performance</h4>
            <h6><span>Get Powerful</span></h6>
            <Image
              alt="nutritrix"
              className="goals-image"
              src="/muscle.png"
              width={150}
              height={200}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
