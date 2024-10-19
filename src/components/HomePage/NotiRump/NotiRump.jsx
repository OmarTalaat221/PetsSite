import React, { useEffect } from "react";
import "./style.css";
import {
  ArrowRight2,
  BackArrow,
  BottomWave1,
  arrowLeft,
  arrowRight,
  backIcon,
} from "../../../assets/svgIcons";
import dog from "../../../assets/images/small_dog.jpg";
import notiRump from "../../../assets/images/notirump.png";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

import "./swiperStyle.css";
import "swiper/css/pagination";

// import required modules
import {Pagination, Navigation, Autoplay} from "swiper/modules";
import {LazyLoadImage} from "react-lazy-load-image-component";

import noti_1 from "../../../assets/images/noti_1.jpg";
import noti_2 from "../../../assets/images/noti_2.jpg";
import noti_3 from "../../../assets/images/noti_3.jpg";
import noti_4 from "../../../assets/images/noti_4.jpg";
import noti_5 from "../../../assets/images/noti_5.jpg";

import AOS from "aos"

const NotiRump = () => {

  useEffect(()=>{
    AOS.init({
      duration:600
    })

  }, [])



  return (
    <div className='notiRump_container'>
      <div className='bottom_wave'>{BottomWave1}</div>

      <div data-aos='flip-right' className='title_image'>
        <LazyLoadImage loading='lazy' src={notiRump} alt='' />
      </div>

      <div className='noti_swiper'>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
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
                spaceBetween: 1,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className='mySwiper'
          >
            {[
              {
                image: noti_1,
                type: "General",
                title: "Sobrepoblación de perros y gatos",
                content:
                  "Nuestro problema y responsabilidad, la sobrepoblación de perros y gatos",
              },
              {
                image: noti_2,
                type: "Perros",
                title: "El mejor perro para ti según tu personalidad",
                content:
                  "En muchas ocasiones, al buscar un perro para adoptar, nos dejamos llevar por la ternura y el cariño. También ocurre que las personas desean por estética o moda un perro u otro. Pero no debemos dejarnos llevar por esos instintos, debemos ser racionales...",
              },
              {
                image: noti_3,
                type: "Gatos",
                title: "¿Cascabel para el gato? ¡No!",
                content:
                  "¿Sabían que los gatos perciben el sonido 3 veces más que los humanos?",
              },
              {
                image: noti_4,
                type: "General",
                title: "¿Preparado para adoptar?",
                content: "Responde a estas 5 preguntas antes de adoptar",
              },
              {
                image: noti_5,
                type: "Gatos",
                title: "Los tipos de gato más cariñosos",
                content: `Quienes tenemos un amigo felino en casa sabemos que son animales que dan cariño
más cuando ellos quieren que cuando nosotros lo buscamos.`,
              },
            ].map((item, key) => {
              return (
                <SwiperSlide>
                  <div className='noti_card'>
                    <img src={item.image} alt='' />
                    <div className='noti_details'>
                      <div className='animal_type_title'>
                        <h4 className='animal_type'>{item.type}</h4>
                        <h3 className='noti_title'>{item.title} </h3>
                      </div>
                    </div>

                    <div className=' noti_details animated_noti'>
                      <div className='animal_type_title'>
                        <h4 className='animal_type'>{item.type}</h4>
                        <h3 className='noti_title'>{item.title}</h3>
                      </div>

                      <div className='noti_content'>
                        <p>
                         {item.content}
                        </p>
                      </div>

                      <div className='get_it'>Get into</div>

                      {/*

                        
                        */}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* <div className="custom-prev">{arrowLeft}</div>
          <div className="custom-next">{arrowRight}</div> */}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default NotiRump;

/**
 
     <div className="noti_swiper">
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={5}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 3,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              }}

              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              modules={[Pagination, Navigation, Autoplay]}
              className='mySwiper'
            >

              {
                Array(4).fill(0).map((item, key)=>{
                  return(
                  <SwiperSlide>
                    <div className="noti_card" >
                      <img src={dog} alt='' />
                      <div className="noti_details">
                        <div className="animal_type_title">
                          <h4 className="animal_type">Cat</h4>
                          <h3 className="noti_title">Ready to adoptdsfsdf ds  </h3>
                        </div>
                        <div className="noti_content">
                        <p>sdfdsf dsnjk fnkdnsk fnd kns fdjnskfn dksnjfndksj ndfksn fjkdskn f</p>
                          <button className="orange_btn get_it">Get into</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  )
                })
              }
              <div className="custom-prev">{arrowLeft}</div>
          <div className="custom-next">{arrowRight}</div>
            </Swiper>
          </>
        
        </div>




 */
