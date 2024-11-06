import React, { useState, useEffect } from "react";

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
  userPlus,
} from "../../assets/svgIcons";
import CustomInput from "./../../components/CustomInput/CustomInput";
import Title from "../../components/Title/Title";
import CustomButton from "./../../components/CustomButton/CustomButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import FormCard from "../../components/FormCard/FormCard";

import { petsData } from "./../../utils/data/petsData";
import axios from "axios";
import { BASE_URL } from "../../API/baseUrl";
import toast from "react-hot-toast";
import useGetDepartments from "./../../components/CustomHooks/useGetAllDepartments";
import useGetDepProvencia from "./../../components/CustomHooks/useGetDepProvencia";
import useGetAllQualifications from "./../../components/CustomHooks/useGetAllQualification";
import useGetProvDis from "./../../components/CustomHooks/useGetProvDis";
import useGetAllEspecie from "../../components/CustomHooks/useGetAllEspecie";
import useGetAllRaza from "./../../components/CustomHooks/useGetAllRaza";
import { uploadImage } from "../../components/CustomHooks/uploadImage";
import { useMediaQuery } from "./../../components/CustomHooks/useMediaQueries";
import { Spinner } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Select from "react-select";
import useGetUsers from "./../../components/CustomHooks/useGetUsers";
import Alert from "./../../components/Alert/Alert";
import Datos from "../../components/PetsModalComponents/Datos/Datos";
import Foto from "../../components/PetsModalComponents/Foto/Foto";
import Domicilio from "../../components/PetsModalComponents/Domicilio/Domicilio";
import Salud from "../../components/PetsModalComponents/Salud/Salud";
const UserProfile = () => {
  const navigate = useNavigate();

  const [openRejester, setOpenRejester] = useState(false);

  const [petUser, setPetUser] = useState(
    JSON.parse(localStorage.getItem("petsUser"))
  );

  const [disableForm, setDisableForm] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [userPets, setUserPets] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const [alert, setAlert] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRegisteredModal, setIsRegisteredModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("1");
  const [addLoading, setAddloading] = useState(false);
  const [petLoading, setPetLoading] = useState(false);
  const [moreDetailsModal, setMoreDetailsModal] = useState(false);

  const [newPit, setNewPet] = useState({
    user_id: petUser?.id,
    name: petUser?.name,
    email: petUser?.email,
    phone: petUser?.phone,
    password: "",
    f_name: "",
    l_name: "",
    sex: "",
    departmento_id: "",
    provincia_id: "",
    districto_id: "",
    micro: "",
    bio: "",
    type: "",
    raza: "",
    qualified: "",
    coat_color: "",
    dob: "",
    officials: "",
    resPersons: [{ name: "", dni: "", phone: "" }],
    address: "",
    piso: "",
    referencia: "",
    mascota_tiene: "",
    esta_cast: "",
    visit_per: "",
    cuenta_con_vac_sext: "",
    cuenta_con_vac_trip_fel: "",
    cuenta_con: "",
    fecha_de_date: "",
    posee_alg_alerg: "",
    posee_alg_enf: "",
    pet_img: null,
    size: "",
    is_sterillized: "",
    animail_f_name: "",
    animail_l_name: "",
    hide_as_stri: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    if (email === "") {
      setAlert("Correo: Ingrese un correo válido");
    } else {
      setAlert("");
      setIsRegisteredModal(true);
      setIsModalOpen(false);
    }
  }

  const getUserAnimals = async () => {
    const accesss_token = JSON.parse(
      localStorage.getItem("petsUser")
    ).access_token;

    setLoading(true);

    await axios
      .get(`${BASE_URL}user/my_animals?token=${accesss_token}`)
      .then((res) => {
        console.log(res);
        setUserPets(res.data.result);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!searchParams.has("state")) {
      searchParams.set("state", "user");
      setSearchParams(searchParams);
    }

    console.log(searchParams.get("state"));

    const petsUser = JSON.parse(localStorage.getItem("petsUser"));

    setUserData(petsUser);
    getUserAnimals(petsUser.access_token);
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
  const tabsModal = [
    {
      id: "1",
      name: "Datos",
    },
    {
      id: "2",
      name: "Domicilio",
    },
    {
      id: "3",
      name: "Salud",
    },
    {
      id: "4",
      name: "Foto",
    },
  ];

  const handleEmptyData = () => {
    setNewPet({
      user_id: petUser?.id,
      name: petUser?.name,
      email: petUser?.email,
      phone: petUser?.phone,
      password: "",
      f_name: "",
      l_name: "",
      sex: "",
      departmento_id: "",
      provincia_id: "",
      districto_id: "",
      micro: "",
      bio: "",
      type: "",
      raza: "",
      qualified: "",
      coat_color: "",
      dob: "",
      officials: "",
      resPersons: [{ name: "", dni: "", phone: "" }],
      address: "",
      piso: "",
      referencia: "",
      mascota_tiene: "",
      esta_cast: "",
      visit_per: "",
      cuenta_con_vac_sext: "",
      cuenta_con_vac_trip_fel: "",
      cuenta_con: "",
      fecha_de_date: "",
      posee_alg_alerg: "",
      posee_alg_enf: "",
      pet_img: null,
      size: "",
      is_sterillized: "",
      animail_f_name: "",
      animail_l_name: "",
      hide_as_stri: "",
    });
  };

  function handleCloseModal() {
    setIsModalOpen(false);
    setAlert("");
    setIsSubmitted(false);
    setMoreDetailsModal(false);
    setIsRegisteredModal(false);
    handleEmptyData();
  }

  const handAddPit = async () => {
    setAddloading(true);

    let image = null;
    if (newPit.pet_img) {
      image = await uploadImage(newPit.pet_img);
      delete newPit.pet_img;
    }
    console.log(image);

    //  return

    const concatOfficials = newPit.resPersons
      .map((item) => [item.name, item.dni, item.phone].join("**"))
      .join("**pets**");

    const datasend = {
      ...newPit,
      pet_img: image?.data?.message || "",
      sex: newPit?.sex?.value,
      size: newPit.size.value,
      type: newPit.type.label,
      provincia_id: newPit.provincia_id.value,
      qualified: newPit.qualified.label,
      raza: newPit.raza.value,
      esta_cast: newPit.esta_cast.value,
      departmento_id: newPit.departmento_id.value,
      districto_id: newPit.districto_id.value,
      visit_per: newPit.visit_per.value,
      cuenta_con_vac_sext: newPit.cuenta_con_vac_sext.value,
      cuenta_con_vac_trip_fel: newPit.cuenta_con_vac_trip_fel.value,
      officials: concatOfficials,
      cuenta_con: newPit.cuenta_con.value,
      is_sterillized: newPit.is_sterillized.value,
      posee_alg_alerg: newPit.posee_alg_alerg.value,
      posee_alg_enf: newPit.posee_alg_enf.value,
    };

    console.log(datasend);
    // return
    await axios
      .post(`${BASE_URL}admins/agrag_animal`, datasend)
      .then((res) => {
        if (res) {
          console.log(res);
          if (res.data.status == "success") {
            toast.success(res.data.message);

            handleCloseModal();
          } else {
            toast.error(res.data.message);
          }
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setAddloading(false);
      });
  };

  // const handleAddNewPet = async () => {
  //   if (!selectedImage) {
  //     toast.error("Elige una foto de la mascota.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("image", selectedImage);
  //   await axios
  //     .post(`https://camp-coding.site/pets/api/img_upload`, formData)
  //     .then((res) => {
  //       console.log(res);
  //       if (res) {
  //         // setImgUrl(res?.data?.message);
  //         addNewPetData(res.data.result.image);
  //       } else if (res == "") {
  //         toast.error("There Are Problems");
  //       } else {
  //         toast.error("There Are Problem");
  //       }
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => {
  //       // setImgLoading(false);
  //     });
  // };

  const handleLogout = () => {
    localStorage.removeItem("petsUser");
    navigate("/login");
  };

  const { raza, loading: razaLoading, handleGetAllRaza } = useGetAllRaza();
  const { handleGetUsers, users } = useGetUsers();

  useEffect(() => {
    handleGetUsers();
  }, []);

  const {
    handleGetDepartments,
    departments,
    loading: departmentLoading,
  } = useGetDepartments();

  const {
    handleGetDepProvs,
    loading: depProvLoading,
    depProv,
  } = useGetDepProvencia(newPit?.department?.value);

  const {
    handleGetAllQualifications,
    loading: qualLoading,
    qualifications,
  } = useGetAllQualifications();

  const {
    handleGetProvDis,
    provDis,
    loading: provDisLaoding,
  } = useGetProvDis(newPit?.province?.value);
  const {
    especie,
    handleGetAllEspecie,
    loading: especieLoading,
  } = useGetAllEspecie();

  useEffect(() => {
    handleGetAllRaza();
    handleGetDepartments();
    handleGetAllQualifications();
    handleGetAllEspecie();
  }, []);

  useEffect(() => {
    handleGetDepProvs(newPit?.department?.value);
  }, [newPit?.department?.value]);

  useEffect(() => {
    handleGetProvDis(newPit?.province?.value);
  }, [newPit?.province?.value]);

  return (
    <div className="user_pets_container">
      <div className="modal_tabs">
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

      <div className="user_pets_content">
        <div className="text-end">
          <div className="d-flex align-items-center justify-content-end gap-1">
            <CustomButton
              onClick={() => setIsRegisteredModal(true)}
              bgColor={"#FF9100"}
              text={"Registro"}
            />
            {/* <CustomButton
              onClick={() => (window.location.href = "http://localhost:3000/")}
              bgColor={"#FF9100"}
              text={"Dashboard"}
            /> */}
          </div>
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
                  placeholder="nombre de usuario"
                  disabled={disableForm}
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      name: e.target.value,
                    })
                  }
                />
                <FromGroup.Input
                  required={true}
                  label={"Email"}
                  placeholder="Email"
                  disabled={disableForm}
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      email: e.target.value,
                    })
                  }
                />
                <FromGroup.Input
                  required={true}
                  label={"teléfono"}
                  placeholder="teléfono"
                  disabled={disableForm}
                  type={"number"}
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      phone: e.target.value,
                    })
                  }
                />
              </FromGroup>

              {disableForm ? (
                <div className="following_btn mt-4">
                  <button
                    className="btn d-flex btn-sm btn-primary"
                    onClick={() => setDisableForm(false)}
                  >
                    <span>{edit}</span>
                    <span>Editar</span>
                  </button>
                </div>
              ) : (
                <div className="d-flex algin-item-center gap-3">
                  <div className="following_btn mt-4">
                    <button
                      className="btn d-flex align-items-center gap-2 btn-sm btn-success"
                      onClick={() => setDisableForm(true)}
                    >
                      <span>{saveChanges}</span>
                      <span>Guardar</span>
                    </button>
                  </div>
                  <div className="following_btn mt-4">
                    <button
                      className="btn d-flex align-items-center gap-2 btn-sm btn-danger"
                      onClick={() => setDisableForm(true)}
                    >
                      <span>{cancel_btn}</span>
                      <span>Cancelar</span>
                    </button>
                  </div>
                </div>
              )}
              <div className="following_btn mt-4 text-end">
                <button
                  className="btn d-flex align-items-center gap-2 btn-sm btn-danger"
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
            <Title text={"Tus mascotas"} />
            <div className="petsCards">
              {userPets && userPets?.length >= 1 && Array.isArray(userPets)
                ? userPets?.map((item, index) => {
                    return (
                      <PetCard
                        onClick={() => {
                          navigate(`/pet_profile/${item.id}`, {
                            state: { petData: { ...item } },
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
        title="Seleccionar propietario"
        size="1000px"
        style={{ height: "600px", overflow: "auto" }}
        confirmButton={{
          children: addLoading ? (
            <Spinner size={20} loading={addLoading} color={"#fff"} />
          ) : (
            "GUARDAR"
          ),
          style: { backgroundColor: "#36b9cc" },
          onClick: () => {
            handAddPit();
          },
          props: {
            className: selectedTab !== "4" ? "d-none " : "text-white",
          },
        }}
        cancelButton={{
          children: "Cerrar",
          onClick: () => {
            handleCloseModal();
          },
          style: { backgroundColor: "#858796" },
        }}
        show={isRegisteredModal}
        onClose={handleCloseModal}
        showCloseBtn={true}
        animation={true}
      >
        <div className="modal_tabs">
          {tabsModal?.map((tab, index) => {
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
        {addLoading ? (
          <Spinner size={50} loading={addLoading} color={"rgb(54,185,204)"} />
        ) : (
          <AnimatePresence mode="wait">
            {selectedTab == 1 && (
              <Datos
                setNewPet={setNewPet}
                newPit={newPit}
                setSelectedTab={setSelectedTab}
              />
            )}
            {selectedTab == 2 && (
              <Domicilio
                setNewPet={setNewPet}
                newPit={newPit}
                setSelectedTab={setSelectedTab}
              />
            )}
            {selectedTab == 3 && (
              <Salud
                setNewPet={setNewPet}
                newPit={newPit}
                setSelectedTab={setSelectedTab}
              />
            )}
            {selectedTab == 4 && (
              <Foto
                setNewPet={setNewPet}
                newPit={newPit}
                setSelectedTab={setSelectedTab}
              />
            )}
          </AnimatePresence>
        )}

        {/* <PetsModalComponents /> */}
      </Modal>
    </div>
  );
};

export default UserProfile;
