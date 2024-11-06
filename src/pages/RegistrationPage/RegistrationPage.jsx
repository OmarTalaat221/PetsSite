import React, { useState } from "react";

import "./style.css";
import { orangeOval } from "../../assets/svgIcons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../API/baseUrl";
import toast from "react-hot-toast";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

const RegistrationPage = () => {
  const [newRig, setNewRig] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleRgistration = async () => {
    const dataset = {
      ...newRig,
    };

    await axios
      .post(`${BASE_URL}user/sign_up`, dataset)
      .then((res) => {
        console.log(res);

        if (res.data.status == "success") {
          toast.success("Te registraste exitosamente");
          navigate("/login");
        } else if (res.data.message == "This Email Existing") {
          toast.error("Este correo electrónico existe");
        } else {
          toast.error("Hay un problema");
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {});
  };

  return (
    <div className="registration_page_container">
      <div className="registration_page">
        <h2>Regístrate</h2>
        <form>
          <div>
            <label>Nombre de usuario</label>
            <input
              value={newRig.name}
              onChange={(e) => {
                setNewRig({
                  ...newRig,
                  name: e.target.value,
                });
              }}
              type="text"
              name="name"
              placeholder="Nombre de usuario"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              value={newRig.email}
              onChange={(e) => {
                setNewRig({
                  ...newRig,
                  email: e.target.value,
                });
              }}
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <label>Teléfono:</label>
            <input
              value={newRig.phone}
              onChange={(e) => {
                setNewRig({
                  ...newRig,
                  phone: e.target.value,
                });
              }}
              type="number"
              name="phone"
              placeholder="Teléfono"
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              value={newRig.password}
              onChange={(e) => {
                setNewRig({
                  ...newRig,
                  password: e.target.value,
                });
              }}
              type="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>
          <div>
            <label>Tipo:</label>
            <CustomSelect
              data={[
                { label: "Usuario", value: "user" },
                { label: "Vendedor", value: "seller" },
              ]}
              onChange={(e) => {
                setNewRig({
                  ...newRig,
                  type: e?.value,
                });
              }}
              placeholder={"Typo..."}
            />
          </div>

          <div className="enter ">
            <div
              className="oval_button"
              style={{
                position: "relative",
                fill: "rgb(248, 100, 8)",
              }}
            >
              {orangeOval}

              <div
                className="oval_btn_text"
                onClick={() => handleRgistration()}
              >
                Registrar...
              </div>
            </div>

            <p className="my-0">
              <a className="c_pointer">¿Ya tienes cuenta?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
