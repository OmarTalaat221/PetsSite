import React from 'react';
import "./style.css"

const Stepper = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange("plus");
  };

  const handleDecrement = () => {
    if (+value > 1) {
      onChange("minus");
    }
  };

  const handleChange = (e) => {

    const newValue = parseInt(+e.target.value, 10);
    console.log(newValue)
    if (newValue) {
      onChange(+newValue);
    }else{
      onChange("");

    }
  };


  const handlekeydown = (e)=>{
      if(e.key == "-" || e.key == "ArrowUp" || e.key == "ArrowDown"){
        e.preventDefault(); // Prevent default arrow key behavior
      }
  }

  return (
    <div className='stepper_container' style={{ display: 'flex', alignItems: 'center' }}>
      <button className='stepper_button' onClick={handleDecrement} disabled={value <= 0}>-</button>
      <input
        className='stepper_input'
        type="number"
        value={value}
        onChange={handleChange}
        onKeyDown={handlekeydown}
        style={{ width: '50px', textAlign: 'center' }}
      />
      <button className='stepper_button' onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Stepper;
