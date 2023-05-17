import React, { useState, useEffect } from "react";
import Image from "next/image";
import LatestDeals from "@/shared/homepage-shared/latest-deals";


const BannerOne = () => {
  return (
    <div className="desktop-banner">
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
    </div>
  );
};

export default BannerOne;
