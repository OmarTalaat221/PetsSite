import React, {useEffect, useState} from "react";
import Preview from "../../components/StrarPage/Previwe/Preview";
import PetFood from "./../../components/StrarPage/PetFood/PetFood";
import OwnerShip from "../../components/StrarPage/ownerShip/OwnerShip";
import StartFindPet from "../../components/StrarPage/startFindPet/startFindPet";
import LoveProof from "../../components/StrarPage/LoveProof/LoveProof";
import HowToGet from "../../components/StrarPage/HowToGet/HowToGet";
import EndSection from "../../components/StrarPage/EndSection/EndSection";
import TheySay from "../../components/StrarPage/TheySay/TheySay";
import "./style.css";
import axios from "axios";
import {base_url} from "../../utils";

const StartPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [saysData, setSaysData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [homeData, setHomeData] = useState({});
  const [loading, setLoading] = useState(false);

  const petGetHomePage = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/user/home_page`);

      if (res.status === 200 && Array.isArray(res.data.result.products)) {
        setProductsData(res.data.result.products);
        setFeaturesData(res.data.result.features);
        setServicesData(res.data.result.services);
        setSaysData(res.data.result.says);
        setBrandsData(res.data.result.brands);
        setHomeData(res.data.result.home);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    petGetHomePage();
  }, []);

  return (
    <div className='start_page_container'>
      <Preview loading={loading} homeData={homeData} />
        <PetFood
          loading={loading}
          productsData={productsData}
          featuresData={featuresData}
        />
      <OwnerShip loading={loading} homeData={homeData} />
      <StartFindPet loading={loading} homeData={homeData} />
      <LoveProof loading={loading} homeData={homeData} />
      <HowToGet loading={loading} servicesData={servicesData} />
      <TheySay loading={loading} saysData={saysData} />
      <EndSection loading={loading} brandsData={brandsData} />
    </div>
  );
};

export default StartPage;
