import React, { useEffect } from "react";

import image from "../../../assets/images/ownerShip.png";
import "./style.css";
import { orangeOval, ovalIcon2 } from "../../../assets/svgIcons";

import AOS from "aos";

import peruMap from "../../../assets/images/peruMap_no_bg.png";

const OwnerShip = ({ loading, homeData }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="ownership_container">
      <div className="ownership_content">
        <div className="os_left_side" data-aos="fade-right">
          <div className="image">
            <img src={homeData?.propiedad_image} alt="" />
          </div>
        </div>
        <div className="os_right_side" data-aos="fade-left">
          {
            <div
            style={{marginTop:"20px"}}
              dangerouslySetInnerHTML={{ __html: homeData?.propiedad_title }}
            />
          }
          {
            <div
            style={{marginTop:"20px"}}
              dangerouslySetInnerHTML={{ __html: homeData?.propiedad_txt }}
            />
          }
          <div
            className="oval_button os_oval"
            style={{
              position: "relative",
              fill: "rgb(248, 100, 8)",
            }}
          >
            {ovalIcon2}

            <div className="oval_btn_text" onClick={()=>window.location.href = "/about"}>Nuestra misión</div>
          </div>
        </div>
      </div>

      <div className="peru_map_image">
        <img src={peruMap} alt="" />
      </div>
    </div>
  );
};

export default OwnerShip;
