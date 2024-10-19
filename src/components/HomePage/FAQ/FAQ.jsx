import React, { useEffect } from 'react'
import { BottomWave1, BottomWave2, BottomWave3, Dog_foot_print } from '../../../assets/svgIcons'
import Bones from '../../../utils/Bones/Bones'
import "./style.css"

import dogFootPrint  from "../../../assets/images/footprint.png"
import dogFootPrint_white  from "../../../assets/images/footprint_white.png"
import black_dog  from "../../../assets/images/black_dog.png"
import QMarks from './../../../utils/questionMarks/QMarks';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import fearCatImage from '../../../assets/images/fear_cat.png'



import AOS from 'aos'





const FAQ = () => {

  useEffect(()=>{
    AOS.init({
      duration:600
    })
  },[])


  return (
    <>
    <div className='FAQ_container'>
      <div data-aos='fade-right' className='fear_cat_image'>
          <img src={fearCatImage} alt="" loading='lazy' />
      </div>
      <div className='bottom_wave'>{BottomWave2}</div>
      <div className='FAQ_title'>
        <div className='testi_bones'>
          <Bones color={"#FBF5E7"} />
        </div>
        <div className='title ch-market'>Preguntas frecuentes </div>
      </div>

      <div className='questions_container'>
      {
        [
          "¿Cómo creo una cuenta en la aplicación de la comunidad de mascotas?",
          "¿Qué área de funciones están disponibles para los dueños de mascotas en la aplicación?",
          "¿Cómo puedo encontrar eventos o reuniones cercanas relacionados con mascotas?",
          "¿Puedo agregar varias mascotas a mi perfil?",
          "¿Cómo me uno a crear grupos o foros relacionados con mascotas?"
        ].map((item , index)=>{
          return <div className='question'>
            <div className='dog_foot_print_image'><img src={dogFootPrint_white} alt="" /></div>
            <div className='question_text'>{item}</div>
          </div>
        })
      }
      </div>

        <div data-aos='fade-down' className='black_dog_image'>
        <div className='' style={{
          position:'absolute',
          top:'120px',
          right:'65%',
          transform:'rotate(-10deg) scale(1.3) '
          
        }}>
        <QMarks />
        </div>
          {/* <img src={black_dog} alt="" /> */}
          <LazyLoadImage src={black_dog}
        alt="Image Alt"
      />
        </div>
    </div>
    
    </>
    
  )
}

export default FAQ
