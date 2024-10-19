import React, { useEffect } from "react";
import "./style.css";
import { bigCircle, looped_arrow } from "../../../assets/svgIcons";

import petCard from "../../../assets/images/petCard.png";

import AOS from "aos";

const LoveProof = ({ loading, homeData }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="love_proof_contaienr">
      <div className="love_proof_content">
        <div className="" data-aos="fade-down">
          {<div dangerouslySetInnerHTML={{ __html: homeData?.dni_txt }} />}
          <div className="lp_looped_arrow">{looped_arrow}</div>
        </div>
        <div className="lp_left_right" data-aos="fade-up">
          <div className="prodImage">
            {/* <div className="circle_layout">{bigCircle}</div> */}
            <div className="image">
              <img src={homeData?.dni_image} alt="prod" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveProof;
