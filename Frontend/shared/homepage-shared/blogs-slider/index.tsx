import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BlogSlider = () => {
  return (
    <div className="desktop-blogs">
     <div className="blog-main-heading">
          <h2>HELPFUL TIPS & TRICKS</h2>
          <span>
            <ArrowForwardIosIcon width={60} height={60} />
          </span>
        </div>
      <div className="blogs-slider-main">
        <div className="main-slider-offer">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation={false}
          >
            <SwiperSlide>
              <div className="blog-image">
                <Image
                  alt="nutritrix"
                  src="/blog1.jpeg"
                  width={370}
                  height={250}
                  priority
                />
              </div>
              <div>
                <h6>NUTRITION TIPS</h6>
                <div className="blog-slider-heading">
                  <h4>THE TOTAL GUIDE TO ADAPTOGENIC SUPPLEMENTS AND HERBS</h4>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-image">
                <Image
                  alt="nutritrix"
                  src="/blog2.jpeg"
                  width={370}
                  height={250}
                  priority
                />
              </div>
              <div>
                <h6>ENTERTAINMENT</h6>
                <div className="blog-slider-heading">
                  <h4>THE TOTAL GUIDE TO ADAPTOGENIC SUPPLEMENTS AND HERBS</h4>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-image">
                <Image
                  alt="nutritrix"
                  src="/blog4.jpeg"
                  width={370}
                  height={250}
                  priority
                />
              </div>
              <div className="blog-slider-heading">
                <h6>LIFESTYLE</h6>
                <div>
                  <h4>THE TOTAL GUIDE TO ADAPTOGENIC SUPPLEMENTS AND HERBS</h4>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-image">
                <Image
                  alt="nutritrix"
                  src="/blog4.jpeg"
                  width={370}
                  height={250}
                  priority
                />
              </div>
              <div>
                <h6>LIFESTYLE</h6>
                <div className="blog-slider-heading">
                  <h4>THE TOTAL GUIDE TO ADAPTOGENIC SUPPLEMENTS AND HERBS</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
