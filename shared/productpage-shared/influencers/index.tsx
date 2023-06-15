import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SocailMediaIcons from "../social-icons-hover";

const InfluencerSlider = () => {
  return (
    <>
      <div className="influencer-slider">
        <div className="blog-main-heading">
          <h2>WE PRIDE OURSELVES ON HAVE A TEAM OF HIGHLY SKILLED</h2>
        </div>
        <div className="blogs-slider-main">
          <div className="main-slider-offer">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={2}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              navigation={false}
            >
              <SwiperSlide>
                <div className="blog-image">
                  <SocailMediaIcons/>
                  <Image
                    alt="nutritrix"
                    src={"https://i.ibb.co/xSdfDwX/p1.jpg"}
                    width={630}
                    height={800}
                    priority
                  />
                </div>
                <div className="influencer-heading"><h6>VERA DUNCAN</h6>
                  <p>Personal Trainer</p></div>
                <div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-image">
                <SocailMediaIcons/>
                  <Image
                    alt="nutritrix"
                    src={"https://i.ibb.co/PspBdt3/p2.jpg"}
                    width={630}
                    height={800}
                    priority
                  />
                </div>
                <div className="influencer-heading"><h6>ALBERT MCKINNEY</h6>
                  <p>Ceo & Co Founder</p></div>
                <div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-image">
                <SocailMediaIcons/>
                  <Image
                    alt="nutritrix"
                    src={"https://i.ibb.co/2kXs8QX/p3.jpg"}
                    width={630}
                    height={800}
                    priority
                  />
                </div>

                <div className="influencer-heading"><h6>MICHELLA ORE</h6>
                  <p>Personal Trainer</p></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-image">
                <SocailMediaIcons/>
                  <Image
                    alt="nutritrix"
                    src={"https://i.ibb.co/8drRch3/p4.jpg"}
                    width={630}
                    height={800}
                    priority
                  />
                </div>
                <div className="influencer-heading"><h6>JOHN DOE</h6>
                  <p>Personal Trainer</p></div>
                <div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-image">
                <SocailMediaIcons/>
                  <Image
                    alt="nutritrix"
                    src={"https://i.ibb.co/xSdfDwX/p1.jpg"}
                    width={630}
                    height={800}
                    priority
                  />
                </div>
                <div className="influencer-heading"><h6>VERA DUNCAN</h6>
                  <p>Personal Trainer</p></div>
                <div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-image">
                <SocailMediaIcons/>
                  <Image
                    alt="nutritrix"
                    src={"https://i.ibb.co/PspBdt3/p2.jpg"}
                    width={630}
                    height={800}
                    priority
                  />
                </div>
                <div className="influencer-heading"><h6>ALBERT MCKINNEY</h6>
                  <p>Ceo & Co Founder</p></div>
                <div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-image">
                <SocailMediaIcons/>
                  <Image
                    alt="nutritrix"
                    src={"https://i.ibb.co/2kXs8QX/p3.jpg"}
                    width={630}
                    height={800}
                    priority
                  />
                </div>

                <div className="influencer-heading"><h6>MICHELLA ORE</h6>
                  <p>Personal Trainer</p></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-image">
                <SocailMediaIcons/>
                  <Image
                    alt="nutritrix"
                    src={"https://i.ibb.co/8drRch3/p4.jpg"}
                    width={630}
                    height={800}
                    priority
                  />
                </div>
                <div className="influencer-heading"><h6>JOHN DOE</h6>
                  <p>Personal Trainer</p></div>
                <div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerSlider;
