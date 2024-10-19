import React, {useEffect} from "react";
import rumpLogo from "../../assets/images/logo-orange&white.png";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "./style.css";
import {
  FacebookIcon,
  GmailIcon,
  Instagram,
  PhoneIcon,
  Time_fill_icon,
  TodayIcon,
  Twitter_x,
  WhatsappIcon,
  YoutubeIcon,
  facebook_circular,
  footerWave,
  instagram_2,
  twitter_x2,
  youtube_outlined,
} from "../../assets/svgIcons";

import AOS from "aos";

const Footer = ({bgColor}) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div  data-aos='fade-up' className='fotter-container'>
      <div style={{backgroundColor:bgColor}} className='footer1_topWave'>{footerWave}</div>
      <div className='footer_content'>
        <div className='footer_columns'>
          <div className='column column_1'>
            <div className='logoImage'>
              <LazyLoadImage src={rumpLogo} alt='rump logo' />
            </div>

            <div className=' whatsapp'>
              <div className=' footerIcon whatsappIcon'>{WhatsappIcon}</div>
              <div className='footer_item_text'>
                <a
                  href='https://api.whatsapp.com/send?phone=51992975292&text=Hola,%20estoy%20interesado%20en%20el%20servicio%20*RUMP*.%20'
                  target='_blank'
                >
                  +51 992 975 292
                </a>
              </div>
            </div>

            <div className='phone'>
              <div className=' footerIcon phoneIcon'>{PhoneIcon}</div>
              <div className='footer_item_text'>
                <a
                  href='https://api.whatsapp.com/send?phone=51992975292&text=Hola,%20estoy%20interesado%20en%20el%20servicio%20*RUMP*.%20'
                  target='_blank'
                >
                  +51 992 975 292
                </a>
              </div>
            </div>

            <div className='footer_item_text'>Postas autorizados:</div>
            <div className='footer_item_text'>
              Av. Arenales 230 - Urb. Orrantia - San Isidro
            </div>
            <div className='footer_item_text'>
              Av. Universitaria 6049 - Urb. Sta Luzmila - Comas
            </div>
            <div className='footer_item_text'>
              Av. 2 de octubre MZ D2 Lote 7 - Los Olivos
            </div>
          </div>
          <div className='column column_2'>
            <div className='column_title'>Información</div>
            <div className='gmail'>
              <div className=' footerIcon gmailIcon'>{GmailIcon}</div>
              <div className='footer_item_text'>
                <a href='mailto:worldpetsperu.2210@gmail.com' target='_blank'>
                  worldpetsperu.2210@gmail.com
                </a>
              </div>
            </div>

            <div className='footer_item'>
              <div className='footer_item_title'>Horario de oficina</div>
              <div className='calender'>
                <div className=' footerIcon calenderIcon'>{TodayIcon}</div>
                <div className='footer_item_text'>Lunes a Viernes</div>
              </div>
              <div className='calender'>
                <div className=' footerIcon calenderIcon'>{Time_fill_icon}</div>
                <div className='footer_item_text'>9:00-18:00hrs</div>
              </div>
            </div>

            <div className='footer_item'>
              <div className='footer_item_title'>
                Horario de entrega de Chapitas/DNI
              </div>

              <div className='calender'>
                <div className=' footerIcon calenderIcon'>{Time_fill_icon}</div>
                <div className='footer_item_text'>10:00-17:00hrs</div>
              </div>
            </div>
          </div>

          <div className='column column_3'>
            <div className='column_title'>Links</div>
            <div className='footer_links'>
              <div className='foot_link'>Noticias</div>
              <div className='foot_link'>Mascotas Extraviadas</div>
              <div className='foot_link'>Adóptame</div>
              <div className='foot_link'>Quiénes Somos?</div>
              <div className='foot_link'>Contacto</div>
              <div className='foot_link'> Políticas De Privacidad</div>
            </div>
            <div className='socials'>
              <div className='social_icon'>{facebook_circular}</div>
              <div className='social_icon'>{instagram_2}</div>
              <div className='social_icon'>{twitter_x2}</div>
              <div className='social_icon'>{youtube_outlined}</div>
            </div>
          </div>
        </div>

        <div className='footer_socials'>


          <div className='left'>
            Copyright © 2024 All rights reserved | WorldPetsPeruby RUMP
          </div>

          
        <div className="bigbang text-center d-flex align-items-center gap-2">
          <span>Powered by </span><img style={{cursor:"Pointer"}} onClick={(()=>window.open("https://www.its.ae/", "_blanck"))}  alt="BIGBANG ITS" width="60%" height="50%" data-src="https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg" class="branding-2x transparent ls-is-cached lazyloaded" src="https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg" />
          </div>


          {/* <div className="right">
              <div className="social_icon">
              {FacebookIcon}
              </div>
              <div className="social_icon">
              {Instagram}
              </div>
              <div className="social_icon">
              {Twitter_x}
              </div>
              <div className="social_icon">
              {YoutubeIcon}
              </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
