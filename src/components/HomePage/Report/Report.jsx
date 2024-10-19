import React, { useEffect } from "react";
import {
  BottomWave1,
  BottomWave2,
  BottomWave3,
  Dog_foot_print,
} from "../../../assets/svgIcons";

import streetDog from "../../../assets/images/street_dog.jpg";
import Bones from "../../../utils/Bones/Bones";
import "./style.css";
import {LazyLoadImage} from "react-lazy-load-image-component";
import AOS from "aos"

const Report = () => {

  useEffect(()=>{
      AOS.init({
        duration:600,
      })
  }, [])



  return (
    <div className='report_container'>
      <div className='bottom_wave'>{BottomWave2}</div>

      <div className='report_title'>
        <div className='testi_bones'>
          <Bones color={"#FBF5E7"}/>
        </div>
        <div className='title ch-market'>¿Encontraste una mascota?</div>
      </div>

      <div className='report_content'>
        <div className='left'>
          <div data-aos="fade-right" className='street_dog_image'>
            {/* <img src={streetDog} alt="" /> */}
            <LazyLoadImage src={streetDog} alt='street_dogs' loading='lazy' />
          </div>
        </div>
        <div className='right'>
          <p>
            Ahora puedes ayudar al cambio poniendo de tu parte para disminuir la
            tasa de animales en las calles. Si eres dueño de una mascota, es
            importante que la identifiques. Con RUMP te aseguras de que tu
            consentido siempre volverá a casa. Si has encontrado una mascota,
            con nuestra chapita identificadora puedes reportarla aquí como
            perdida, ayudando a que encuentre a su familia.
          </p>
          <button className="id_button report_btn">REPORTAR</button>

        </div>
      </div>
    </div>
  );
};

export default Report;
