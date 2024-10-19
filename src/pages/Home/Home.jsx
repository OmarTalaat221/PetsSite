import React, {useEffect} from "react";
import styles from "./Home.module.css";
import {BottomWave1, BottomWave4} from "../../assets/svgIcons/index";
import "./style.css";
import Features from "./../../components/HomePage/Features/Features";
import Tesimonals from "../../components/HomePage/Testimonals/Tesimonals";
import FAQ from "./../../components/HomePage/FAQ/FAQ";
import DownloadApp from "../../components/HomePage/downloadApp/DownloadApp";
import Report from "../../components/HomePage/Report/Report";
import Hola from "../../components/HomePage/Hola/Hola";
import NotiRump from "../../components/HomePage/NotiRump/NotiRump";
import FeedBack from "./FeedBack/FeedBack";

import AOS from "aos";
import Contact from "../Contact/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600, // Duration of animation in milliseconds
    });
  }, []);

  return (
    <div className=' bg-[#FBF5E7] overflow-hidden'>
      <Hola />

      <div className={`${styles.about} pt-0  aboutUs_container `}>
        {BottomWave4}
        <div className='flex gap-2 align-middle justify-center px-10'>
          <img
            loading='lazy'
            src='/Screenshot_2024-06-01_122008-removebg-preview.png'
            className='w-10 h-10'
            alt='img'
          />
          <div>
            <h2 className='text-4xl text-white tracking-wider aboutUs_title ch-market'>
              ¿Quiénes Somos?
            </h2>
          </div>
        </div>
        <div
          className='flex gap-5 justify-between '
          style={{marginTop: "20px"}}
        >
          <div className='aboutUs_catImage' style={{width: "100%"}}>
            <img
              data-aos='fade-right'
              loading='lazy'
              src='/cat.png'
              className='w-[400px] aboutUs_image'
            />
          </div>
          <div className='text-white aboutUs_conent'>
            <p className=''>
              Somos un servicio profesional de identificación de mascotas, el
              cual permite conocer el estado actual de la población canina,
              felina y otros compañeros de vida. De esta manera podemos trabajar
              sobre bases sólidas en su control.Proporcionamos servicios a todo
              el Perú gracias a nuestros más de 300 convenios con
              establecimientos para mascotas donde pueden acercarse para
              identificar a sus mascotas. La tranquilidad y el bienestar de las
              mascotas son nuestra prioridad. Buscamos formar una comunidad
              responsable y comprometida para así hacer escuchar a los que no
              tienen voz además perseguimos el objetivo de disminuir la tasa de
              mascotas abandonadas en nuestro país.
            </p>

            <button className='id_button aboutUs_btn'>
              Solicita ahora tu sistema de identificación
            </button>
          </div>
        </div>
      </div>
      <Features />
      <Report />
      <NotiRump />
      <Tesimonals />
      <FAQ />
      {/* <DownloadApp />  */}
      <FeedBack />

      {/*
       */}
    </div>
  );
}
