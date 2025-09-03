import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MobileGoals = () => {
    return (
        <div className='mobile-goals'>
            <div className='main-slider-offer'>
                <div className="homepage-info-goals">
                    <div className="goals-heading">
                        <h2>FIND YOUR GOAL</h2>
                        <span>
                            <ArrowForwardIosIcon width={60} height={60} />
                        </span>
                    </div>
                    <div className="user-goals">
                        <Swiper
                            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='gray-space'></div>
        </div>
    )
}

export default MobileGoals