
import React from 'react'
import "./style.css"
const Checkbox2 = ({checked , onChange, id}) => {
  return (
/* From Uiverse.io by cssbuttons-io */ 
<label htmlFor={id} className="container__2">
  <input checked={checked}  onChange = {onChange} id={id} type="checkbox" />
  <div className="checkmark"></div>
</label>
  )
}

export default Checkbox2
