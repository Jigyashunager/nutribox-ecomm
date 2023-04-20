import React, { useState, useEffect } from "react";
import Image from "next/image";
import LatestDeals from "@/shared/homepage-shared/latest-deals";


const Banner = () => {
  return (
    <>
    <div className="banner">
        <Image
            alt="nutritrix"
            className="banner-ad"
            src="/banner.png"
            width={1270}
            height={220}
            priority
          />
      </div>
      <LatestDeals/>
    <div className="banner-three">
      <div>
      <div className="image-container">
        <Image
            alt="nutritrix"
            className="banner-ad-three"
            src="/banner1.jpg"
            width={400}
            height={270}
            priority
          />
      </div>
          <div className='bannner-ad-three-content'>
            <h5>TOP PRODUCTS</h5>
            <h6>TRUE STRENGTH OF WHEY</h6>
            <button>SHOP NOW</button>
          </div>
      </div>
      <div>
      <div className="image-container">
        <Image
            alt="nutritrix"
            className="banner-ad-three"
            src="/banner2.jpg"
            width={400}
            height={270}
            priority
          />
        </div>
          <div className='bannner-ad-three-content'>
            <h5>SAVING PLAN</h5>
            <h6>15% OFF ALL PRODUCTS</h6>
            <button>SHOP NOW</button>
          </div>
      </div>
      <div>
      <div className="image-container">
        <Image
            alt="nutritrix"
            className="banner-ad-three"
            src="/banner3.jpg"
            width={400}
            height={270}
            priority
          />
      </div>
          <div className='bannner-ad-three-content-3'>
            <h5>BUILD UP MUSCLE</h5>
            <h6>PROTIEN POWDER COLLECTION</h6>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
