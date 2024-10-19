

import React from 'react';
import "./style.css";
import { filterIcon } from './../../assets/svgIcons/index';

const CustomButton = ({ onClick , color, className , text , icon , bgColor }) => {
  return (
    <div className='custom_button' 
      onClick={onClick}
      style={{
        background: bgColor || "#4e73df" ,
        bordercolor: bgColor || "#4e73df",
        border:`1px solid ${'#4e73df' }`
      }}
    >

      {
        icon? 
        <span style={{
              background: 'rgba(0, 0, 0, 0.15)',
              display: 'inline-block',
              padding: '0.375rem 0.75rem',
        }} className='custom_icon'>{icon}</span>
      
        :

        ""
      }
      <span style={{
        color: color || "#fff"
      }} className='text'>{text || 'filter'}</span>
        
    </div>
  )
}

export default CustomButton
