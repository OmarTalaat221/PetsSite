import React from "react";
import "./style.css";

import brackTrueCircel from "../../../assets/images/black true_circle.png";
import {
  healthIcon,
  offersIcon,
  partyicon,
  pawIcon,
  satelliteIcon,
} from "../../../assets/svgIcons";

const RejestrationBenifits = ({ loading, aboutData }) => {
  return (
    <div className="rb_container">
      <div className="rb_content">
        <div className="rb_title">
          <h4 className="text-white">
            Los <span className="text-dark">beneficios</span> de
          </h4>
          <h4 className="text-white">registrarte con nosotros</h4>
        </div>

        <div className="benifits_container">
          {aboutData?.map((item, index) => {
            return (
              <div key={index} className={"benifit"}>
                <div className="image_icon">
                  <div className="image">
                    <img src={brackTrueCircel} alt="" />
                  </div>
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                </div>
                <div className="benifit_content">
                  <div className="benifit_title">{item.title_es}</div>
                  <div className="benifit_info">{item.description_es}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RejestrationBenifits;
