import React, {useState, useEffect} from "react";


import PetCard from "../../components/ProdCard/ProdCard";
import "./style.css";
import FromGroup from "./../../components/FromGroup/FromGroup";
import CustomSelect from "./../../components/CustomSelect/CustomSelect";
import {
  arrowLeft,
  arrowRight,
  cancel_btn,
  edit,
  Logout,
  saveChanges,
} from "../../assets/svgIcons";
import CustomInput from "./../../components/CustomInput/CustomInput";
import Title from "../../components/Title/Title";
import CustomButton from "./../../components/CustomButton/CustomButton";
import {useNavigate, useSearchParams} from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import FormCard from "../../components/FormCard/FormCard";
import { useMediaQuery } from "../../CustomHooks/useMediaQueries";
import { petsData } from './../../utils/data/petsData';
import axios from "axios";
import { BASE_URL } from "../../API/baseUrl";
import toast from "react-hot-toast";

const UserProfile = () => {

  const navigate = useNavigate();

  

  const [openRejester, setOpenRejester] = useState(false);

  const [selectedTab, setSelectedTab] = useState(1);

  const [disableForm, setDisableForm] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const [userData , setUserData] = useState({});
  const [loading , setLoading] = useState(false)
  const [userPets , setUserPets] = useState([])
  const [policyOk , setPolicyOk] = useState(false)

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };



  const getUserAnimals = async (token) =>{

  const accesss_token = JSON.parse(localStorage.getItem("petsUser")).access_token

    setLoading(true)

      await axios
      .get(`${BASE_URL}user/my_animals?token=${accesss_token}`)
      .then((res) => {
        console.log(res);
        setUserPets(res.data.result)
      })
      .catch((e) => console.log(e))
      .finally(() => {

        setLoading(false)

      });
  
      
    }


  useEffect(() => {
    // Set default value for 'name' if it doesn't exist
    if (!searchParams.has("state")) {
      searchParams.set("state", "user");
      setSearchParams(searchParams);
    }

    console.log(searchParams.get("state"));

    const petsUser = JSON.parse(localStorage.getItem("petsUser"));

    setUserData(petsUser);
    getUserAnimals(petsUser.access_token)



  }, []);


  const updateSearchParams = (state) => {
    // Add a new parameter while preserving the existing ones

    setSearchParams((prevParams) => {
      prevParams.set("state", state);
      return prevParams;
    });
  };




  const tabs = [
    {
      id: "1",
      name: "Usuaria",
      state: "user",
    },
    {
      id: "2",
      name: "Mascota",
      state: "pet",
    },
  ];


  const [newPetData , setNewPetData] = useState({
    f_name:"",
    l_name:"",
    email:"",
    password:"",
    phone:"",
    documnet_number:"",
    animail_f_name:"",
    animail_l_name:"",
    dob:"",
    sex:"",//male-femail
    is_sterillized:"",
    qualified:"",
    type:"",
    raza:"",
    coat_color:"",
    address:"",
    department:"",
    province:"",
    district:"",
  })

 const [newOfficials , setNewOfficials] = useState({
  name1:'',
  dni1:'',
  phone1:'',
  name2:'',
  dni2:'',
  phone2:'',
 })




 const addNewPetData = async(image ) =>{


  const dataset ={
    ...newPetData,
    officials:`${newOfficials.name1}**${newOfficials?.dni1}**${newOfficials.phone1}**pets**${newOfficials.name2}**${newOfficials.dni2}**${newOfficials.phone2}`,
    pet_image:image

  }

  const accesss_token = JSON.parse(localStorage.getItem("petsUser")).access_token

  
  await axios
  .post(`${BASE_URL}user/user_sign_animal?token=${accesss_token}`, dataset)
  .then((res) => {
    console.log(res);

    if (res?.data && res?.data?.status == "success") {
      toast.success(res.data.message);
      // getCategories();
      getUserAnimals();

      
    } else if (res.data.status == "error" || res.data.status == "faild") {
      toast.error(res.data.message);
    } else {
      toast.error("Something Went Error");
    }
  })
  .catch((e) => console.log(e))
  .finally(()=>{

  })
 }



