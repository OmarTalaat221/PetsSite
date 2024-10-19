


import React from 'react'
import trindingImgThree from "../../assets/images/testUserpets/pet_2.png";
import { CheckIcon, ClockIcon, HeartIcon, StarIcon } from './Icons';

import "./style.css";

const PetCard = ({data , onClick}) => {
  const specials = ['Discounted deals', 'Free Cancellations', 'New on Entrada', 'Entrada Specials']
  return (
    <div class="pet_card wallet" onClick={onClick}>
    <div class="pet_overlay"></div>
    <div class="circle">
      <img src={data?.animals[0]?.pet_image} alt="" />
    </div>

      <div className='pet_name'>{data.animals[0]?.f_name} {data.animals[0]?.l_name}</div>
    <div className='card_info'>
     
      <div className='text_data'>
        <h4 className='pet_text'>Sexo</h4>
        <h5 className='pet_data'>{data?.animals[0]?.sex == "male" ? "Macho" : "Hembra"}</h5>
      </div>
      <div className='text_data'>
        <h4 className='pet_text'>¿La mascota está castrada?</h4>
        <h5 className='pet_data'>{data?.animals[0]?.is_sterillized == "true" ? "Si":"No"}</h5>
      </div>
      <div className='text_data'>
        <h4 className='pet_text'>Calificación</h4>
        <h5 className='pet_data'>{data?.animals[0]?.qualified}</h5>
      </div>
      <div className='text_data'>
        <h4 className='pet_text'>Species</h4>
        <h5 className='pet_data'>{data?.animals[0]?.type}</h5>
      </div>
     
      
    </div>


</div>
  )
}

export default PetCard
