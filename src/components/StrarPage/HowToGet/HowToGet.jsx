import React, { useState, useRef, useEffect } from "react";
import {
  arrowLeft,
  arrowRight,
  arrow_animiated,
  bigCircle,
  catEars,
} from "../../../assets/svgIcons";
import "./style.css";

import appImage from "../../../assets/images/RUMP Web icons_Mesa de trabajo 1.png";
import truk from "../../../assets/images/RUMP Web icons-02.png";
import catInBox from "../../../assets/images/RUMP Web icons-03.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

// import "../../HomePage/NotiRump/swiperStyle.css";
import "swiper/css/pagination";

import AOS from "aos";

// import required modules
import {
  A11y,
  Controller,
  Autoplay,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Manipulation,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "swiper/css/effect-coverflow";

import food1 from "../../../assets/images/food_1.png";
import food2 from "../../../assets/images/food_2.png";

const HowToGet = ({ servicesData }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveIndex(swiperRef.current.swiper.activeIndex);
      console.log(swiperRef.current.swiper.activeIndex);
    }
  };

  return (
    <div className="how_to_get_container">
      <div className="how_to_get_content aos-element" data-aos="zoom-in">
        <div className="htg_title">
          <div className="cat_ears">{catEars}</div>
          <div className="title_text">¿Cómo adquirirlo?</div>
        </div>

        <div className="getting_steps ">
          {servicesData.map((e, index) => {
            const isOdd = index % 2 === 1;
            const isLastElement = index === servicesData.length - 1;

            if (isOdd) {
              return (
                <>
                  <div className="animated_arrow arrow_1">
                    {arrow_animiated}
                  </div>

                  <div className="step" data-aos="fade-right">
                    <div className="step_image_container">
                      <div className="curcle_svg">{bigCircle}</div>
                      <div className="image">
                        <img src={truk} alt="" />
                      </div>
                    </div>

                    <div className="step_number">{index + 1}</div>

                    <h4 className="step_name">{e.title_es}</h4>
                    <p className="step_info">{e.description_es}</p>
                  </div>
                  {!isLastElement && (
                    <div className="animated_arrow arrow_2">
                      {arrow_animiated}
                    </div>
                  )}
                </>
              );
            } else {
              return (
                <>
                  <div className="step" data-aos="fade-right">
                    <div className="step_image_container">
                      <div className="curcle_svg">{bigCircle}</div>
                      <div className="image">
                        <img src={truk} alt="" />
                      </div>
                    </div>

                    <div className="step_number">{index + 1}</div>

                    <h4 className="step_name">{e.title_es}</h4>
                    <p className="step_info">{e.description_es}</p>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div className="mobile_swiper ">
          <>
            <Swiper
              onSlideChange={handleSlideChange}
              ref={swiperRef}
              // loopFillGroupWithBlank={true}
              // ------------------------
              // effect={"coverflow"}
              grabCursor={true}
              // centeredSlides={true}
              slidesPerView={1}
              // pagination={true}
              pagination={pagination}
              // spaceBetween={40}
              // loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              // breakpoints={{
              //   0: {
              //     slidesPerView: 1,
              //     spaceBetween: 1,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //     spaceBetween: 1,
              //   },
              //   1024: {
              //     slidesPerView: 3,
              //     spaceBetween: 1,
              //   },
              // }}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              // coverflowEffect={{
              //   rotate: 10,
              //   stretch: 50,
              //   depth: 200,
              //   modifier: 1,
              // }}
              className="mySwiper"
            >
              {servicesData.map((e, index) => (
                <SwiperSlide className="getting_steps">
                  <div className="step">
                    <div className="step_image_container">
                      <div className="curcle_svg">{bigCircle}</div>
                      <div className="image">
                        <img src={truk} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="custom-navigation">
                <div className="custom-prev">{arrowLeft}</div>
                <div className="custom-next">{arrowRight}</div>
              </div>
            </Swiper>
          </>

          <div className="setp_details aos-element" data-aos="flip-right">
            {servicesData.map((e, index) => {
              if (activeIndex === index) {
                return (
                  <div key={index}>
                    <div className="setp_title">{e.title_es}</div>
                    <div className="setp_info">{e.description_es}</div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGet;
