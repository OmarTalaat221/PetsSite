import "./style.css";

import React from "react";

const Title = ({text, color, border, containerStyles , textStyles}) => {
  return (
    <div className='sections_title' style={containerStyles}>
      <div
        className=' co_title_text ch-market'
        style={{
          color: color || "#ff9100",
          borderBottom: border
            ? `4px solid ${color ? color : "#ff9100"}`
            : "none",
          ...textStyles,

        }}
      >
        {text || "Title"}
      </div>
    </div>
  );
};

export default Title;
