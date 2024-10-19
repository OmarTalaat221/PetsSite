import React, {useEffect, useState} from "react";
import "./style.css";
import logo from "../../assets/images/rumpLogoOrangeBg.png";
import {cancel_btn, dropdown_arrow} from "../../assets/svgIcons";
import {useNavigate} from "react-router-dom";

const LeftSide = ({open, setOpen}) => {

  const navigate = useNavigate();
  const [filteredNavigations, setFilteredNavigations] = useState([]);

  const navigations = [
    
    {
      id:0,
      pageName:'Registrar',
      pathname:'/login'
    },
    {
      id:1,
      pageName:'Encontré una mascota',
      pathname:'/findpet'
    },
    {
      id:2,
      pageName:'¿Quiénes somos?',
      pathname:'/about'
    },
    {
      id:3,
      pageName:'Preguntas frecuentes',
      pathname:'/preguntasfrecuentes'
    },
    {
      id:4,
      pageName:'Contacto',
      pathname:'/contact'
    },

  ]


  useEffect(() => {
    const user = localStorage.getItem('petsUser');

    if (user) {
      setFilteredNavigations(navigations.filter(nav => nav.pageName !== 'Registrar'));
    } else {
      setFilteredNavigations(navigations);
    }
  }, []);


  return (
    <>
      <div className={`side_nav_container ${open ? "open" : ""}`}>
        <div
          className='side_nave_close d-none'
          onClick={() => {
            try {
              setOpen(false);
            } catch (e) {
              console.error(e);
            }
          }}
        >
          {cancel_btn}
        </div>
        <div className='image_container'>
          <div className='side_logo_image' onClick={() =>{
             navigate("/");
             setOpen(false)
          }}>
            <img src={logo} alt='rump-logo' />
          </div>
        </div>

        <div className='side_items'>
          {/* <div className='side_accordion' onClick={()=>setOpenAccordion(!openAccordion)}>
          <div className='text side_item'>Servicios</div>
          <div className={`icon ${openAccordion? "open" : "" }`}>{dropdown_arrow}</div>
        </div> */}

          {/* <div className={`side_accordion_items ${openAccordion? "open" : ''}`}>
          <div className='side_item'>Servicios</div>
          <div className='side_item'>Convenios</div>
          <div className='side_item' >Genealogia</div>
        </div> */}



          {
            filteredNavigations?.map((item , index)=>{
              return(

              <div
                key={index}
                className='side_item'
                onClick={() => {
                  navigate(item?.pathname);
                  setOpen(false)
                }}
              >
                {item?.pageName}{" "}
              </div>
              )
            })
          }

          <div className='sign_login'>
          {localStorage.getItem('petsUser') ? (
    <>
    
    </>
  ) : (
    <>
      <h4 
              onClick={()=>{
                navigate("/login");
                setOpen(false)
              }}
            
            >Iniciar sesión</h4>
    </>
  )}
            
            <h4>Seguir comprando</h4>
          </div>
        </div>
      </div>
      {open && (
        <div className='side_overlay' onClick={() => setOpen(false)}></div>
      )}
    </>
  );
};

export default LeftSide;
