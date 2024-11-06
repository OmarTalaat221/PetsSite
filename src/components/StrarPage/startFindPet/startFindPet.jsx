import React, { useEffect, useState } from "react";
import "./style.css";
import A_letter from "../../../assets/images/a_letter.png";
import fp_dog from "../../../assets/images/findPet_dog.png";
// Removed unused import of FindPet

import AOS from "aos";
import axios from "axios";
import { RingLoader } from "react-spinners";
import PetCard from "./petSearch";
import { Modal } from "antd"; // Import Modal from antd
import "antd/dist/reset.css";

const StartFindPet = ({ loading, homeData }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  const [searchTxt, setSearchTxt] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control Modal visibility

  const searchAnimal = async () => {
    if (!searchTxt.trim()) {
      // Optionally handle empty input
      return;
    }
    setSearchLoading(true);
    try {
      const response = await axios.post(
        "https://camp-coding.site/pets/api/admins/animals/search",
        {
          id: searchTxt,
        }
      );
      setSearchResult(response.data);
      setIsModalVisible(true); // Show Modal on successful search
    } catch (error) {
      console.error("Error searching animal:", error);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSearchResult(null);
  };

  return (
    <div className="">
      {/* <FindPet  /> */}
      <div className="findpet_container">
        <Modal
          title="Detalle de la Mascota"
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
          centered
          width={600}
          destroyOnClose
        >
          {searchResult ? <PetCard data={searchResult[0] || {}} /> : null}
        </Modal>
        <div data-aos="zoom-out" className="fb_content">
          <div className="fp_left_side">
            <div className="image">
              <img src={A_letter} loading="lazy" alt="A Letter" />
            </div>
            <div className="fb_jubject ">
              <div className="fb_title">
                <span>Encontré</span> una mascota
              </div>
              <p className="fb_info">
                Ingresa el código RUMP o número de MICROCHIP para identificar y
                ubicar a los responsables.
              </p>
            </div>
          </div>
          <div className="fp_right_side">
            <div className="fp_dog_image start_page">
              <img src={fp_dog} alt="Find Pet Dog" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <input
              type="text"
              placeholder="Ingresa el código RUMP o MICROCHIP"
              className="search-input"
              onChange={(e) => setSearchTxt(e.target.value)}
              value={searchTxt}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  searchAnimal();
                }
              }}
            />
            {searchLoading ? (
              <RingLoader size={24} color="#36d7b7" />
            ) : (
              <button
                className="fb_abs_btn_start mx-auto"
                onClick={searchAnimal}
              >
                Buscar
              </button>
            )}
          </div>
        </div>

        {/* Removed commented-out mobile search input */}
      </div>

      <div
        className="stored_pets fs-2 text-center px-3 mt-4 fw-bolder"
        data-aos="fade-up"
      >
        <div className="stored_pets_content">
          <h5 className="text-light fw-semibold fs-1">
            <div dangerouslySetInnerHTML={{ __html: homeData?.pets_num_txt }} />
          </h5>
          <h5 className="fs-2">
            <div
              dangerouslySetInnerHTML={{ __html: homeData?.pets_num_number }}
            />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default StartFindPet;
