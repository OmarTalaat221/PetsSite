import React, {useState} from "react";
import "./style.css";
import { arrow_down_no_tail } from "../../assets/svgIcons";

const FormCard = ({header, headerBg , haederColor, drawer, icon, children}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className='form_card'>
      <div
        className={`form_card_header ${drawer ? "drawer":""} ${open ? "open":"close"}`}
        onClick={() => (drawer ? setOpen(!open) : null)}
        style={{
          backgroundColor: headerBg ? headerBg : "#f8f9fc",
        }}
      >
        {icon && <div className='headerIcon'>{icon || "s"}</div>}
        <h4 style={{
          color: haederColor? haederColor : "#222"
        }}>{header}</h4>
        {drawer && (
          <div className={`header_drawer_icon ${open ? "open" : ""}`}>
            {arrow_down_no_tail}
          </div>
        )}
      </div>
      {open && <div className='form_card_body'>{children}</div>}
    </div>
  );
};

export default FormCard;
