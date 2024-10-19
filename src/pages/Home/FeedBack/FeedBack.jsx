import React, { useEffect } from "react";

import "./style.css";

import {Swiper, SwiperSlide} from "swiper/react";
import user from "../../../assets/images/user_3.jpg";
import user2 from "../../../assets/images/user_4.jpg";
import user3 from "../../../assets/images/user_5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper/modules";
import { BottomWave1 } from "../../../assets/svgIcons";
import { LazyLoadImage } from 'react-lazy-load-image-component';


import AOS from 'aos'

const FeedBack = () => {

  useEffect(()=>{
    AOS.init({
      duration:600
    })
  },[])



  return (
    <div className='feedback_container'>
    <div className='bottom_wave' >{BottomWave1}</div>
    <div className={'feedback_content'}>
        <div  data-aos='fade-right' className='left'>
          <div className='feedback_title'>
            <div className=' title title_1'>cual es nuestro
            </div>
            <div className='title title_2'>
            <span> Los clientes   </span>dicen
            </div>
          </div>
          <p>Estamos siempre atentos no solo al servicio de mascotas.</p>
          <p>sino también al servicio a los clientes.</p>
          <button className='feedback_btn'>Enviar comentarios</button>
        </div>
        <div data-aos='fade-left' className='right'>
          <Swiper
            pagination={{
              clickable: true,
              // renderBullet: function (index, className) {
              //   return '<span class="' + className + '">' + + '</span>';
              // },
            }}
            modules={[Pagination]}
            className='mySwiper feedback_swiper'
          >
            {
                [

                  {
                  image:user,
                  name:'Mario Juan',
                  feedback:'He sido cliente de Rump durante más de un año. El personal es increíblemente conocedor y mi perro, Max, adora sus golosinas.'
                },
                  {
                  image:user2,
                  name:'Dhruva',
                  feedback:'Rump es mi tienda de mascotas favorita. Adopté a mi gatita, Luna, y el proceso fue muy fácil gracias a su apoyo'
                },
                  {
                  image:user3,
                  name:'John',
                  feedback:'Rump tiene una excelente selección de productos de alta calidad. Mis mascotas siempre están felices con sus compras'
                },
                ].map((item, index) => {
                return (
                  <SwiperSlide>
                    <div
                      className='feedback_card'
                      style={{height: "200px", width: "100%"}}
                    >
                      <div className='user_data'>
                        <div className='user_image'>
                          <img loading="lazy" src={item.image} alt='' />
                          
                        </div>

                        <div className='user_name'>{item.name}</div>
                      </div>
                        <div className='user_feedback'>
                            {item.feedback}
                          
                        </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

    </div>

    </div>
  );
};

export default FeedBack;
