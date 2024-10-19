import React, { useEffect, useState } from "react";
import "./style.css";
import A_letter from "../../assets/images/a_letter.png";
import fp_dog from "../../assets/images/findPet_dog.png";
import AOS from "aos";
import Modal from "../../components/Modal/Modal";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useMediaQuery } from "../../CustomHooks/useMediaQueries";
import FromGroup from "../../components/FromGroup/FromGroup";
import { FormGroup } from "react-bootstrap";
import axios from "axios";
import { base_url } from "../../utils";
import toast from "react-hot-toast";

const FindPet = () => {
  const [addLoading , setAddLoading] = useState(false);
  const [isOpenModal , setIsOpenModal] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const [allCalification , setAllCalification] = useState([]);
  const [allDepartmento , setAllDepartment] = useState([]);
  const [allRaza , setAllRaza] = useState([]);
  const [allProvincia , setAllProvincia] = useState([]);
  const [allDistrito , setAllDistrito] = useState([]);
  const [findPetData , setFindPetData] = useState({
    nombres:"", //الاسم الأول
    Apellidos:"", // الاسم الاخير
    fecha_de_nac:"", // date
    masc_status:0,
    calification:0,
    animal_color:"",
    departmento_id:"",
    provincia_id:"",
    raza:"",
    distrito_id:"",
    num_two:"",
    num_one:"",
  })
  useEffect(()=>{
    AOS.init({
      duration:600
    })
  },[]);
  

  function handleGetCalification() {
   axios.get(base_url + `/user/calification/get_all`)
   .then(res => {
    if(res.data.status == "success") {
      console.log(res.data.data);
      setAllCalification(res.data.data);
    }else {
      console.log(res.data.message);
    }
   }).catch(e => console.log(e))
  }

  function handleGetAllDepartment() {
    axios.get(base_url + `/admins/get_all_departmento_for_admin`)
    .then(res => {
      if(res.status ==  200) {
        console.log(res.data);
        setAllDepartment(res.data)
      }else {
        console.log("حدث خطأ ما!")
      }
    }).catch(e => console.log(e))
  }

  function handleGetAllRaza() {
    axios.get(base_url + `/admins/get_all_raza_for_admin`)
    .then(res => {
      if(res.status == 200) {
        setAllRaza(res.data)
      }else {
        console.log("حدث خطأ ما")
      }
    }).catch(e => console.log(e))
  }
   
  function handleGetAllProvincia() {
    axios.get(base_url + `/user/get_all_provincia_for_user`)
    .then(res => {
      if(res.status == 200) {
        setAllProvincia(res.data)
      }else {
        console.log("حدث خطأ ما")
      }
    }).catch(e => console.log(e))
  }

  function handleGetAllDistrito() {
    axios.get(base_url + `/user/get_all_distrito_for_user`)
    .then(res => {
      if(res.status == 200) {
        setAllDistrito(res.data)
      }else {
        console.log("حدث خطأ ما")
      }
    }).catch(e => console.log(e))
  }

  useEffect(() => {
    handleGetCalification();
    handleGetAllDepartment();
    handleGetAllRaza();
    handleGetAllProvincia();
    handleGetAllDistrito();
  } , [])

  function handleSubmit() {
     setAddLoading(true);
     const data_send = {
      ...findPetData,
     }
     axios.post(base_url + `/user/create_one`, data_send)
     .then(res => {
      if(res.data.status == "success") {
         toast.success(res.data.message);
         setIsOpenModal(false);
         setFindPetData({
          nombres:"", 
          Apellidos:"", 
          fecha_de_nac:"",
          masc_status:0,
          calification:0,
          animal_color:"",
          departmento_id:"",
          provincia_id:"",
          raza:"",
          distrito_id:"",
          num_two:"",
          num_one:"",
        })
      }
     }).catch(e => console.log(e))
     .finally(() => setAddLoading(false))
  }

  return (
     <>
       
       <Modal className="findpet_modal" showCloseBtn size={isSmallScreen ?"100%" : "90%"} show={isOpenModal} onClose={() => setIsOpenModal(false)}>
         
       <div className='gap-4 d-flex flex-column'>
              <FromGroup rowCount={3}>
                <FromGroup.Input
                onChange={(e) => setFindPetData({...findPetData , nombres : e.target.value})}
                  required={true}
                  label={"Nombres"}
                  placeholder='Nombre de la mascota'
                />
                <FromGroup.Input
                onChange={(e) => setFindPetData({...findPetData , Apellidos : e.target.value})}
                  required={true}
                  label={"Apellidos"}
                  placeholder='Apellidos del usuario'
                />
                <FromGroup.Input
                onChange={(e) => setFindPetData({...findPetData , fecha_de_nac : e.target.value})}
                  required={true}
                  type={"date"}
                  label={"Fecha de nacimiento"}
                />
                {/*  */}
                {/* <CustomSelect
                  required={true}
                  label={"Sexo de la mascota"}
                  placeholder='Apellidos del usuario'
                /> */}
                <CustomSelect
                  data={[{id : 0 , title_en:"No" , title_es:"No"}, {id : 1 , title_en:"Yes" , title_es:"Sí"}]}
                  onChange={(id) => setFindPetData({...findPetData , masc_status : id})}
                  required={true}
                  label={"¿La mascota está esterilizada?"}
                  placeholder='No'
                />
                <CustomSelect data={allCalification} onChange={(id) => setFindPetData({...findPetData , calification : id})} label={"Calificación "} required={true} />
                {/* <CustomSelect
                  required={true}
                  label={"Especie"}
                  placeholder='Seleccione'
                /> */}
                <CustomSelect
                data={allRaza}
                onChange={(id) => setFindPetData({...findPetData , raza : id})}
                  required={true}
                  label={"Raza"}
                  placeholder='Seleccione'
                />
                <CustomInput
                onChange={(e) => setFindPetData({...findPetData , animal_color : e.target.value})}
                  required={true}
                  label={"Color de pelaje"}
                  placeholder='Color de pelaje'
                />
              </FromGroup>

              {/*  */}

              {/* <FromGroup rowCount={1}>
                <CustomInput
                  required={true}
                  label={"Dirección"}
                  placeholder='Escriba la dirección...'
                />
              </FromGroup> */}

              <FromGroup rowCount={3}>
                <CustomSelect
                onChange={(id) => setFindPetData({...findPetData , departmento_id : id})}
                data={allDepartmento}
                  required={true}
                  label={"Departamento"}
                  placeholder='Seleccione'
                />
                <CustomSelect
                data={allProvincia}
                onChange={(id) => setFindPetData({...findPetData , provincia_id : id})}
                  required={true}
                  label={"Provincia"}
                  placeholder='Seleccione'
                />
                <CustomSelect
                data={allDistrito}
                onChange={(id) => setFindPetData({...findPetData , distrito_id : id})}
                  required={true}
                  label={"Distrito"}
                  placeholder='Seleccione'
                />
              </FromGroup>
                
              <FromGroup rowCount={2}>
              <FromGroup.Input
              onChange={(e) => setFindPetData({...findPetData , num_one : e.target.value})}
                  required={true}
                  label={"número de teléfono 1"}
                  placeholder="número de teléfono 1"
                 />
                <FromGroup.Input
                onChange={(e) => setFindPetData({...findPetData , num_two : e.target.value})}
                  required={true}
                  label={"número de teléfono 2"}
                  placeholder="número de teléfono 2"
                />
              </FromGroup>
            </div>
         
         {/* <div className='gap-4 d-flex flex-column'>
         <div className="form_group_container" style={{marginTop:"20px"}}>
           <form className="custom_form">
             <div className="custom_inputs_group" style={{gridTemplateColumns:"repeat(3,1fr)"}}>
               <div>
                 <label>Nombre <span>(*)</span></label>
                 <input type="text" placeholder="Nombre de la mascota"/>
               </div>

               <div>
                 <label>Apellidos <span>(*)</span></label>
                 <input type="text" placeholder="Apellidos del usuario"/>
               </div>

               <div>
                 <label>Fecha de nacimiento <span>(*)</span></label>
                 <input type="date" />
               </div>
             </div>
           </form>
         </div>

         <div className="form_group_container" style={{marginTop:"10px"}}>
           <form className="custom_form">
             <div className="custom_inputs_group" style={{gridTemplateColumns:"repeat(3,1fr)"}}>
               <div>
                
                 <CustomSelect  required={true}
                    label={"Esterilizado? "}
                    placeholder='Esterilizado?'
                    data={[
                      {
                        label:'Si',
                        value:'si'
                      },
                      {
                        label:"No",
                        value:"No"
                      }
                    ]}
                    />
               </div>

               <div>
                 <label>Raza (*)</label>
                 <input type="text" placeholder="Raza"/>
               </div>

               <div>
                 <label>Color de pelaje (*)</label>
                 <input type="text" placeholder="Color de pelaje"/>
               </div>
             </div>
           </form>
         </div>

         <div className="form_group_container" style={{marginTop:"10px"}}>
           <form className="custom_form">
             <div className="custom_inputs_group" style={{gridTemplateColumns:"repeat(3,1fr)"}}>
               <div>
                 <CustomSelect
                    required={true}
                    label={"Departamento"}
                    placeholder='Seleccione'
                    data={
                      [
                        {
                          label:'Amazon',
                          value:'Amazon'
                        },
                        {
                          label:'Apurimac',
                          value:'Apurimac'
                        },
                        {
                          label:'Arequpia',
                          value:'Arequpia'
                        },
                        {
                          label:'Ayacucho',
                          value:'Ayacucho'
                        },
                        {
                          label:'Cajamarca',
                          value:'Cajamarca'
                        },
                        {
                          label:'Callao',
                          value:'Callao'
                        },
                        {
                          label:'Cusco',
                          value:'Cusco'
                        },
                        {
                          label:'Huancavelica',
                          value:'Huancavelica'
                        },
                        {
                          label:'Huanuco',
                          value:'Huanuco'
                        },
                        {
                          label:'Ica',
                          value:'Ica'
                        },
                        {
                          label:'Junin',
                          value:'Junin'
                        },
                        {
                          label:'Freedom',
                          value:'Freedom'
                        },
                        {
                          label:'Lambayeque',
                          value:'Lambayeque'
                        },
                        {
                          label:'Lime',
                          value:'Lime'
                        },
                        {
                          label:'Loreto',
                          value:'Loreto'
                        },
                        {
                          label:'Mother of God',
                          value:'Mother of God'
                        },
                        {
                          label:'Moquegua',
                          value:'Moquegua'
                        },
                        {
                          label:'Pasco',
                          value:'Pasco'
                        },
                        {
                          label:'piura',
                          value:'piura'
                        },
                        {
                          label:'Fist',
                          value:'Fist'
                        },
                        {
                          label:'San Martin',
                          value:'Sam Martin'
                        },
                        {
                          label:'Tumbes',
                          value:'Tumbes'
                        },
                        {
                          label:'Ucayala',
                          value:'Ucayala'
                        },
                      ]
                    }
                  />
               </div>

               <div>  

<CustomSelect
                    required={true}
                    label={"Provincia"}
                    placeholder='Seleccione'
                    data={[
                      {
                        label:'Bagua',
                        value:'Bagua'
                      },
                      {
                        label:'Bongara',
                        value:'Bongara'
                      },
                      {
                        label:'Chachapoyas',
                        value:'Chachapoyas'
                      },
                      {
                        label:'Condorcanqui',
                        value:'Condorcanqui'
                      },
                      {
                        label:'Luya',
                        value:'Luya'
                      },
                      {
                        label:'Rodríguez de Mendoza',
                        value:'Rodríguez de Mendoza'
                      },
                      {
                        label:'Utcubamba',
                        value:'Utcubamba'
                      },
                      
                    ]}
                  />
                  </div> 

                 <div>
                  <CustomSelect
                    required={true}
                    label={"Distrito"}
                    placeholder='Seleccione'
                    data={[
                      {
                        value:'district1',
                        label:'district1',
                      },
                      {
                        value:'district2',
                        label:'district2',
                      }
                    ]}
                  />
               </div>
             </div>
           </form>
         </div>

         <div className="form_group_container" style={{marginTop:"10px"}}>
           <form className="custom_form">
             <div className="custom_inputs_group" style={{gridTemplateColumns:"repeat(3,1fr)"}}>
             <div>
            <CustomSelect label={"Calificación "} required={true}
                  
                  data={[
                    {
                      label:'Seleccione',
                      value:''
                    },
                    {
                      label:'Agresivo',
                      value:'Agresivo'
                    },
                    {
                      label:'Amistoso',
                      value:'Amistoso'
                    },
                    {
                      label:'Discapacitado',
                      value:'Discapacitado'
                    },
                    {
                      label:'Entrenado',
                      value:'Entrenado'
                    },
                    {
                      label:'Miedoso',
                      value:'Miedoso'
                    },
                    {
                      label:'Peleador',
                      value:'Peleador'
                    },
                  ]}
                  />
            </div>

            <div>
            <CustomInput
                    required={true}
                    label={"Distrito"}
                    placeholder='Seleccione'
                    type={"file"}
                  />
            </div>
               
             </div>
           </form>
         </div>
         </div> */}

         <div className='modal_buttons' style={{marginTop:"30px"}}>
              <button className='confirm_button' onClick={handleSubmit}>{addLoading ? "cargando..." : "GUARDAR"}</button>
              <button className='cancel_button' onClick={() => setIsOpenModal(false)}>Cerrar</button>
         </div>
       </Modal>

       <div className='findpet_container'>
      <div data-aos='zoom-out' className='fb_content'>
        <div className='fp_left_side'>
          <div className='image'>
            <img src={A_letter} loading='lazy' alt='' />
          </div>
          <div className='fb_jubject '>
            <div className='fb_title'>
              {" "}
              <span className="text_orange"> Encontré </span>una mascota
            </div>
            <p className='fb_info'>
              Ingresa el código RUMP o número de MICROCHIP para identificar y
              ubicar a los resaposables.
            </p>
          </div>
          

        </div>
        <div className='fp_right_side'>
          <div className='fp_dog_image'>
            <img src={fp_dog} alt='' />
          </div>
        </div>
      <div className="mx-auto fb_abs_btn" onClick={() => setIsOpenModal(true)}>
            Ingresa el código aquí
        </div>
      </div>

    </div>
     </>
  );
};

export default FindPet;
