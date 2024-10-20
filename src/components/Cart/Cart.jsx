import React, {useEffect, useState} from "react";
import "./style.css";
import {
  cancel_btn,
  DeleteIcon,
  trashIcon,
  TrashIcon2,
} from "../../assets/svgIcons";
import cx from "classnames";
import img from "../../assets/images/1.png";
import Stepper from "./../Stepper/Stepper";
import Typo from "./../../utils/Typo/Typo";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOneToCart, minusFromCart, removeFromCart } from "../../redux/cartSlice";
const Cart = ({openCart, setOpenCart}) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const cartData = useSelector((state) => state.cart.cart);
  
  const dispatch = useDispatch()

  const setChangeCount = (type,prod) => {
    if(type == "minus"){
     dispatch(minusFromCart(prod)) 

    }else{
      dispatch(addOneToCart(prod))
    }
  };

  const handleRemoveFromCart = (prod) => {
      dispatch(removeFromCart(prod))
  };

  return (
    <div
      className={cx("cart_container", {open: openCart})}
      onClick={(e) => {
        e.stopPropagation();
        setOpenCart(false);
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='cart_contnet shadow-lg'
      >
        <div className='cart_header'>
          <h2>Tu Carrito</h2>
          <div
            className='close_btn_cart'
            onClick={(e) => {
              e.stopPropagation();
              setOpenCart(false);
            }}
          >
            {cancel_btn}
          </div>
        </div>
            {
              cartData && cartData.length >=1 ? 
        <div className='cart_prods'>
          {cartData?.map((prod, index) => {
            console.log(prod)
            return (
              <div className='cart_prod border-bottom border-light'>
                <div className='prod_image'>
                  <img src={prod.image} alt='' />
                </div>
                <div className='prod_data'>
                  <h5 className='text-light m-0 '>{prod.prodName}</h5>
                  <h5 className='mb-5 text-light'>S/ {prod.price} (Precio)</h5>
                  <div className='d-flex align-items-center  gap-10 jusitfy-content-betweeen'>
                    <Stepper
                      value={prod.count}
                      onChange={(type) => setChangeCount(type, prod)}
                    />
                    <div
                      onClick={() => handleRemoveFromCart(prod)}
                      className=' py-2 cursor-pointer'
                      style={{background:"transparent", color:"white"}}
                    >
                      {TrashIcon2}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className='d-flex aling-items-center justify-between'>
            <Typo variant={"lg"} color={"white"} fw={"bolder"}>
              Total
            </Typo>
            <Typo variant={"lg"} color={"white"}>
              S/{" "}
              {cartData.reduce((acc, curr) => {
                return +acc + +curr.count * +curr.price;
              }, 0)}
            </Typo>
          </div>
          <Typo variant={"md"} color={"white"}>
            Costo del envío a provincia o delivery será calculado al realizar el
            pago.
          </Typo>

          <div className='cart-btns'>
            <Typo
              cursor={"pointer"}
              bg={"white"}
              br={"20px"}
              py={"5px"}
              position={"center"}
              color={"orange"}
              fw={"bolder"}
              variant={"h2"}
              onClick={() => {
                navigate("/checkout");
                setOpenCart(false);
              }}
            >
              Pagar ahora
            </Typo>
            <Typo
              onClick={() => {
                setOpenCart(false);
                navigate("/cart");
              }}
              mt={"20px"}
              bg={"white"}
              br={"20px"}
              cursor={"pointer"}
              py={"5px"}
              position={"center"}
              color={"orange"}
              fw={"bolder"}
              variant={"h2"}
            >
              Ver carrito
            </Typo>
          </div>
        </div>

              :
                           
              

              <Typo my={"100px"} fw={"bolder"} variant={"h3"} color={"light"} position='center'>No hay productos en el carrito</Typo>
            }
      </div>
    </div>
  );
};

export default Cart;
