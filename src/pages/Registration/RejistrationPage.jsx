import React from 'react'
// import './style.css'
import { FaLock, FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { EmailIcon , AtEmail, UserIcon, LockIcon, User_2 } from '../../assets/svgIcons';
import CheckBox from './../../components/checkbox/CheckBox';
const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className='login_page'>
      <div className="login_content">
        <div className="login_left">
          {/* <img src={require("../../assets/images/adorable-beagle-puppy-solo-portrait.jpg")} alt="" /> */}
        </div>
        <div className="login_right">
          <h4>regístrate</h4>
          <div>
              {User_2}
            <input type="text" placeholder='Nombre de usuario' />
          </div>
          <div>
            {AtEmail}
            <input type="text" placeholder='Correo electrónico' />
          </div>
          <div>
              {LockIcon}
            <input type="text" placeholder='contraseña' />
          </div>

          <div className='privacy_vaildation'>
              <CheckBox id='privacy'  />
              <label htmlFor="privacy">¿Está de acuerdo con los <span className='text_orange' style={{cursor:'pointer'}}>términos y condiciones?</span></label>
          </div>
          <div>
            <button>regístrate</button>
          </div>
          <div>
            <p className='reg_para'>Ya tienes una cuenta? <span onClick={()=>navigate("/login")}>Ingresar</span></p>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Registration
