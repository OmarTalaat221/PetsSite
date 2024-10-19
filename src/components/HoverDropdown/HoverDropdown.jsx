import React, {useState} from "react";
import "./style.css";

import {Link} from "react-router-dom";
import {dropdown_arrow} from "../../assets/svgIcons";

const HoverDropdown = ({title, style, content, className, links, hideIcon}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div
      className='hover-dropdown'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={"dropdown-button " + className}
        style={style ? style : null}
      >
        <div>{title || "hover me"}</div> {hideIcon? "" : <div className="dropdown_icon">{dropdown_arrow}</div>} {" "}
      </button>
      {isOpen && (
        <div className='dropdown-content'>
          {links && links?.length >= 1 && Array.isArray(links)
            ? links?.map((link, index) => {
                return <Link to={link?.pathname}>{link?.text}</Link>;
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default HoverDropdown;
