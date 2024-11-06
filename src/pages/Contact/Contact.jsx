import React, { useEffect, useState } from "react";
import "./style.css";
import image_1 from "../../assets/images/contacnt_image_1.png";
import image_2 from "../../assets/images/contact_image_2.png";
import { phone_linear, telegram } from "../../assets/svgIcons";
import AOS from "aos";
import axios from "axios";
import { base_url } from "./../../utils/index";
import toast from "react-hot-toast";

const Contact = () => {
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
    AOS.init({
      duration: 600,
    });
  }, []);
  useEffect(() => {
    getSiteInfo();
  }, []);

  return (
    <div className="contact_container">
      <div data-aos="zoom-in-up" className="contact_content">
        <div className="contact_image">
          <img src={image_2} alt="" />
        </div>
        <div className="prev_contact_text">
          <div className="top_text">Estamos en</div>
          <div className="bottom_text">
            <svg width="500" className="curved_text">
              <path
                id="curve"
                fill="transparent"
                d="M10,150 Q250,100 490,150"
              />
              <text width="500">
                <textPath href="#curve" startOffset={"50%"}>
                  contacto
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <div className="contact_image">
          <img src={image_1} alt="" />
        </div>
      </div>

      <div className="contacts_icons">
        <div data-aos="fade-right" className="ms_contact">
          <div className="contact_icon">{telegram}</div>
          <div
            className="contact_text"
            onClick={() => window.open(`mailTo:${data[0]?.email}`, "_blanck")}
          >
            {data[0]?.email}
          </div>
        </div>
        <div data-aos="fade-left" className="ms_contact">
          <div className="contact_icon">{phone_linear}</div>
          <div
            className="contact_text"
            onClick={() => window.open(`tel:${data[0]?.phone}`, "_blanck")}
          >
            {data[0]?.phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
