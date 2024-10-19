import React, {useState , useEffect} from "react";
import "./style.css";
import { useMediaQuery } from "../../CustomHooks/useMediaQueries";



const FromGroup = ({ Buttons , rowCount , children }) => {
  
  
  const isSmallScreen = useMediaQuery('(max-width: 768px)');



  return (
    <div className='form_group_container'>
      <form className='custom_form'>
        <div className='custom_inputs_group' 
          style={{
            gridTemplateColumns: `repeat(${ !isSmallScreen ? rowCount ? rowCount :  3  : 1},1fr)`
            // gridTemplateColumns: `repeat(auto-fill, minmax( ${rowCount ? rowCount :  3}fr, auto))`
            
          }}
        
        
        >
            {children}
        </div>

        {
          Buttons && 
        <div className="custom_form_buttons">{Buttons}</div>
        }
      </form>
    </div>
  );
};

export default FromGroup;

FromGroup.Input = ({ onChange ,label, required, ...props}) => {
  return (
    <div>
      <label>
        {label || ""}
        {required && <span>(*)</span>}
      </label>
      <input  {...props} onChange={onChange} />
    </div>
  );
};


