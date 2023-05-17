import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AdBannerTwoMobile = () => {
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
                        <div className="offer-img">
                            <Image
                            alt="nutritrix"
                            src="/offer2.png"
                            width={1300}
                            height={400}
                            priority
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="offer-img">
                            <Image
                            alt="nutritrix"
                            src="/offer3.png"
                            width={1300}
                            height={400}
                            priority
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="offer-img">
                            <Image
                            alt="nutritrix"
                            src="/offer4.png"
                            width={1300}
                            height={400}
                            priority
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='gray-space'></div>
        </div>
    )
}

export default AdBannerTwoMobile