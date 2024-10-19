// import AboutBenefits from '../../components/AboutPage/AboutBenefits/AboutBenefits';

import { useEffect, useState } from "react";
import AboutBanner from "../../components/AboutUsPage/AboutBanner/AboutBanner";
import AboutBenefits from "../../components/AboutUsPage/AboutBenefits/AboutBenefits";
import AboutResponsibility from "../../components/AboutUsPage/AboutResponsibility/AboutResponsibility";
import NoNeedLostPets from "../../components/AboutUsPage/NoNeedLostPets/NoNeedLostPets";
import RejestrationBenifits from "./../../components/AboutPage/RejestrationBenifits/RejestrationBenifits";
import axios from "axios";
import { base_url } from "../../utils";

export default function AboutUs() {
  const [aboutPage, setAboutPage] = useState({});
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(false);

  const petGetAboutData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/user/about`);
      if (res.status === 200 && Array.isArray(res.data.result.services)) {
        setAboutData(res.data.result.services);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const petGetAboutPage = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/admins/about_data`);
      if (res.status === 200) {
        setAboutPage(res.data.result);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    petGetAboutPage();
    petGetAboutData();
  }, []);
  return (
    <div>
      <AboutBanner loading={loading} aboutPage={aboutPage} />
      <NoNeedLostPets loading={loading} aboutPage={aboutPage} />
      <RejestrationBenifits loading={loading} aboutData={aboutData} />
      <AboutResponsibility loading={loading} aboutPage={aboutPage} />
    </div>
  );
}
