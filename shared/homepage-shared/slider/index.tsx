import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ value }: { value: string }) => {
  return (
    <>
      {value === "VITAMINS & MINERALS" ? (
        <div className="main-slider-offer">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1000}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="hero-image">
                <Image
                  className="slider-image"
                  alt="nutritrix"
                  src="/bannerS1.png"
                  width={700}
                  height={300}
                  priority
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero-image">
                <Image
                  className="slider-image"
                  alt="nutritrix"
                  src="/bannerS2.png"
                  width={700}
                  height={300}
                  priority
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : value === "RECOVERY & REPAIR" ? (
        <div className="offer-img-main">
          <div className="offer-img">
            <Image
              alt="nutritrix"
              src="/offer1.png"
              width={300}
              height={400}
              priority
            />
          </div>
          <div className="offer-img">
            <Image
              alt="nutritrix"
              src="/offer2.png"
              width={300}
              height={400}
              priority
            />
          </div>
          <div className="offer-img">
            <Image
              alt="nutritrix"
              src="/offer3.png"
              width={300}
              height={400}
              priority
            />
          </div>
          <div className="offer-img">
            <Image
              alt="nutritrix"
              src="/offer4.png"
              width={300}
              height={400}
              priority
            />
          </div>
        </div>
      ) : value === "ENERGY & ENDURANCE" ? (
        <div className="main-slider-offer">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1000}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="hero-image">
                <Image
                  className="slider-image"
                  alt="nutritrix"
                  src="/bannerS1.png"
                  width={700}
                  height={300}
                  priority
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero-image">
                <Image
                  className="slider-image"
                  alt="nutritrix"
                  src="/bannerS2.png"
                  width={700}
                  height={300}
                  priority
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : value === "WORKOUT ESSENTIALS" ? (
        ""
      ) : value === "Brands" ? (
        (
          <div className="main-slider-offer">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={7}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              navigation={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="brand-logo-image">
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/6H3KSdV/brandl1.png"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo-image">
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/CnYjd2n/brandl2.png"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo-image">
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/5nfchjR/brandl3.png"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo-image">
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/vhsGXR3/brandl4.png"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo-image">
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/Qnkf5xm/brandl5.png"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo-image">
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/JHBhvjb/brandl6.png"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-logo-image">
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/Xz50dJG/brandl7.png"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )
      ) : value === "TRENDING NOW" ? "" : value === "SIMILAR PRODUCTS" ? "" : (
        <div className="main-slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1000}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="hero-image">
                <Image
                  className="slider-image"
                  alt="nutritrix"
                  src="/gymcover1.jpg"
                  width={1440}
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
                  src="/gymcover1.jpg"
                  width={1440}
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
                  src="/gymcover1.jpg"
                  width={1440}
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
                  src="/gymcover1.jpg"
                  width={1440}
                  height={400}
                  priority
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Slider;
