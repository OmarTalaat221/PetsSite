import React from "react";
import "./style.css";

import rump_logos from "../../../assets/images/rump_logos.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import logo_1 from "../../../assets/images/logo_1.png";
import logo_2 from "../../../assets/images/logo_2.png";
import { arrowLeft, arrowRight } from "../../../assets/svgIcons";
import { LazyLoadImage } from "react-lazy-load-image-component";

const EndSection = ({ loading, brandsData }) => {
  return (
    <div className="end_section_container">
      <div className=" fs-4 fw-bolder  text-center text_orange">
        La seguridad de tu engreido está <span className="text-dark">aquí</span>
      </div>
      <div className="rump_logos">
        <>
          <Swiper
            loop={true}
            grabCursor={true}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {brandsData.map((e) => (
              <SwiperSlide className="">
                <div className="image">
                  <img src={e.image} alt="" />
                </div>
              </SwiperSlide>
            ))}

            <div className="custom-navigation">
              <div className="custom-prev">{arrowLeft}</div>
              <div className="custom-next">{arrowRight}</div>
            </div>
          </Swiper>
        </>

        {/* <div className='image'>
          <img src={} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default EndSection;
