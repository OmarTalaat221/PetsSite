import React, {useEffect, useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import logo from "../../assets/images/logo-orange.png";
import {
  Cart_filled,
  Heart,
  LoginIcon,
  Phone_outlined,
  WhatsappIcon,
  Whatsapp_outlined,
  login2Icon,
  loging_placeholder,
  BlackHeaderCircle,
  orange_login_curcle,
  HeaderCart,
} from "../../assets/svgIcons";

import pureLogo from "../../assets/images/pureLogo.png";

import "./style.css";
import {useNavigate} from "react-router-dom";
import HoverDropdown from "../HoverDropdown/HoverDropdown";
import LeftSide from "../LeftSideBar/LeftSide";
import Cart from './../Cart/Cart';

const Header_1 = ({bgColor}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openDrawer]);

  const handleLogin = () => {
    if (localStorage.getItem("petsUser")) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };



  return (
    <div className='header1_container'>
      <LeftSide open={openDrawer} setOpen={setOpenDrawer} />

      <div className='header_1_content'>
        {/* <div></div> */}
        <div
          className={`left_side_btn ${openDrawer ? "open" : ""}`}
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
        >
          {BlackHeaderCircle}
        </div>
        <div className='header1_image' onClick={() => navigate("/")}>
          <img src={pureLogo} alt='' />
        </div>
        <div className='header1_right_side'>
          <div className='header_help'>HELP</div>
          <div className='Login' onClick={() => handleLogin()}>
            {orange_login_curcle}
          </div>
          <div className='cart' onClick={()=> setOpenCart(true)}>{HeaderCart}</div>
        </div>
      </div>
      <Cart  openCart={openCart} setOpenCart={setOpenCart}/>
    </div>
  );
};

export default Header_1;
