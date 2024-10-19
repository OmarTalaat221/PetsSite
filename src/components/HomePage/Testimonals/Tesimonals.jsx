import React, { useEffect } from "react";
import "./style.css";
import {BottomWave1, BottomWave2, BottomWhiteWave, QouteLeft, QouteRight} from "../../../assets/svgIcons";
import Bones from "../../../utils/Bones/Bones";
import user_1 from "../../../assets/images/user_1.jpg";
import user_2 from "../../../assets/images/user_2.jpg";
import user_4 from "../../../assets/images/user_4.jpg";
import user_5 from "../../../assets/images/user_5.jpg";
import catFoots from "../../../assets/images/cat_foots.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AOS from 'aos'

const Tesimonals = () => {
  useEffect(()=>{
    AOS.init({
      duration:600,
    })
  },[])

  return (
    <div className='testimonals_container'>
      <div className='bottom_wave'>{BottomWhiteWave}</div>

      <div data-aos='fade-left' className='cat_foots_image'>
          <img src={catFoots} alt="" loading='lazy' />
      </div>

      <div className='testimonal_title'>
        <div className='testi_bones'>
          <Bones color={"#FF9100"} extraClassName={''} />
        </div>
        <div className='title ch-market'>Testimonios</div>
      </div>

      <div data-aos='fade-right' className='testimonials' >
        <div className='testi'>
          <div className='user_image'>
            {/* <img src={user_1} alt='' /> */}
            <LazyLoadImage  src={user_4}
        alt="Image Alt"
      />
          </div>
          <div className='testi_divider'></div>
          <div className='testi_content'>
            <div className="testi_body">
              <div  className="testi_comma">{QouteLeft}</div>
              Es el cliente que lleva tiempo bombeándose y nadie se siente más cómodo. El contenido personal es increíble y la selección de los productos más caros para mascarillas es fantástica. Un poco, Max, puede comerse tu comida. ¡Recomiende encarecidamente a Rump por sus productos de primera calidad y su increíble servicio!
            </div>
              <h4 className="testi_user_name">Dhruva</h4>
              <h4 className="testi_user_slogan">Madre de Simbha</h4>
          </div>
           
        </div>
      </div>
      <div data-aos='fade-left' className='testimonials' style={{direction:'rtl'}}>
        <div className='testi'>
          <div className='user_image'>
            {/* <img src={user_2} alt='' /> */}
            <LazyLoadImage  src={user_5}
        alt="Image Alt"
      />
          </div>
          <div className='testi_divider'></div>
          <div className='testi_content'>
            <div className="testi_body">
              <div className="testi_comma" >{QouteLeft}</div>
              ¡Rump es mi lugar de referencia para todas mis necesidades de mascotas! La propiedad personal se preocupa por los animales y, por elección, con diferentes productos granulados y una variedad de opciones disponibles. De esto se trata el proceso de adopción de mi portón, Luna, combustible fluido y sin estrés. ¡Gracias apoyo, Luna se sintió en casa de mediato!
              <div className="testi_comma" >{QouteRight}</div>
            </div>
              <h4 className="testi_user_name">John</h4>
              <h4 className="testi_user_slogan">Aspirante a dueño de una mascota</h4>
          </div>
           
        </div>
      </div>

    </div>
  );
};

export default Tesimonals;
