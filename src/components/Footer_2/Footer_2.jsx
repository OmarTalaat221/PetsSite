import React from "react";
import {
  outline_whatsapp_icon,
  facebookc_letter,
  instagram_2,
  tiktok_icon,
} from "../../assets/svgIcons";
import "./style.css";
import logo from "../../assets/images/footer2Logo.png";
import white_logo from "../../assets/images/rump_white_logo.png";

import foterMap from "../../assets/images/footer_map.png";
import {useNavigate} from "react-router-dom";

const Footer_2 = () => {
  const navigate = useNavigate();

  return (
    <div className='Footer2_container'>
      <div className='Footer1_content'>
        <div className='left_side'>
          <div className='logo_image'>
            <img src={white_logo} alt='' />
          </div>
          <div className='icons'>
            <div>{facebookc_letter}</div>
            <div>{instagram_2}</div>
          </div>
          <div className='email' onClick={()=>window.open("mailTo:somosrumpperu@gmail.com", "_blanck")}>somosrumpperu@gmail.com</div>
          <div className='phone' onClick={()=>window.open("tel:+51 992 975 292", "_blanck")}>+51 992 975 292</div>

          {/* <div className="bigbang text-center d-flex align-items-center gap-2">
          <span>Powered by </span><img style={{cursor:"Pointer"}} onClick={(()=>window.open("https://www.its.ae/", "_blanck"))}  alt="BIGBANG ITS" width="60%" height="50%" data-src="https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg" class="branding-2x transparent ls-is-cached lazyloaded" src="https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg" />
          </div> */}
        </div>
        <div className='mid_side'>
          <div className='mid_left'>
            <div className='mid_side_title'>DISCOVER</div>
            <a href=''>Our Misson</a>
            <a href=''>The Science</a>
            <a href=''>Guide to Pet Parenting</a>
          </div>
          <div className='mid_right'>
            <div className='mid_side_title'>ٍSupport</div>
            <a href=''>Shaipping & Returns</a>
            <a href=''>Terms of Service</a>
          </div>
        </div>
        <div className='right_side'>
          <div className='mapImage '>
            <img src={foterMap} alt='' />
          </div>
        </div>
      </div>
      <div className='rump_logo_footer' onClick={() => navigate("/")}>
        <img src={logo} alt='' />
      </div>
      <div className='powerd_by '>
        <div className='bigbang text-center d-flex align-items-center gap-2'>
          <div className='fw-bolder fs-5'>Powered by </div>
          <div className='image'>
            <img
              style={{cursor: "Pointer"}}
              onClick={() => window.open("https://www.its.ae/", "_blanck")}
              alt='BIGBANG ITS'
              width='60%'
              height='50%'
              data-src='https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg'
              class='branding-2x transparent ls-is-cached lazyloaded'
              src='https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_2;
