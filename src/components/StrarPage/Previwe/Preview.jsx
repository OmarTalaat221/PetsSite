import React, { useEffect } from "react";
import "./style.css";

import image from "../../../assets/images/start_iamge_1.png";
import { orangeOval } from "../../../assets/svgIcons";

import AOS from "aos";
import { arrowInblack } from "../../AboutUsPage/AboutBanner/AboutBanner";

const Preview = ({ loading, homeData }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  const handleScroll = () => {
    window.scrollBy({
      top: 500,
      left: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  };

  return (
    <div
      className="prev_container"
      style={{ backgroundImage: `url(${homeData?.banner_img})` }}
    >
      <div className="scroll_arrow" onClick={() => handleScroll()}>
        {arrowInblack}
      </div>
      <div className="layout"></div>
      <div className="prev_content">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="">
          {<div dangerouslySetInnerHTML={{ __html: homeData?.banner_txt }} />}
        </div>

        <div className="oval_btns">
          {localStorage.getItem("petsUser") ? (
            <></>
          ) : (
            <>
              <div
                className="oval_button"
                style={{
                  position: "relative",
                  fill: "rgb(248, 100, 8)",
                }}
              >
                {orangeOval}
                <div className="oval_btn_text">Registrar...</div>
              </div>
              
              <div
                className="oval_button"
                style={{
                  position: "relative",
                  fill: "#afdff9",
                }}
              >
                {orangeOval}
                <div className="oval_btn_text text-dark">Encontré...</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
