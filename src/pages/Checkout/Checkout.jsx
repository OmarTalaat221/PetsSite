import React, { useState, useEffect } from "react";
import "./style.css";
import Title from "../../components/Title/Title";
import Typo from "./../../utils/Typo/Typo";
import FromGroup from "./../../components/FromGroup/FromGroup";
import CheckBox from "./../../components/checkbox/CheckBox";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import CreditCard from "../../components/CheckoutPage/CreditCard/CreditCard";
import image from "../../assets/images/1.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { base_url } from "../../utils";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";
import Select from "react-select";
import { clearCart } from "../../redux/cartSlice";

const Checkout = () => {
  // const porducts = [
  //   {
  //     img: image,
  //     name: "Product Name",
  //     price: "12.00",
  //   },
  // ];
  let user = JSON.parse(localStorage.getItem("petsUser"));

  const cartData = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [delivary, setdelivary] = useState([]);
  const [ChooseDelivary, setChooseDelivary] = useState(false);

  const [CheckoutData, setCheckoutData] = useState({
    Client_telephone: user?.phone,
    client_name: user?.name,
    client_Id: user?.id,
    client_location: null,
    client_location_refrance: null,
    Delivery: null,
    credit_card: null,
    expire_date: null,
    security_code: null,
    name_on_card: null,
  });

  const handelCheckOut = async () => {
    setLoading(true);
    let order = JSON.parse(localStorage.getItem("pits_cart"));

    console.log(CheckoutData);

    console.log(user);
    console.log(order);

    const joinedCountsAndIds = order
      .map((product) => product.id + "**" + product.count)
      .join("**pets**");

    console.log(joinedCountsAndIds);

    const dataSendToCheck = {
      user_id: user?.id,
      delivary_id: CheckoutData?.value,
      product_id: joinedCountsAndIds,
      full_name: CheckoutData?.client_name || user?.name,
      phone: CheckoutData?.Client_telephone,
      national_number: CheckoutData?.client_Id,
      location: CheckoutData?.client_location,
      location_reference: CheckoutData?.client_location_refrance,
      credit_card: CheckoutData?.credit_card,
      expire_date: CheckoutData?.expire_date,
      security_code: CheckoutData?.security_code,
      name_on_card: CheckoutData?.name_on_card,
    };

    axios
      .post(base_url + `/user/add_new_order`, dataSendToCheck)
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          toast.success(res.data.message);
          dispatch(clearCart());
        } else if (res.data.status == "faild") {
          toast.error(res.data.message);
        } else {
          toast.error("someThing went Wrong");
        }
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  const getDelivary = () => {
    axios
      .get(base_url + `/admins/get_all_delivery_for_admin `)
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          setdelivary([...res.data.Delivery]);
        } else if (res.data.status == "faild") {
          toast.error(res.data.message);
        } else {
          toast.error("someThing went Wrong");
        }
      })
      .finally(() => {})
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getDelivary();
  }, []);

  let delivaryOptions = delivary?.map((item) => {
    return { label: item.name, value: item.id };
  });

  console.log(delivaryOptions);

  return (
    <div className="checkout_page">
      {/* <Typo my={"10px"} position={"center"} variant={"h6"} fw={"bold"}>
        Registro Único de Mascotas del Perú
      </Typo> */}

      <div className="checkout_container">
        <div className="container">
          <div className="row gy-5">
            <div className=" order-1 order-0 col-md-6 col-12  d-flex flex-column gap-3  ">
              <FromGroup rowCount={1}>
                <FromGroup.Input
                  label={
                    <Typo color={"white "} fw={"bolder"} variant={"h3"}>
                      Contacto
                    </Typo>
                  }
                  type="number"
                  placeholder="Número de teléfono para contacto"
                  defaultValue={user?.phone}
                  onChange={(e) => {
                    setCheckoutData({
                      ...CheckoutData,
                      Client_telephone: e.target.value,
                    });
                  }}
                />
              </FromGroup>
              <div className="d-flex align-items-center gap-3">
                <input
                  type="checkbox"
                  style={{ scale: "1.5", border: "none", outline: "none" }}
                  onChange={(e) => setChooseDelivary(e.target.checked)}
                />
                <div>
                  <Typo variant={"sm"}>
                    <span style={{ color: "white" }}> ¿Agregar envío?</span>
                  </Typo>
                  <Typo color={"white "} variant={"sm"}>
                    <span style={{ color: "white" }}>
                      {" "}
                      Nuestro local de recojo gratuito se encuentra en la Av.
                      Perú cuadra 42, SMP (Lima){" "}
                    </span>
                  </Typo>
                </div>
              </div>
              {ChooseDelivary ? (
                <>
                  <div>
                    <Select
                      placeholder="Número de teléfono para contacto"
                      options={delivaryOptions}
                      style={{ color: "black" }}
                      onChange={(e) => {
                        console.log(e);
                        setCheckoutData({
                          ...CheckoutData,
                          Delivery: e.value,
                        });
                      }}
                    />
                  </div>
                  <FromGroup rowCount={2}>
                    <FromGroup.Input
                      placeholder="Nombre completo"
                      defaultValue={user?.name}
                      onChange={(e) => {
                        setCheckoutData({
                          ...CheckoutData,
                          client_name: e.target.value,
                        });
                      }}
                    />
                    <FromGroup.Input
                      placeholder="DNI o C.E."
                      type="number"
                      onChange={(e) => {
                        setCheckoutData({
                          ...CheckoutData,
                          client_Id: e.target.value,
                        });
                      }}
                    />
                  </FromGroup>
                  <FromGroup rowCount={1}>
                    <FromGroup.Input
                      placeholder={
                        "Dirección (Delivery disponible en Lima Metropolitana)"
                      }
                      onChange={(e) => {
                        setCheckoutData({
                          ...CheckoutData,
                          client_location: e.target.value,
                        });
                      }}
                    />
                    <FromGroup.Input
                      placeholder={
                        "Referencia (Delivery disponible en Lima Metropolitana)"
                      }
                      onChange={(e) => {
                        setCheckoutData({
                          ...CheckoutData,
                          client_location_refrance: e.target.value,
                        });
                      }}
                    />
                  </FromGroup>
                </>
              ) : null}
              <div className="d-flex gap-2 mt-3">
                <Typo color={"white "} variant={"sm"}>
                  *
                </Typo>
                <Typo color={"white "} variant={"sm"}>
                  El precio del envío puede variar de acuerdo a la distancia,
                  accesibilidad de la zona o tarifa de la empresa de transporte.
                </Typo>
              </div>
              <div className="d-flex gap-2">
                <Typo color={"white "} variant={"sm"}>
                  *
                </Typo>
                <Typo color={"white "} variant={"sm"}>
                  envíos fuera de Lima Metropolitana se realizan a través de
                  Olva o Shalom. En caso de preferir o necesitar otra empresa de
                  transporte, el precio podría ser distinto.
                </Typo>
              </div>
              <Typo color={"white "} fw={"bolder"} variant={"h3"}>
                Método de pago
              </Typo>{" "}
              <CreditCard getData={CheckoutData} setGetData={setCheckoutData} />
              <Typo
                cursor={"pointer"}
                position={"center"}
                py={"10px"}
                br={"10px"}
                variant={"md"}
                color={"white "}
                bg={"rgb(36 49 94)"}
                onClick={() => {
                  handelCheckOut();
                }}
              >
                <p style={{ margin: "auto", width:"fit-content", textAlign:"center" }}>
                  {" "}
                  {loading ? (
                    <HashLoader size={25} color="white" />
                  ) : (
                    " Pay now"
                  )}
                </p>
              </Typo>
              {/* <Typo
                cursor={"pointer"}
                position={"center"}
                py={"10px"}
                br={"10px"}
                variant={"h4"}
                fw={"semibold"}
                color={"white "}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  handelCheckOut();
                }}
              >
                {loading ? (
                  <HashLoader size={25} color="white" />
                ) : (
                  "pay"
                )}
              </Typo> */}
            </div>
            <div className="col-md-6 order-0 order-md-1  col-12 px-5">
              <div className="checkout_products">
                {cartData.map((prod) => {
                  return (
                    <div className=" checkout_prod d-flex align-items-center justify-content-between mb-3">
                      <div className="prod_image_name">
                        <div className="prod_image">
                          <img src={image} alt="" />
                          <div
                            style={{ color: "white" }}
                            className="count_padge"
                          >
                            {prod.count}
                          </div>
                        </div>
                        <Typo color={"white "} variant={"md"} fw={"bolder"}>
                          {prod.prodName}
                        </Typo>
                      </div>
                      <div>
                        <Typo color={"white "} variant={"md"}>
                          ${prod.price}
                        </Typo>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4"></div>
              <div className="d-flex align-items-center justify-content-between">
                <Typo fw={"bolder"} variant={"md"} color={"white "}>
                  Subtotal (
                  {cartData?.reduce((acc, curr) => {
                    return +acc + +curr.count;
                  }, 0)}{" "}
                  productos)
                </Typo>
                <Typo fw={"bolder"} color={"white "}>
                  S/ $
                  {cartData.reduce((acc, curr) => {
                    return +acc + +curr.count * +curr.price;
                  }, 0)}
                </Typo>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <Typo color={"white "} fw={"bolder"} variant={"md"} s>
                  Delivery o envío
                </Typo>
                <Typo fw={"bolder"} color={"white "}>
                  S/ 10
                </Typo>
              </div>
              <Typo
                color={"white "}
                position={"end"}
                mt={"10px"}
                fw={"bolder"}
                variant={"h2"}
              >
                S/{" "}
                {(
                  cartData.reduce((acc, curr) => {
                    return +acc + +curr.count * +curr.price;
                  }, 0) + 10
                ).toFixed(2)}
              </Typo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
