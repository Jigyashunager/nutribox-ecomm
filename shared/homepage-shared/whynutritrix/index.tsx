import React, { useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import Rating from "@mui/material/Rating";

const WhyNutritrix = () => {
    const [value, setValue] = useState<number>(5);

    return (
        <div className="desktop-why-nutritrix">
        <div className='main-why-nutritrix'>
            <div>
        <div className='headings-why-nutritrix'>
           <h6>Everything you need to Build Your Strength</h6>
           <h2>EXPERIENCE THE NUTRITX DIFFERENCE</h2> 
        </div>
        <div className='pointers-why-nutritrix'>
            <div className='inside-headings'>
                <div><LocalFloristOutlinedIcon className='pointers-icon'/></div>
                <div>
                <h5>Heritage of Quality</h5>
                <p>Selection of products with exceptional formulations that come from the hand of the best specialists.</p>
                </div>
            </div>
            <div className='inside-headings'>
                <div><SportsMartialArtsOutlinedIcon className='pointers-icon'/></div>
                <div>
                <h5>Nutrition Experts</h5>
                <p>For people who have made a healthy existence their philosophy of life, includes nutritional supplements</p>
                </div>
            </div>
            <div className='inside-headings'>
                <div><PlaylistAddCheckCircleOutlinedIcon className='pointers-icon'/></div>
                <div>
                <h5>Truth in Labeling</h5>
                <p>Reflecting our practical sense, its made up of products that are simple, mostly single-ingredient</p>
                </div>
            </div>
            <div className='inside-headings'>
                <div><LocalDiningOutlinedIcon className='pointers-icon'/></div>
                <div>
                <h5>Unique Formulation</h5>
                <p>Organic products and organic foods, especially for those with a strong preference for natural</p>
                </div>
            </div>
            <div>
                <button>LEARN MORE</button>
            </div>
        </div>
        </div>
        <div className='reviews-main'>
        <div className="main-slider-offer">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation={false}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
            <div className='review'>
                <Rating className='review-rating'    value={value}
                    readOnly/>
                <h5>Excellent Service</h5>
                <h6>Karan Arora/<span>Gym Mod</span></h6>
                <p>
                You guys rock! Not able to tell you how happy I am with shop nutrition. Shop nutrition is exactly what our business has been lacking. I love your system. I would be lost without shop nutrition. I do not know what else to say. Wow what great service!
                </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='review'>
                <Rating className='review-rating'    value={value}
                    readOnly/>
                <h5>Excellent Service</h5>
                <h6>Karan Arora/<span>Gym Mod</span></h6>
                <p>
                You guys rock! Not able to tell you how happy I am with shop nutrition. Shop nutrition is exactly what our business has been lacking. I love your system. I would be lost without shop nutrition. I do not know what else to say. Wow what great service!
                </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='review'>
                <Rating className='review-rating'    value={value}
                    readOnly/>
                <h5>Excellent Service</h5>
                <h6>Karan Arora/<span>Gym Mod</span></h6>
                <p>
                You guys rock! Not able to tell you how happy I am with shop nutrition. Shop nutrition is exactly what our business has been lacking. I love your system. I would be lost without shop nutrition. I do not know what else to say. Wow what great service!
                </p>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
        </div>
        </div>
    )
}

export default WhyNutritrix
