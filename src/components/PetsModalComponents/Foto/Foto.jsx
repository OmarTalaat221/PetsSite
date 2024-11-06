import { useRef, useState } from "react";

import "./style.css";
import { FaAnglesLeft } from "react-icons/fa6";
import noPets from "../../../assets/images/noPets.png";
import { motion } from "framer-motion";

export default function Foto({ setValue, setSelectedTab, newPit, setNewPet }) {
  const fileInputRef = useRef(null);
  const [img, setImg] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setNewPet({ ...newPit, pet_img: file });
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: "-100%" }}
    >
      <div className="foto_page">
        <div>
          <img
            src={!newPit.pet_img ? noPets : URL.createObjectURL(newPit.pet_img)}
          />
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button onClick={handleButtonClick}>Subir</button>
      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={() => setSelectedTab("3")}
      >
        <FaAnglesLeft />
        <span>Atras</span>
      </button>
    </motion.div>
  );
}
