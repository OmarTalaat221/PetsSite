import React, { useEffect } from "react";
import "./style.css";
import A_letter from "../../../assets/images/a_letter.png";
import fp_dog from "../../../assets/images/findPet_dog.png";
import FindPet from "./../../../pages/FindPet/FindPet";

import AOS from "aos";

const StartFindPet = ({ loading, homeData }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="mb-4">
      {/* <FindPet  /> */}
      <div className="findpet_container">
        <div data-aos="zoom-out" className="fb_content">
          <div className="fp_left_side">
            <div className="image">
              <img src={A_letter} loading="lazy" alt="" />
            </div>
            <div className="fb_jubject ">
              <div className="fb_title">
                {" "}
                <span> Encontré </span>una mascota
              </div>
              <p className="fb_info">
                Ingresa el código RUMP o número de MICROCHIP para identificar y
                ubicar a los resaposables.
              </p>
            </div>
          </div>
          <div className="fp_right_side">
            <div className="fp_dog_image start_page">
              <img src={fp_dog} alt="" />
            </div>
          </div>
          <div className="d-flex align-items-center" onClick={()=>window.location.href = "/findpet"}>
            <div className="fb_abs_btn_start mx-auto">Ingresa el código</div>
          </div>
        </div>
        <div className="d-flex align-items-center"  onClick={()=>window.location.href = "/findpet"}>
          <div className="fb_abs_btn_start_mobile mx-auto">
            Ingresa el código
          </div>
        </div>
      </div>

      <div
        className="stored_pets fs-2 text-center px-3 mt-4 fw-bolder"
        data-aos="fade-up"
      >
        <div className="stored_pets_content">
          <h5 className="text-light fw-semibold fs-1  ">
            {
              <div
                dangerouslySetInnerHTML={{ __html: homeData?.pets_num_txt }}
              />
            }
          </h5>
          <h5 className="fs-2">
            {
              <div
                dangerouslySetInnerHTML={{ __html: homeData?.pets_num_number }}
              />
            }
          </h5>
        </div>
      </div>
    </div>
  );
};

export default StartFindPet;
