import React, { useState, useRef } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

// import "../../HomePage/NotiRump/swiperStyle.css";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "swiper/css/effect-coverflow";

import food1 from "../../../assets/images/1.png";
import food2 from "../../../assets/images/2.png";
import food3 from "../../../assets/images/3.png";

import {
  EcoIcon,
  Truck,
  airePlane,
  arrowLeft,
  arrowRight,
  community,
  looped_arrow,
  orangeOval,
  securityIcon,
} from "../../../assets/svgIcons";

import AOS from "aos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//----------------------

const PetFood = ({ featuresData, productsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveIndex(swiperRef.current.swiper.realIndex);
      console.log(swiperRef.current.swiper.realIndex);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="pet_food_container">
      <div className="pet_food_title">
        Evita{" "}
        <span className="arrow">
          que
          <div className="pf_looped_arrow">{looped_arrow}</div>
        </span>{" "}
        tu engreido se pierda{" "}
        <span className="b-border">
          aquí <span className=""></span>
        </span>
      </div>
      {/* {animated_arrow} */}

      <div className="pet_food_swiper" data-aos="zoom-in">
        <>
          <Swiper
            ref={swiperRef}
            onSlideChange={handleSlideChange}
            // loopFillGroupWithBlank={true}
            // ------------------------
            // effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"3"}
            // pagination={true}
            // spaceBetween={40}
            // loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            initialSlide={1}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation]}
            // modules={[EffectCoverflow, Pagination, Navigation]}
            // coverflowEffect={{
            //   rotate: 10,
            //   stretch: 50,
            //   depth: 200,
            //   modifier: 1,
            // }}
            className="mySwiper"
          >
            {productsData.map((item, index) => {
              return (
                <SwiperSlide
                  className="swiper-slide"
                  onClick={() =>
                    navigate(`/productDetails/${item?.id}`, { state: { data: item } })
                  }
                >
                  <div
                    className={`food_card ${
                      index < activeIndex
                        ? "lesThanActive"
                        : index > activeIndex
                        ? "moreThanActive"
                        : ""
                    }`}
                  >
                    <div className="food_slide">
                      <img src={item?.image} alt="" />
                    </div>
                    {/* {+index == +activeIndex && (
                      <div className={"prodName"}>{item.name_es}</div>
                    )} */}
                  </div>
                </SwiperSlide>
              );
            })}

            <div className="custom-navigation pet_food">
              <div className="custom-prev">{arrowLeft}</div>
              <div className="custom-next">{arrowRight}</div>
            </div>

            {/* <div className="custom-prev">{arrowLeft}</div>
          <div className="custom-next">{arrowRight}</div> */}
          </Swiper>
        </>
      </div>

      <div className="Pet_food_bttom">
        {/* <div
          className="oval_button"
          style={{
            position: "relative",
            fill: "rgb(248, 100, 8)",
            cursor: "pointer",
          }}
          onClick={() =>
                    navigate(`/productDetails/${productsData[activeIndex]?.id}`, { state: { data: productsData[activeIndex] } })
                  }
        >
          {orangeOval}
          <div className="oval_btn_text"> Ver productos</div>
        </div> */}

        <div className="feats " data-aos="fade-up">
          {featuresData.map((e) => {
            return (
              <div className="feat_item">
                <div className=""><img src={e?.icon} alt="" /></div>
                <div className="feat_title">{e?.title_es}</div>
                <div className="feat_info">{e?.description_es}</div>
              </div>
            );
          })}


          {/* <div className="feat_item">
            <div className="featIcon">{airePlane}</div>
            <div className="feat_title">Válido en el extranjero</div>
            <div className="feat_info">
              Nuestro registro tiene un alcance nacional e internacional
            </div>
          </div>
          <div className="feat_item">
            <div className="featIcon">{Truck}</div>
            <div className="feat_title">Cerca a ti</div>
            <div className="feat_info">
              Hacemos envíos seguros a todo el Perú a través de empresas aliadas
            </div>
          </div>
          <div className="feat_item">
            <div className="featIcon">{EcoIcon}</div>
            <div className="feat_title">Eco-amigable</div>
            <div className="feat_info">
              Usamos materiales 100% reciclables, reduciendo nuestra huella de
              carbono
            </div>
          </div>
          <div className="feat_item">
            <div className="featIcon">{community}</div>
            <div className="feat_title">Alianzas exclusivas</div>
            <div className="feat_info">
              Obtén descuentos en servicios en cientos de negocios en el Perú
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PetFood;
