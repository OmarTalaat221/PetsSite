import React, { useState } from "react";

import logo from "../../assets/images/logo-orange.png";
import HoverDropdown from "./../HoverDropdown/HoverDropdown";
import { collapse_btn } from "../../assets/svgIcons";
import LeftSide from "../LeftSideBar/LeftSide";
import { Link, useNavigate } from "react-router-dom";

const Header_2 = ({bgColor}) => {


  const [openSideNav , setOpenSideNav] = useState(false)
  const navigate = useNavigate();
  

  return (
    <>
    <div className='header2_container'>
    Registro Único de Mascotas del Perú 🐶 🐱
      </div>
    </>


  );
};

export default Header_2;
