import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import "./style.css";
import FromGroup from "./../../components/FromGroup/FromGroup";
import IconWithText from "./../../components/iconWithText/index";
import {
  arrowLeft,
  arrowRight,
  cancel_btn,
  colorIcon,
  community2,
  departmentIcon,
  edit,
  genderIcon,
  Injection,
  LoationIcon,
  raceIcon,
  saveChanges,
  TodayIcon,
  townIcon,
  Window,
} from "../../assets/svgIcons";
import Title from "./../../components/Title/Title";
import CustomButton from "./../../components/CustomButton/CustomButton";
import {IconBase} from "react-icons";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import CustomInput from "../../components/CustomInput/CustomInput";
import Modal from "../../components/Modal/Modal";
import QRCode from "react-qr-code";
import {petsData} from "../../utils/data/petsData";
import {BASE_URL} from "../../API/baseUrl";
import axios from "axios";
import toast from "react-hot-toast";
import UseGeneral from "../../hooks/useGeneral";

const PetPrfile = () => {
  const location = useLocation();
  // const petData = location?.state?.petData;

  const [petData, setPetData] = useState(null);

  const {petId} = useParams();

  useEffect(() => {
    getPetData();
  }, []);

  const getPetData = async () => {
    await axios
      .get(`${BASE_URL}animals/pet_details/${petId}`)
      .then((res) => {
        console.log(res);

        if (res?.data && res?.data?.status == "success") {
          setPetData(res.data.message);
        } else if (res.data.status == "error" || res.data.status == "faild") {
          toast.error(res.data.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {});
  };

  const [editPetModal, setEditPetModal] = useState(false);

  const [img, setImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [setImage] = useState();

  useEffect(() => {
    console.log(petData);
  }, []);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleCancelImage = () => {
    setImg("");
    setSelectedFile(null);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = petData?.pet_photo;
    const fileName =
      "pet_image_" + Math.floor(Math.random() * 9999) + 1000 + "_" + ".png";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const [locationNameEn , setLocationNameEn] = useState({});
  const [locationNameAr , setLocationNameAr] = useState({});

  const general = UseGeneral();

  useEffect(()=>{

    console.log(general?.location)
  },[general.location])


  // const getLocationName = async (lat, lon) => {
  //   try {
  //     const responseEn = await axios.get(
  //       `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
  //       { headers: { "Accept-Language": "en" } }
  //     );
  //     const addressEn = responseEn.data.address;
  //     const nameEn = [
  //       addressEn.road,
  //       addressEn.neighbourhood,
  //       addressEn.suburb,
  //       addressEn.city ||
  //         addressEn.town ||
  //         addressEn.village ||
  //         addressEn.hamlet,
  //       addressEn.state,
  //       addressEn.country,
  //     ]
  //       .filter(Boolean)
  //       .join(", ");
  //     setLocationNameEn(nameEn);

  //     const responseAr = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,        { headers: { "Accept-Language": "ar" } }
  //     );
  //     const addressAr = responseAr.data.address;
  //     const nameAr = [
  //       addressAr.road,
  //       addressAr.neighbourhood,
  //       addressAr.suburb,
  //       addressAr.city ||
  //         addressAr.town ||
  //         addressAr.village ||
  //         addressAr.hamlet,
  //       addressAr.state,
  //       addressAr.country,
  //     ]
  //       .filter(Boolean)
  //       .join(", ");
  //     setLocationNameAr(nameAr);
  //   } catch (error) {
  //     console.error("Error fetching location name:", error);
  //     setLocationNameEn("Unknown location");
  //     setLocationNameAr("موقع غير معروف");
  //   }
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setPosition([latitude, longitude]);
  //       getLocationName(latitude, longitude);
  //     },
  //     (error) => {
  //       console.error("Error fetching current location:", error);
  //       setPosition([51.505, -0.09]);
  //       getLocationName(51.505, -0.09);
  //     }
  //   );
  // }, []);


  return (
    <div className='pet_profile_container'>
      <div className='pet_profile_content'>
        <div className='row '>
          <div className='col-md-4 col-sm-12'>
            <div className='pet_profile_left'>
              <div className='pp_image'>
                <img src={img || petData?.pet_photo} alt='' />

                <label className='editIcon' htmlFor='uploadFile'>
                  {edit}
                </label>
                <input
                  onChange={onImageChange}
                  type='file'
                  name=''
                  id='uploadFile'
                  className='d-none'
                />
                {img && (
                  <div className='save_image_btn d-flex align-item-center gap-2'>
                    <CustomButton
                      icon={saveChanges}
                      text={"Guardar"}
                      bgColor={"rgba(122, 122, 122, 0.9)"}
                    />
                    <CustomButton
                      onClick={() => handleCancelImage()}
                      icon={cancel_btn}
                      text={"Cancelar"}
                      bgColor={"rgba(235, 44, 44, 0.9)"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='col-md-8 col-sm-12 d-flex flex-column'>
            <div className='d-flex align-items-center justify-content-between'>
              <Title
                containerStyles={{marginBottom: "20px", width: "fit-content"}}
                text={`${petData?.f_name}`}
              />
              <CustomButton
                onClick={() => setEditPetModal(true)}
                icon={edit}
                text={"Editar"}
                bgColor={"#EE701E"}
              />
            </div>

            <div className='row row-gap-4 pet_prfile_right_icons'>
              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Sexo"}
                  text={petData?.sex}
                  icon={genderIcon}
                />
              </div>
              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Fecha de nacimiento"}
                  text={petData?.dob?.split("T")[0]}
                  icon={TodayIcon}
                />
              </div>
              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Estaba esterilizada?"}
                  text={petData?.is_sterillized == "true" ? "Sí" : "No"}
                  icon={Injection}
                />
              </div>
              {/* 00000000000000 */}
              <div className='col-md-4 col-sm-6  my-auto'>
                <IconWithText
                  title={"Calificación"}
                  text={petData?.qualified}
                  icon={genderIcon}
                />
              </div>

              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Especie"}
                  text={petData?.type}
                  icon={Window}
                />
              </div>
              <div className='col-md-4 col-sm-6 my-auto '>
                <IconWithText
                  title={"Raza"}
                  text={petData?.raza}
                  icon={raceIcon}
                />
              </div>
              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Color de pelaje"}
                  text={petData?.coat_color}
                  icon={colorIcon}
                />
              </div>
              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Dirección"}
                  text={petData?.address}
                  icon={LoationIcon}
                />
              </div>
              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Departamento"}
                  text={petData?.department}
                  icon={departmentIcon}
                />
              </div>

              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Provincia"}
                  text={petData?.province}
                  icon={townIcon}
                />
              </div>
              <div className='col-md-4 col-sm-6 my-auto'>
                <IconWithText
                  title={"Distrito"}
                  text={petData?.district}
                  icon={community2}
                />
              </div>
            </div>

            <div className='  d-flex align-items-center justify-content-between mt-3'>
              <div className='pp_owner_name '>
                <h3>Dueña</h3>
                <h4 className='text-capitalize'>
                  {petData?.user?.f_name} {petData?.user?.l_name}
                </h4>
                <h5 className='fs-6'>{petData?.user?.phone}</h5>
              </div>

              <div className='pet_qr_code' onClick={() => handleDownload()}>
                <QRCode
                  value={"http://192.168.1.91:3000" + window.location.pathname}
                  size={80}
                  bgColor='rgba(0, 0, 0, 0)'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        size={"90%"}
        show={editPetModal}
        title={"Register Agreement"}
        onClose={() => setEditPetModal(false)}
        showCloseBtn={true}
        children={
          <>
            <div className='d-flex flex-column gap-4'>
              <FromGroup rowCount={3}>
                <FromGroup.Input
                  required={true}
                  label={"Nombres"}
                  placeholder='Nombre de la mascota'
                />
                <FromGroup.Input
                  required={true}
                  label={"Apellidos"}
                  placeholder='Apellidos del usuario'
                />
                <FromGroup.Input
                  required={true}
                  type={"date"}
                  label={"Fecha de nacimiento"}
                />
                {/*  */}
                <CustomSelect
                  required={true}
                  label={"Sexo de la mascota"}
                  placeholder='Apellidos del usuario'
                />
                <CustomSelect
                  required={true}
                  label={"¿La mascota está esterilizada?"}
                  placeholder='No'
                />
                <CustomSelect label={"Calificación "} required={true} />
                <CustomSelect
                  required={true}
                  label={"Especie"}
                  placeholder='Seleccione'
                />
                <CustomInput
                  required={true}
                  label={"Raza"}
                  placeholder='Seleccione'
                />
                <CustomInput
                  required={true}
                  label={"Color de pelaje"}
                  placeholder='Color de pelaje'
                />
              </FromGroup>

              {/*  */}

              <FromGroup rowCount={1}>
                <CustomInput
                  required={true}
                  label={"Dirección"}
                  placeholder='Escriba la dirección...'
                />
              </FromGroup>

              <FromGroup rowCount={3}>
                <CustomSelect
                  required={true}
                  label={"Departamento"}
                  placeholder='Seleccione'
                />
                <CustomSelect
                  required={true}
                  label={"Provincia"}
                  placeholder='Seleccione'
                />
                <CustomSelect
                  required={true}
                  label={"Distrito"}
                  placeholder='Seleccione'
                />
              </FromGroup>
            </div>

            <hr />

            <div className='modal_buttons '>
              <button className='confirm_button'>GUARDAR</button>
              <button className='cancel_button'>Cerrar</button>
            </div>
          </>
        }
      />
    </div>
  );
};

export default PetPrfile;
