import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MobileMainSlider = () => {
  return (
    <div>
        
        <div className="main-mobile-slider">
        <Swiper
         modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
         spaceBetween={0}
         slidesPerView={1}
         autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
         loop={true}
         navigation={false}
         pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="hero-image">
              <Image
                className="slider-image"
                alt="nutritrix"
                src={"/gymMobile.png"}
                width={500}
                height={400}
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-image">
              <Image
                className="slider-image"
                alt="nutritrix"
                src={"/gymMobile.png"}
                width={500}
                height={400}
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-image">
              <Image
                className="slider-image"
                alt="nutritrix"
                src={"/gymMobile.png"}
                width={500}
                height={400}
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-image">
              <Image
                className="slider-image"
                alt="nutritrix"
                src={"/gymMobile.png"}
                width={500}
                height={400}
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>        
        </div>
    </div>
  )
}

export default MobileMainSlider