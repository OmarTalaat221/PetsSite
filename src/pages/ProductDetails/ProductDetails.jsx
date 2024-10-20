import "./style.css";
import productDetailsImg from "../../assets/images/product_details.png";
import {ovalIcon2} from "../../assets/svgIcons";
import {useEffect, useState} from "react";
import img1 from "../../assets/images/Screenshot_2024-08-29_165705-removebg-preview.png";
import img2 from "../../assets/images/Screenshot_2024-08-29_165627-removebg-preview.png";
import {AccordionItem} from "react-bootstrap";
import ProductDetailAccordian from "../../components/ProductDetailAccordian/ProductDetailAccordian";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import food2 from "../../assets/images/2.png";
import {
  addOneToCart,
  addToCart,
  minusFromCart,
  removeFromCart,
} from "../../redux/cartSlice";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "../../utils";

export default function ProductDetails() {
 
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const{product_id}=useParams()
  console.log(product_id);
  
  const cartData = useSelector((state) => state.cart.cart);
  const location = useLocation();
  console.log(location?.state?.data?.id);
  console.log(location);

  
  const [isInCart, setIsInCart] = useState(false);
  // const {data} = location?.state;
  const[data ,setData]=useState([])


  const getProductData = () =>{
   

    axios.get(base_url + `/user/product_details/${product_id}`)
    .then(res =>{
      if(res.data.status == "success"){
        console.log(res)
        console.log(res.data.result)

        
        setData(res.data.result)
      }else if(res.data.status == "faild"){
        toast.error(res.data.message)
      }else{
        toast.error("someThing went wrong")

      }
    }).finally(()=>{
      console.log(data);
      
    }).catch(e => console.log(e))
  }
  
  useEffect(() => {
    console.log(data);

    getProductData()
  }, []);

  function handleIncrease() {
    if (isInCart) {
      dispatch(addOneToCart(data));
      toast.success("Agregado al carrito exitosamente");
      return;
    }

    setNumber((prevState) => prevState + 1);
  }

  useEffect(() => {
    console.log(cartData);
    const doesExist = cartData.find((cartProd) => cartProd.id == data.id);
    if (doesExist) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
      setNumber(0)
    }
  }, [cartData]);

  function handleDecrease() {
    const countInCart = cartData.find((item) => item.id == data.id)?.count;

    if (+countInCart <= 1) {
      dispatch(removeFromCart(data));
      //   toast.success("Eliminado correctamente del carrito.");
      toast.success("DELETE");
      setNumber(0);
      return;
    }
    if (isInCart) {
      dispatch(minusFromCart(data));
      toast.success("Eliminado correctamente del carrito.");
      return;
    }
    if (number < 1) {
      return;
    }
    setNumber((prevState) => prevState - 1);
  }

  const handleAddToCart = async () => {
    if (number == 0) {
      toast.error("Introduce el número del producto.");
      return;
    }
    
    if (isInCart) {
        dispatch(removeFromCart(data));
        toast.success("Eliminado correctamente del carrito.");
        setNumber(0);
      return;
    }

    const dataset = {
      ...data,
      count: number,
    };
    dispatch(addToCart(dataset));
    toast.success("Agregado al carrito exitosamente");
  };

  console.log(data.features);
  console.log(data.features);

  
  return (
    <div className='product_details_page'>
      <div className='product_details_container'>
        <div className='product_details_img'>
          <img src={food2} />
        </div>

        <div className='product_details_text_container'>
          <h2 className='product_details_title'>
            <img src={img1} />
            <span>{data.name_es}</span>
            <img src={img2} />
          </h2>
          <div   style={{
      width:"100%",
      display:"flex",
      flexWrap:"wrap",
      padding:"10px 0"
    }} >
{data?.features && data?.features?.length > 0 ? (
  data?.features?.map((feature, index) => (

    <div  style={{
      width:"45%",
      padding:"0",
      margin:"0"
    }}>
  <ul key={index}
   style={{ padding:"0",
    margin:"0"}}
    >

      <li>{feature?.feature_description_es}</li>
    </ul>
    </div>
  
  ))
) : (
  <p>No features available</p>
)}
      </div>

    

          <p>
            {data.description_es}
          </p>

          <ProductDetailAccordian 
          getData={data}
          />

          <div className='product_details_text_Incluye'>
            <p>S/ {data.price}</p>
            <p>Incluye boleta o factura</p>
          </div>

          <div className='product_details_Comprar'>
            <div className='product_details_number'>
              <span onClick={handleDecrease}>-</span>
              <div>
                {cartData.find((item) => item.id == data.id)?.count || number}
              </div>
              <span onClick={handleIncrease}>+</span>
            </div>
            <div
              onClick={() => handleAddToCart()}
              className='oval_button os_oval text-center'
              style={{
                position: "relative",
                fill: "rgb(248, 100, 8)",
              }}
            >
              {ovalIcon2}

              <div className='oval_btn_text'>
                {isInCart ? "Eliminación" : "Comprar"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
