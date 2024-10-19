import React, { useEffect } from "react";
import "./style.css";
// import lostDog from "../../../assets/images/lost_dog.jpg";
import {LazyLoadImage} from "react-lazy-load-image-component";
import lostDog_3 from "../../../assets/images/lost_dog_3.jpg";

import AOS from "aos"

const NoNeedLostPets = () => {


  useEffect(()=>{
    AOS.init({
      duration:600
    })
  },[])

  

  return (
    <div className='no_need_container'>
      <div data-aos ="fade-right" className='left-side'>
        <div className='no_need_image'>
          <LazyLoadImage src={lostDog_3} alt='lost_dog' />
        </div>
      </div>

      <div data-aos ="fade-left" className='no_need_content'>
        <div className='title'>
          <div>No queremos más mascotas perdida</div>
          <div>y decidimos hacer un cambio</div>
        </div>

        <div className='content'>
          <div className='sec_1'>
            Tenemos el registro de mascotas más grande,
          </div>
          <div className='sec_2'>
          pero nosotros no compartiremos
          ni venderemos tus datos 
                    </div>
          <div className='sec_3'>
            RUMP nació a finales de 2018 y ya contamos con más de 200 mil
            mascotitas registradas en todo el Perú.
          </div>
          <div className='sec_4'>
            Nuestro objetivo es reducir la tasa de abandono y usar la tecnología
            para que las mascotas tengan más probabilidades de volver a casa en
            caso de perderse.
          </div>
          <div className='sec_5'>
            El Registro Único de Mascotas del Perú también permite conocer el
            estado actual de la población canina, felina y de otros compañeros
            de vida, asegurando bases sólidas para su control y bienestar.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoNeedLostPets;
