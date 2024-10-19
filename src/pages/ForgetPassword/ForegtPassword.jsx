import {FaLock, FaRegEnvelope} from "react-icons/fa6";
import "./ForgetPassword.css";
import { orangeOval } from "../../assets/svgIcons";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {


  const navigate = useNavigate()


  return (
    <div className='forget-password-container'>
      <div className='forget_password_page'>
        <h2>RECUPERAR TU CUENTA</h2>
        <p>Te enviaremos un correo para restablecer la contraseña</p>
        <form>
          <div>
            <label>Email:</label>
            <input type='email' placeholder='Email' />
          </div>
          <div className='forget_password_btns'>
            {/* <button>Entrar</button> */}

            <div className='enter '>
            <div
              className='oval_button'
              style={{
                position: "relative",
                fill: "rgb(248, 100, 8)",
              }}
            >
              {orangeOval}

              <div className='oval_btn_text'>Enviar</div>
            </div>

            <p className="my-0" onClick={()=>navigate("/login")}>
                Cancelar
            </p>
          </div>


          
          </div>
        </form>
      </div>
    </div>
  );
}