const handleAddNewPet = async ()=>{




  if(!selectedImage){
    toast.error("Elige una foto de la mascota.")
    return
  }



  const formData = new FormData();
  formData.append("image", selectedImage);
  await axios
    .post(`https://camp-coding.site/pets/api/img_upload`, formData)
    .then((res) => {
      console.log(res);
      if (res) {
        // setImgUrl(res?.data?.message);
        addNewPetData(res.data.result.image);
      } else if (res == "") {
        toast.error("There Are Problems");
      } else {
        toast.error("There Are Problem");
      }
    })
    .catch((e) => console.log(e))
    .finally(() => {
      // setImgLoading(false);
    });
 }


 const handleLogout = () =>{
  localStorage.removeItem("petsUser");
  navigate("/login")
 }





  return (
    <div className='user_pets_container'>
      <div className='modal_tabs'>

        {tabs?.map((tab, index) => {
          return (
            <div
              key={index}
              onClick={() => updateSearchParams(tab?.state)}
              className={`modal_tab fw-semibold ${
                searchParams.get("state") == tab.state ? "active" : ""
              }`}
            >
              {tab?.name}
            </div>
          );
        })}
      </div>

      <div className='user_pets_content'>
        <div className='text-end'>
          <CustomButton
            onClick={() => setOpenRejester(true)}
            bgColor={"#FF9100"}
            text={"Registro"}
          />
        </div>
        {searchParams.get("state") == "user" ? (
          <>
            <Title
              text={"Su cuenta"}
              containerStyles={{
                marginBottom: "20px",
              }}
            />

            <div>
              <FromGroup rowCount={2}>
                <FromGroup.Input
                  required={true}
                  label={"nombre de usuario"}
                  placeholder='nombre de usuario'
                  disabled={disableForm}
                  value={userData.name}
                  onChange={(e)=>setUserData({
                    ...userData,
                    name:e.target.value
                  })}


                />
                <FromGroup.Input
                  required={true}
                  label={"Email"}
                  placeholder='Email'
                  disabled={disableForm}
                  value={userData.email}
                  onChange={(e)=>setUserData({
                    ...userData,
                    email:e.target.value
                  })}

                />
                <FromGroup.Input
                  required={true}
                  label={"teléfono"}
                  placeholder='teléfono'
                  disabled={disableForm}
                  type={"number"}
                  value={userData.phone}
                  onChange={(e)=>setUserData({
                    ...userData,
                    phone:e.target.value
                  })}


                />
              </FromGroup>

              {disableForm ? (
                <div className='following_btn mt-4'>
                  <button
                    className='btn d-flex btn-sm btn-primary'
                    onClick={() => setDisableForm(false)}
                  >
                    <span>{edit}</span>
                    <span>Editar</span>
                  </button>
                </div>
              ) : (
                <div className='d-flex algin-item-center gap-3'>
                  <div className='following_btn mt-4'>
                    <button
                      className='btn d-flex align-items-center gap-2 btn-sm btn-success'
                      onClick={() => setDisableForm(true)}
                    >
                      <span>{saveChanges}</span>
                      <span>Guardar</span>
                    </button>
                  </div>
                  <div className='following_btn mt-4'>
                    <button
                      className='btn d-flex align-items-center gap-2 btn-sm btn-danger'
                      onClick={() => setDisableForm(true)}
                    >
                      <span>{cancel_btn}</span>
                      <span>Cancelar</span>
                    </button>
                  </div>
                </div>
              )}
              <div className='following_btn mt-4 text-end'>
                <button
                  className='btn d-flex align-items-center gap-2 btn-sm btn-danger'
                  onClick={handleLogout}
                >
                  <span>{Logout}</span>
                  <span>cerrar sesión</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Title text={"Tus mascotas"}/>
            <div className='petsCards'>
              {userPets && userPets?.length >= 1 && Array.isArray(userPets)
                ? userPets?.map((item, index) => {
                    return (
                      <PetCard
                        onClick={() => {
                          navigate(`/pet_profile/${item.id}`, {
                            state: {petData: {...item}},
                          });
                        }}
                        key={index}
                        data={item}
                      />
                    );
                  })
                : "No has agregado mascotas"}
            </div>
          </>
        )}
      </div>

        
      <Modal
        size={ isSmallScreen ? "100%" : "90%" }
        show={openRejester}
        showCloseBtn
        title={"Register Agreement"}
        onClose={() => setOpenRejester(false)}
        children={
          <>
            <div className='modal_tabs'>
              {tabs?.map((tab, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`modal_tab ${
                      selectedTab == tab?.id ? "active" : ""
                    }`}
                  >
                    {tab?.name}
                  </div>
                );
              })}
            </div>

            {selectedTab == 1 ? (
              <div>
                <FormCard
                  headerBg={"#007BFF"}
                  color={"#fff"}
                  header={"Datos del usuario"}
                  haederColor={"#fff"}
                >
                  <FromGroup rowCount={2}>
                    <FromGroup.Input
                      required={true}
                      label={"Nombres"}
                      placeholder='Telefono de la clinica'
                      value={newPetData.f_name}
                      onChange={(e)=>{
                        setNewPetData({
                          ...newPetData,
                          f_name:e.target.value
                        })
                      }}

                    />
                    <FromGroup.Input
                      required={true}
                      label={"Apellidos"}
                      placeholder='Apellidos del usuario'
                      value={newPetData.l_name}
                      onChange={(e)=>{
                        setNewPetData({
                          ...newPetData,
                          l_name:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"Correo Electrónico"}
                      placeholder='Correo electrónico'
                      value={newPetData.email}
                      onChange={(e)=>{
                        setNewPetData({
                          ...newPetData,
                          email:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"Crear una contraseña"}
                      placeholder='Contraseña'
                      value={newPetData.password}
                      onChange={(e)=>{
                        setNewPetData({
                          ...newPetData,
                          password:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"Número Telefónico"}
                      placeholder='Número teléfonico'
                      value={newPetData.phone}
                      onChange={(e)=>{
                        setNewPetData({
                          ...newPetData,
                          phone:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"Número de documento"}
                      placeholder='Número de documento de identidad'
                      value={newPetData.documnet_number}
                      onChange={(e)=>{
                        setNewPetData({
                          ...newPetData,
                          documnet_number:e.target.value
                        })
                      }}
                    />
                  </FromGroup>
                </FormCard>

                <FormCard
                  headerBg={"#343a40"}
                  color={"#fff"}
                  header={
                    <div>
                      <div>Datos de los responsables</div>
                      <div
                        className='fw-bolder'
                        style={{color: "rgb(174, 174, 174)"}}
                      >
                        En el DNI saldrán los nombres de los responsables
                      </div>
                    </div>
                  }
                  haederColor={"#fff"}
                >
                  <FromGroup rowCount={3}>
                    <FromGroup.Input
                      required={true}
                      label={"Nombre responsable 1 "}
                      placeholder='Nombre completo responsable 1'
                      value={newOfficials.name1}
                      onChange={(e)=>{
                        setNewOfficials({
                          ...newOfficials,
                          name1:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"DNI responsable 1"}
                      placeholder='DNI responsable 1'
                      value={newOfficials.dni1}
                      onChange={(e)=>{
                        setNewOfficials({
                          ...newOfficials,
                          dni1:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"Telefono responsable 1"}
                      placeholder='Telefono responsable 1'
                      value={newOfficials.phone1}
                      onChange={(e)=>{
                        setNewOfficials({
                          ...newOfficials,
                          phone1:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"Nombre responsable 2"}
                      placeholder='Nombre  completo responsable 2'
                      value={newOfficials.name2}
                      onChange={(e)=>{
                        setNewOfficials({
                          ...newOfficials,
                          name2:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"DNI responsable 2"}
                      placeholder='DNI responsable 2'
                      value={newOfficials.dni2}
                      onChange={(e)=>{
                        setNewOfficials({
                          ...newOfficials,
                          dni2:e.target.value
                        })
                      }}
                    />
                    <FromGroup.Input
                      required={true}
                      label={"Telefono del responsable 2"}
                      placeholder='Telefono del responsable 2'
                      value={newOfficials.phone2}
                      onChange={(e)=>{
                        setNewOfficials({
                          ...newOfficials,
                          phone2:e.target.value
                        })
                      }}
                    />
                  </FromGroup>
                </FormCard>

                <div className='following_btn mt-4'>
                  <button
                    className='btn btn-sm btn-primary d-flex'
                    onClick={() => setSelectedTab("2")}
                  >
                    <span>{arrowRight}</span>
                    <span>Siguiente</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className='d-flex flex-column gap-4'>
                <FromGroup rowCount={3}>
                  <FromGroup.Input
                    required={true}
                    label={"Nombres"}
                    placeholder='Nombre de la mascota'
                    value={newPetData.animail_f_name}
                    onChange={(e)=>{
                      setNewPetData({
                        ...newPetData,
                        animail_f_name:e.target.value
                      })
                    }}

                  />
                  <FromGroup.Input
                    required={true}
                    label={"Apellidos"}
                    placeholder='Apellidos del usuario'
                    value={newPetData.animail_l_name}
                    onChange={(e)=>{
                      setNewPetData({
                        ...newPetData,
                        animail_l_name:e.target.value
                      })
                    }}
                  />
                  <FromGroup.Input
                    required={true}
                    type={"date"}
                    label={"Fecha de nacimiento"}
                    value={newPetData.dob}
                    onChange={(e)=>{
                      setNewPetData({
                        ...newPetData,
                        dob:e.target.value
                      })
                    }}
                  />
                  {/*  */}
                 
                  <CustomSelect
                    required={true}
                    label={"Sexo de la mascota "}
                    placeholder='Seleccione'
                    data={[
                      {
                        label:'Seleccione',
                        value:''
                      },
                      {
                        label:'Male',
                        value:'male'
                      },
                      {
                        label:'Female',
                        value:'female'
                      },
                    ]}
                    onChange={(e)=>setNewPetData({
                      ...newPetData,
                      sex:e
                    })}

                  />
                  <CustomSelect
                    required={true}
                    label={"¿La mascota está esterilizada?"}
                    placeholder='No'
                    data={[
                      {
                        label:'Seleccione',
                        value:''
                      },
                      {
                        label:'Si',
                        value:'true'
                      },
                      {
                        label:'No',
                        value:'false'
                      },
                    ]}
                    onChange={(e)=>setNewPetData({
                      ...newPetData,
                      is_sterillized:e
                    })}

                  />
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
                  onChange={(e)=>setNewPetData({
                    ...newPetData,
                    qualified:e
                  })}/>
                  <CustomSelect
                    required={true}
                    label={"Especie"}
                    placeholder='Seleccione'
                    



                    data={[
                      {
                        label:'Seleccione',
                        value:''
                      },
                      {
                        label:'Bird',
                        value:'Bird'
                      },
                      {
                        label:'CANNE',
                        value:'CANNE'
                      },
                      {
                        label:'FELINE',
                        value:'FELINE'
                      },
                      {
                        label:'LAGOMORPHO',
                        value:'LAGOMORPHO'
                      },
                      {
                        label:'MARZUPIAL',
                        value:'MARZUPIAL'
                      },
                      {
                        label:'RODENT',
                        value:'RODENT'
                      },
                    ]}
                    onChange={(e)=>setNewPetData({
                      ...newPetData,
                      type:e
                    })}
                  />
                  <CustomInput
                    required={true}
                    label={"Raza"}
                    placeholder='Raza'
                    value ={newPetData.raza}
                    onChange={e=>{
                      setNewPetData({
                        ...newPetData,
                        raza:e.target.value
                      })
                    }}
                  />

                  <CustomInput
                    required={true}
                    label={"Color de pelaje"}
                    placeholder='Color de pelaje'
                    value ={newPetData.coat_color}
                    onChange={e=>{
                      setNewPetData({
                        ...newPetData,
                        coat_color:e.target.value
                      })
                    }}
                    
                  />
                </FromGroup>
                {/*  */}

                <FromGroup rowCount={1}>
                  <CustomInput
                    required={true}
                    label={"Dirección"}
                    placeholder='Escriba la dirección...'
                    value ={newPetData.address}
                    onChange={e=>{
                      setNewPetData({
                        ...newPetData,
                        address:e.target.value
                      })
                    }}
                  />
                </FromGroup>

                <FromGroup rowCount={3}>
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
                    onChange={(e)=>{
                      setNewPetData({
                        ...newPetData,
                        department:e
                      })
                    }}
                  />
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
                    onChange={(e)=> setNewPetData({
                      ...newPetData,
                        province:e
                    })}
                  />

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
                    onChange={(e)=> setNewPetData({
                      ...newPetData,
                      district:e
                    })}
                  />
                  
                </FromGroup>

                <FromGroup rowCount={1}>
                  <CustomInput
                    required={true}
                    label={"Distrito"}
                    placeholder='Seleccione'
                    type={"file"}
                    onChange={handleImageChange}
                  />
                </FromGroup>

                <div className='d-flex align-items-center gap-1'>
                  <input type='checkbox' id={"check"} checked={policyOk} onChange={(e)=>setPolicyOk(e.target.checked)}/>
                  <label htmlFor='check'>He leído y acepto las </label>
                  <span
                    style={{cursor: "pointer"}}
                    onClick={() =>
                      window.open(
                        "https://worldpetsperu.com/politicas_privacidad.html",
                        "blank"
                      )
                    }
                    className='text-primary'
                  >
                    políticas de privacidad
                  </span>
                </div>

                <div className='following_btn mt-4'>
                  <button
                    className='btn btn-sm btn-primary d-flex'
                    onClick={() => setSelectedTab("1")}
                  >
                    <span>{arrowLeft}</span>
                    <span>Altras</span>
                  </button>
                </div>
              </div>
            )}

            <hr />

            <div className='modal_buttons '>
              <button className='confirm_button' onClick={()=>handleAddNewPet()}>GUARDAR</button>
              <button className='cancel_button'>Cerrar</button>
            </div>
          </>
        }
      />
    </div>
  );
};

export default UserProfile;
