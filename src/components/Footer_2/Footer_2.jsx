import React, { useEffect, useState } from "react";
import {
  outline_whatsapp_icon,
  facebookc_letter,
  instagram_2,
  tiktok_icon,
} from "../../assets/svgIcons";
import "./style.css";
import logo from "../../assets/images/footer2Logo.png";
import white_logo from "../../assets/images/rump_white_logo.png";

import foterMap from "../../assets/images/footer_map.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils";
import toast from "react-hot-toast";

const Footer_2 = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getSiteInfo = async () => {
    setLoading(true);

    try {
      const res = await axios.get(`${base_url}/user/get_site_info`);

      if (res?.data?.status == "success") {
        setData(res.data.site_info);
      } else {
        toast.error("problema al obtener datos");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSiteInfo();
  }, []);

  return (
    <div className="Footer2_container">
      <div className="Footer1_content">
        <div className="left_side">
          <div className="logo_image">
            <img src={white_logo} alt="" />
          </div>
          <div className="icons">
            <div>{facebookc_letter}</div>
            <div>{instagram_2}</div>
          </div>
          <div
            className="email"
            onClick={() => window.open(`mailTo:${data[0]?.email}`, "_blanck")}
          >
            {data[0]?.email}
          </div>
          <div
            className="phone"
            onClick={() => window.open(`tel:${data[0]?.phone}`, "_blanck")}
          >
            {data[0]?.phone}
          </div>

          {/* <div className="bigbang text-center d-flex align-items-center gap-2">
          <span>Powered by </span><img style={{cursor:"Pointer"}} onClick={(()=>window.open("https://www.its.ae/", "_blanck"))}  alt="BIGBANG ITS" width="60%" height="50%" data-src="https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg" class="branding-2x transparent ls-is-cached lazyloaded" src="https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg" />
          </div> */}
        </div>
        <div className="mid_side">
          <div className="mid_left">
            <div className="mid_side_title">DISCOVER</div>
            <a href="">Our Misson</a>
            <a href="">The Science</a>
            <a href="">Guide to Pet Parenting</a>
          </div>
          <div className="mid_right">
            <div className="mid_side_title">ٍSupport</div>
            <a href="">Shaipping & Returns</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
        <div className="right_side">
          <div className="mapImage ">
            <img src={foterMap} alt="" />
          </div>
        </div>
      </div>
      <div className="rump_logo_footer" onClick={() => navigate("/")}>
        <img src={logo} alt="" />
      </div>
      <div className="powerd_by ">
        <div className="bigbang text-center d-flex align-items-center gap-2">
          <div className="fw-bolder fs-5">Powered by </div>
          <div className="image">
            <img
              style={{ cursor: "Pointer" }}
              onClick={() => window.open("https://www.its.ae/", "_blanck")}
              alt="BIGBANG ITS"
              width="60%"
              height="50%"
              data-src="https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg"
              class="branding-2x transparent ls-is-cached lazyloaded"
              src="https://www.its.ae/wp-content/uploads/2020/05/bigbang-logo.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_2;
