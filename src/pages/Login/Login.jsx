import {json, Link, useNavigate} from "react-router-dom";
import "./Login.css";
import {arrowLeft, arrowRight, orangeOval} from "../../assets/svgIcons";
import Modal from "../../components/Modal/Modal";
import FromGroup from "./../../components/FromGroup/FromGroup";
import CustomSelect from "./../../components/CustomSelect/CustomSelect";
import CustomInput from "./../../components/CustomInput/CustomInput";
import {useEffect, useState} from "react";
import FormCard from "./../../components/FormCard/FormCard";
import axios from "axios";
import { BASE_URL } from "../../API/baseUrl";
import toast from "react-hot-toast";

const ResgistrationPage = () => {
  const navigate = useNavigate();

  const [openRejester, setOpenRejester] = useState(false);

  const [selectedTab, setSelectedTab] = useState("1");
  
  const [showAlert , setShowAlert] = useState(false)

  const tabs = [
    {
      id: "1",
      name: "Responsable",
    },
    {
      id: "2",
      name: "Mascota",
    },
  ];

  const [loginData , setLoginData] = useState({
    email:"",
    password:'',
  });


  const handleLogin = async () =>{
    const dataset = {
      ...loginData
    }


    if(!loginData.email){
      toast.error("Introduce tu correo electrónico");
      return
    }

    if(!loginData.password){
      toast.error("Ingresa tu contraseña");
      return
    }



    await axios
    .post(`${BASE_URL}user/login`, dataset)
    .then((res) => {
      console.log(res);

      if(res.data.status  == "success"){
        toast.success("Éxito para iniciar sesión")
        localStorage.setItem("petsUser" , JSON.stringify( res.data.result))
        navigate("/")

      }else if(res.data.message == "phone or password is incorrect"){
        toast.error("El teléfono o la contraseña son incorrectos")
      }else{
        toast.error("Hay un problema")
      }


     
    })
    .catch((e) => console.log(e))
    .finally(() => {});

    
  }

  return (
    <div className='login_page_container'>
      <div className='login_page'>
        <h2>INGRESAR</h2>
        <form>
          <div>
            <label>Email:</label>
            <input onChange={(e)=>{
              setLoginData({
                ...loginData,
                email:e.target.value,
              })
            }}
             type='email' name='email' placeholder='Email' />
          </div>

          <div>
            <label>Contraseña:</label>
            <input
            
            onChange={(e)=>{
              setLoginData({
                ...loginData,
                password:e.target.value,
              })
            }}
            
            type='password' name='password' placeholder='Contraseña' />
          </div>

          <div className='enter '>
            <div
              className='oval_button'
              style={{
                position: "relative",
                fill: "rgb(248, 100, 8)",
              }}
            >
              {orangeOval}

              <div
                className='oval_btn_text'
                onClick={() => handleLogin()}
              >
                Registrar...
              </div>
            </div>

            <p className='my-0'>
            ¿No tienes cuenta? <a className='c_pointer' onClick={()=> navigate("/registration")}>Regístrate ahora</a>
            </p>
          </div>
        </form>

        <Link to='/forgetPassword'>Olvidé mi contraseña</Link>
      </div>

    
    </div>
  );
};

export default ResgistrationPage;
