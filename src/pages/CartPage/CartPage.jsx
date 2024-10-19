import React, {useEffect, useState} from "react";
import "./style.css";
import image from "../../assets/images/1.png";
import {exitModal} from "../../assets/svgIcons";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  addOneToCart,
  minusFromCart,
  removeFromCart,
} from "../../redux/cartSlice";
import Typo from "../../utils/Typo/Typo";
const CartPage = () => {
  const navigate = useNavigate();

  const cartData = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleMinusCart = (prod) => {
    prod.count > 1 &&
    dispatch(minusFromCart(prod));
  };
  const hadnleAddOneToCart = (prod) => {
    dispatch(addOneToCart(prod));
  };

  const handleRemoveFromCart = (prod) => {
    dispatch(removeFromCart(prod));
  };

  return (
    <div className='cart_page'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-12 overflow-auto '>
            {cartData && cartData.length >= 1 ? (
              <table className='product-table'>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((prod, index) => (
                    <tr key={index}>
                      <td className='d-flex align-items-center'>
                        <img
                          src={prod.image}
                          width={"150"}
                          alt='product'
                          className='product-image'
                        />
                        <span className='product-name'>
                          {prod.prodName}
                        </span>
                      </td>
                      <td className='fw-bolder'>S/ {prod.price}</td>
                      <td>
                        <div className='quantity-control'>
                          <button onClick={() => handleMinusCart(prod)}>
                            -
                          </button>
                          <span>{prod.count}</span>
                          <button onClick={() => hadnleAddOneToCart(prod)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td className='fw-bolder'>
                        S/ {+prod.count * +prod.price}
                      </td>
                      <td>
                        <button
                          className='remove-button'
                          onClick={() => {
                            handleRemoveFromCart(prod);
                          }}
                        >
                          {exitModal}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Typo my={"100px"} fw={"bolder"} variant={"h3"} color={"dark1"} position='center'>No hay productos en el carrito</Typo>
            )}
          </div>
          <div className='col-lg-4 col-12 '>
            <div className='order-summary'>
              <h2>Tu orden</h2>
              <hr />
              <div className='order-total'>
                <span>Total</span>
                <span>S/ {cartData?.reduce((acc,  curr)=>{
                  return(+acc + curr.count * +curr.price)
                } , 0)}</span>
              </div>
              <hr />
              <p>
                Costo del envío a provincia o delivery será calculado al
                realizar el pago.
              </p>
              <button className='pay-now' onClick={() => navigate("/checkout")}>
                Pagar ahora
              </button>
              <button className='continue-shopping'>Seguir comprando</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
