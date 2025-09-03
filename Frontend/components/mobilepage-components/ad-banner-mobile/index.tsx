import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AdBannerMobile = () => {
    return (
        <div>

            <div className="mobile-banner">
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
                        <div className="image-container">
                            <Image
                                alt="nutritrix"
                                className="banner-ad-three"
                                src="/banner1.jpg"
                                width={1300}
                                height={270}
                                priority
                            />
                        </div>
                        <div className='bannner-ad-three-content'>
                            <h5>TOP PRODUCTS</h5>
                            <h6>TRUE STRENGTH OF WHEY</h6>
                            <button>SHOP NOW</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <Image
                                alt="nutritrix"
                                className="banner-ad-three"
                                src="/banner2.jpg"
                                width={1300}
                                height={270}
                                priority
                            />
                        </div>
                        <div className='bannner-ad-three-content'>
                            <h5>SAVING PLAN</h5>
                            <h6>15% OFF ALL PRODUCTS</h6>
                            <button>SHOP NOW</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <Image
                                alt="nutritrix"
                                className="banner-ad-three"
                                src="/banner3.jpg"
                                width={1300}
                                height={270}
                                priority
                            />
                        </div>
                        <div className='bannner-ad-three-content-3'>
                            <h5>BUILD UP MUSCLE</h5>
                            <h6>PROTIEN POWDER COLLECTION</h6>
                            <button>SHOP NOW</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='gray-space'></div>
        </div>
    )
}

export default AdBannerMobile