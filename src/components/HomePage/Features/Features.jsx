import React, { useEffect } from "react";
import "./style.css";
import {BottomWave1, TopWave2} from "../../../assets/svgIcons";
import Bones from "../../../utils/Bones/Bones";
import dogBack from "../../../assets/images/dogBack.png";
import feature_1 from "../../../assets/images/features_1-1.png";
import feature_2 from "../../../assets/images/features_1-2.jpg";
import feature_3 from "../../../assets/images/features_4.jpg";
import cat_tail from "../../../assets/images/cat_tail.png";
import {LazyLoadImage} from "react-lazy-load-image-component";

import comm_1 from "../../../assets/images/with_pet_1.jpg";
import comm_2 from "../../../assets/images/with_pet_2.jpg";
import comm_3 from "../../../assets/images/with_pet_3.jpg";


import share_1 from "../../../assets/images/share_pet_1.jpg";
import share_2 from "../../../assets/images/share_pet_2.jpg";
import share_3 from "../../../assets/images/share_pet_3.jpg";



import event_1 from "../../../assets/images/events_pet_1.jpg";
import event_2 from "../../../assets/images/events_pet_2.jpg";
import event_3 from "../../../assets/images/events_pet_3.jpg";


import adoption_1 from "../../../assets/images/pet_adoption.jpg";
import adoption_2 from "../../../assets/images/pet_adoption_1.jpg";
import adoption_3 from "../../../assets/images/pet_adoption_2.jpg";



import AOS from 'aos'


const Features = () => {

  useEffect(()=>{
    AOS.init({
      duration:600,
    })
  }, [])



  return (
    <div className='features_container'>
      <div className='bottom_wave'>{BottomWave1}</div>
      <div data-aos='fade-left' className='dogBack_image'>
        {/* <img src={dogBack} alt="" /> */}
        <LazyLoadImage src={dogBack} alt='Image Alt' />
      </div>
      <div data-aos='fade-right'  className='cat_tail_image'>
        <img src={cat_tail} alt='' />
        {/* <LazyLoadImage src={cat_tail} alt="alt"/> */}
        {/* <LazyLoadImage src={cat_tail}
        alt="Image Alt"
      /> */}
      </div>

      <div className='feature_title'>
        <div className=''>
          {/* <Bones color={"#FF9100"} /> */}
        </div>
        <div className='title ch-market'>Características</div>
      </div>

      <div className='features_content'>

        <div data-aos='fade-right' className='content' style={{direction:'ltr'}}>

          {/*  */}
          <div className='feature_images '>
            <div className='image_1'>
              {/* <img src={feature_1} alt="" /> */}
              <LazyLoadImage src={comm_1} alt='Image Alt' />
            </div>
            <div className='small_images'>
              <div className='image_2'>
                {/* <img src={feature_2} alt="" /> */}
                <LazyLoadImage src={comm_2} alt='Image Alt' />
              </div>
              <div className='image_3'>
                {/* <img src={feature_3} alt="" /> */}
                <LazyLoadImage src={comm_3} alt='Image Alt' />
              </div>
            </div>
          </div>
          <div className='feet_divider'></div>

          <div className='feature_info'>
            <div className='feat_title'>Comunidad y conexiones</div>
            <div className='feat_body'>
                Conoce a tu comunidad y haz conexiones
            </div>
          </div>
        </div>
      

        <div data-aos='fade-left' className='content' style={{direction:'rtl'}}>
          <div className='feature_images'>
            <div className='image_1'>
              {/* <img src={feature_1} alt="" /> */}
              <LazyLoadImage src={share_1} alt='Image Alt' />
            </div>
            <div className='small_images'>
              <div className='image_2'>
                {/* <img src={feature_2} alt="" /> */}
                <LazyLoadImage src={share_2} alt='Image Alt' />
              </div>
              <div className='image_3'>
                {/* <img src={feature_3} alt="" /> */}
                <LazyLoadImage src={share_3} alt='Image Alt' />
              </div>
            </div>
          </div>
          <div className='feet_divider'></div>
          {/*  */}
          <div className='feature_info'>
            <div className='feat_title'>Comparte tus momentos</div>
            <div className='feat_body'>
            comparte tus experiencias y momentos preciosos de la vida de tus mascotas
            </div>
          </div>
        </div>
        <div  data-aos='fade-right' className='content' style={{direction:'ltr'}}>

          {/*  */}
          <div className='feature_images '>
            <div className='image_1'>
              {/* <img src={feature_1} alt="" /> */}
              <LazyLoadImage src={event_1} alt='Image Alt' />
            </div>
            <div className='small_images'>
              <div className='image_2'>
                {/* <img src={feature_2} alt="" /> */}
                <LazyLoadImage src={event_2} alt='Image Alt' />
              </div>
              <div className='image_3'>
                {/* <img src={feature_3} alt="" /> */}
                <LazyLoadImage src={event_3} alt='Image Alt' />
              </div>
            </div>
          </div>
          <div className='feet_divider'></div>

          <div className='feature_info'>
            <div className='feat_title'>eventos y reuniones</div>
            <div className='feat_body'>
            Recibe notificaciones sobre eventos sociales y reuniones
            </div>
          </div>
        </div>
      

        <div  data-aos='fade-left' className='content' style={{direction:'rtl'}}>
          <div className='feature_images'>
            <div className='image_1'>
              {/* <img src={feature_1} alt="" /> */}
              <LazyLoadImage src={adoption_1} alt='Image Alt' />
            </div>
            <div className='small_images'>
              <div className='image_2'>
                {/* <img src={feature_2} alt="" /> */}
                <LazyLoadImage src={adoption_2} alt='Image Alt' />
              </div>
              <div className='image_3'>
                {/* <img src={feature_3} alt="" /> */}
                <LazyLoadImage src={adoption_3} alt='Image Alt' />
              </div>
            </div>
          </div>
          <div className='feet_divider'></div>
          {/*  */}
          <div className='feature_info'>
            <div className='feat_title'>Adopción y más</div>
            <div className='feat_body'>
            Conozca a sus favoritos y comience nuestro viaje de adopción
            </div>
          </div>
        </div>
    

     
      </div>
    </div>
  );
};

export default Features;
