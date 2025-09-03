import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MobileBrands = () => {
    return (
        <>
        <div className='mobile-brands'>
            <div className='brands-main'>
                <div className="brands-heading">
                    <h2>SHOP BY BRANDS</h2>
                    <span className="arrow-span">
                        <ArrowForwardIosIcon className='icon' width={60} height={60} />
                    </span>
                </div>
            </div>
            <div className="main-slider-offer">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                >
                    <SwiperSlide>
                        <div className='mobile-brands-grid'>
                            <div className='mobile-brands-flex'>
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/6H3KSdV/brandl1.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/CnYjd2n/brandl2.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/5nfchjR/brandl3.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        </div>
                        <div  className='mobile-brands-flex'>
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/vhsGXR3/brandl4.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/Qnkf5xm/brandl5.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/JHBhvjb/brandl6.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='mobile-brands-grid'>
                            <div className='mobile-brands-flex'>
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/Xz50dJG/brandl7.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/Xz50dJG/brandl7.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        <div className="brand-logo-image">
                            <Image
                                alt="nutritrix"
                                src="https://i.ibb.co/Xz50dJG/brandl7.png"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </>
    )
}

export default MobileBrands;
