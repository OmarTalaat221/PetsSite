import './PreguntasFrecuentes.css';
import Accordion from './../../../components/Accordian/Accordian';
import {phone_linear, telegram } from './../../../assets/svgIcons/index';
import axios from 'axios';
import { base_url } from '../../../utils';
import { useEffect, useState } from 'react';

const items = [
    {
      title: '¿Tiene alguna validez?',
      content: 'Claro. Nuestro registro es válido dentro y fuera del Perú, pudiendo incluso viajar con tu mascota por vía terrestre o aérea. Eso sí, cada país tiene sus propias medidas como vacunas, certificados de salud, etc. Por ello te recomendamos asesorarte antes de emprender tu viajes.'
    },
    {
      title: 'WHY IS INSECT PROTEIN MORE EXPENSIVE THAN PROTEIN FROM ANIMAL MEAT?',
      content: 'Insect protein is more expensive due to the higher costs of production and processing, as well as the current scale of production being smaller compared to traditional livestock farming.'
    }
  ];

  
export default function PreguntasFrecuentes() {
 const [contactData , setContactData] = useState({});
 const [faqData , setFaqData] = useState([])  

  function handleGetAll() {
    axios.get(base_url + `/user/get_faqs_site_info`)
    .then(res => {
      if(res.status ==  200) {
        console.log(res.data.faqs);
        setContactData(res.data.contacts);
        setFaqData(res.data.faqs)
      }else {
        console.log("حدث خطأ ما");
      }
    }).catch(e => console.log(e))
  }

  useEffect(() => {
    handleGetAll();
  } , [])
  
  return (
    <div className="flex justify-center p-20 mx-auto align-middle pregunts-container">
      <div className="w-full mx-auto pregunts-box">
        <h2 className="text-4xl font-extrabold text-[#ee701e]">Sobre nuestro registro</h2>
        <Accordion faqsData={faqData} />

        <h3 className="text-center text-[#ee701e] mt-24 font-bold">¿No encontraste lo que buscabas</h3>
      <div className="mt-3 pregunts-contacts-container">
         <div className="flex gap-3 align-middle">
            <div className=" pregunts-contact-icon">{telegram}</div>
            <p className="my-auto contact_text"><a href={`mailto:${contactData?.email}`}>{contactData?.email}</a></p>
         </div>
         <div className="flex gap-3 align-middle">
         <div className=" pregunts-contact-icon">{phone_linear}</div>
         <p className="my-auto contact_text">{contactData?.phone}</p>
         </div>
      </div>
      </div>
    </div>
  )
}

