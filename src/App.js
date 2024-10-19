
import { Route, Routes, useLocation } from "react-router-dom";
import Adobt from "./pages/Adobt/Adobt";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Footer_1 from './components/Footer_1/Footer_1';
import Header_1 from './components/Header/Header_1';
import Header_2 from './components/Header/Header_2';
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import FindPet from "./pages/FindPet/FindPet";
import StartPage from "./pages/StartPage/StartPage";
import Login from './pages/Login/Login';
import ForgetPassword from './pages/ForgetPassword/ForegtPassword';
import Registration from "./pages/Registration/RejistrationPage";
import SendResetCodePage from "./pages/SendResetCode/SendResetCodePage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import Footer_2 from "./components/Footer_2/Footer_2";
import PreguntasFrecuentes from './pages/PreguntasFrecuentes/PreguntasFrecuentes/PreguntasFrecuentes';
import "./App.css";
import UserProfile from "./pages/UserPetsPage/UserPetsPage";
import PetPrfile from "./pages/PetPrfile/PetPrfile";
import ResgistrationPage from "./pages/Login/Login";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import UseGeneral from "./hooks/useGeneral";
import { useEffect } from "react";
import Checkout from "./pages/Checkout/Checkout";
import CartPage from "./pages/CartPage/CartPage";

export default function App() {
  const location = useLocation();


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
    }, 150);
  }, [location.pathname]);

  return (
    <div>
      <div className="header_container">
      <Header_1 bgColor={location.pathname == "/" ? "#FBF5E7" : location.pathname == "/about" ? "#FFE4C3" : "#fff"}/>
      <Header_2 bgColor={location.pathname == "/" ? "#FBF5E7" : location.pathname == "/about" ? "#FFE4C3" : "#fff"}/>
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
         <Route path="/adopt" element={<Adobt />}/>
         <Route path="/about" element={<AboutUs />}/>
         <Route path="/contact" element={<Contact />}/>
         <Route path="/findpet" element={<FindPet />}/>
         <Route path="/" element={<StartPage />}/>
         <Route path="/productDetails/:product_id" element={<ProductDetails />}/>
         {/* -------------------- */}

         <Route path="/login" element={<Login />}/>
         <Route path="/forgetPassword" element={<ForgetPassword />}/>
         {/* <Route path="/registration" element={<Registration />}/> */}
         <Route path="/sendresetcode" element={<SendResetCodePage />}/>
         <Route path="/resetpassword" element={<ResetPasswordPage />}/>
         {/* //-----//-----//-----//----- // */}
         <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes/>}/>


         {
          localStorage.getItem("petsUser") &&
         <Route path="/profile" element={<UserProfile />}/>
         }
         <Route path="/registration" element={<RegistrationPage />}/>
         
         <Route path="/pet_profile/:petId" element={<PetPrfile />}/>
         <Route path="/checkout" element={<Checkout />}/>
         <Route path="/cart" element={<CartPage />}/>
         <Route path="*" element={<StartPage />}/>

      </Routes>
      {/* <Footer bgColor={location.pathname == "/about" ? "#FFE4C3": "#fff"}/> */}
      {/* <Footer_1 /> */}
      <Footer_2 />

      <Toaster containerClassName='toastCon'
      
      position='bottom-right'

      toastOptions={{style:{
        zIndex:9999999999999999
      }}} />
    </div>
  )
}
