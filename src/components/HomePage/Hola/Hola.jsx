import React, { useEffect } from "react";
import "./style.css";
import funnyDog from '../../../assets/images/funny_dog.png'
import { DashedLine1, Vortex } from './../../../assets/svgIcons/index';

import dottedLine from "../../../assets/images/dotted_circle.png"

import AOS from 'aos';
import { useNavigate } from "react-router-dom";

const Hola = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Duration of animation in milliseconds
    });
  }, []);

  const navigate = useNavigate()


  return (
    <div className='hola_container'>
      <div  data-aos="fade-right" className='hola_content '>
        <h4 className='ch-market'>¡Hola!</h4>
        <h3 className='ch-market'>¿Quieres ser amigas?</h3>
        <h5>1er Servicio profesional de registro de mascotas en el Perú</h5>
        <div className='orange_btn' onClick={()=> navigate("/start")}>Conócenos Más</div>
      </div>
      <div data-aos="fade-left" className="dashedLine1">
        <img src={dottedLine} alt="" />
      </div>
      <div  data-aos="fade-left" className="funny_dog_image">
        <img src={funnyDog} alt="" />
      </div>
    </div>
  );
};

export default Hola;
