import React from "react";
import {
  behance,
  earth,
  facebook_circular,
  footerWave,
  instagram_2,
  twitter_x2,
} from "../../assets/svgIcons";

import logo from "../../assets/images/logo-orange&white.png";


import "./style.css"

const Footer_1 = ({bgColor}) => {
  return (
    <div className='footer1_container'>
      <div style={{backgroundColor:bgColor}} className="footer1_topWave">{footerWave}</div>


      <div className="footer1_content">


      <div className='footer1_header'>
        <div className='footer1_logo'>
          <img src={logo} alt='' />
        </div>
        <div className='socials'>
          <div className='icon'>{facebook_circular}</div>
          <div className='icon'>{instagram_2}</div>
          <div className='icon'>{earth}</div>
          <div className='icon'>{behance}</div>
          <div className='icon'>{twitter_x2}</div>
        </div>
      </div>

      <div className="footer1_columns">
        <div className="column">
          <div className="col_item">
            About
          </div>
          <div className="col_item">
            services
          </div>
        </div>
        <div className="column">
          <div className="col_item">
            Pet
          </div>
          <div className="col_item">
            Contact
          </div>
        </div>
        <div className="column">
          <div className="col_item">
            Jops
          </div>
          <div className="col_item">
            Feedback
          </div>
        </div>
        <div className="column">
          <div className="col_item">
            Collection
          </div>
          <div className="col_item">
            Pet care
          </div>
        </div>
        <div className="column">
          <div className="col_item">
            Privacy Policy
          </div>
          <div className="col_item">
            FAQ
          </div>
        </div>
      </div>

      <div className='footer1_copyRight'>
      Copyright © 2024 All rights reserved | WorldPetsPeruby RUMP
      </div>


    </div>
    </div>

  );
};

export default Footer_1;
