import React, { useState, useRef, useEffect } from "react";
import theySay from "../../../assets/images/theySay.png";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css/effect-coverflow";

// import say_1 from "../../../assets/images/say_1.png";
// import say_2 from "../../../assets/images/say_2.png";
// import say_3 from "../../../assets/images/say_3.png";
// import say_4 from "../../../assets/images/say_4.png";
// import say_5 from "../../../assets/images/say_5.png";
import { arrowLeft, arrowRight } from "../../../assets/svgIcons";
import dogAndEarth from "../../../assets/images/dog_catch_earth.png";

import AOS from "aos";

const TheySay = ({ loading, saysData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="TheySayContainer">
      <div className="text-center th_title" data-aos="fade-up">
        <img src={theySay} alt="They Say" />
      </div>

      <div className="they_say_content">
        <div className="ts_left" data-aos="fade-right">
          {saysData&&saysData?.length ? <Swiper
            ref={swiperRef}
            onSlideChange={handleSlideChange}
            initialSlide={activeIndex}
            // grabCursor={true}
            // centeredSlides={true}
            slidesPerView={3}
            spaceBetween={35}
            loop={true}
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
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[ Pagination, Navigation]}
            // coverflowEffect={{
            //   rotate: 10,
            //   stretch: 50,
            //   depth: 200,
            //   modifier: 1,
            // }}
            className="mySwiper"
          >
            {saysData?.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={item.id} style={{height:"340px"}}>
                <div className="th_image_slide" style={{height:"100%"}}>
                  <img src={item?.image} alt={item?.name} style={{height:"100%"}}/>
                </div>
              </SwiperSlide>
            ))}

            <div className="custom-navigation theySay">
              <div className="custom-prev">{arrowLeft}</div>
              <div className="custom-next">{arrowRight}</div>
            </div>
          </Swiper>:null}
        </div>

        <div className="ts_right" data-aos="fade-left">
        {}
          <div className="saying">
            {saysData.find((item, index) => activeIndex === index)?.text_es}
          </div>
          <div className="teller_name">
            {saysData.find((item, index) => +activeIndex === index)?.name}
          </div>
        </div>
      </div>

      <div className="dog_catch_earth_image">
        <img src={dogAndEarth} alt="Dog catching Earth" />
      </div>
    </div>
  );
};

export default TheySay;
