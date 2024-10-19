import React from "react";

import "./style.css"

const CheckBox = ({id}) => {
  return (
    <div>
      <label class='container___'>
        <input id={id}  type='checkbox' />
        <div class='checkmark'></div>

      </label>
    </div>
  );
};

export default CheckBox;
