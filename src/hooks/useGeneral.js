import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {change} from "../redux/lnaguageSlice";

const UseGeneral = () => {
  const language = useSelector((state) => state?.language?.language);

  const [location, setLocation] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [error, setError] = useState(null);


  const dispatch = useDispatch();
  const [data, setData] = useState();
  const changeLanguage = (payload) => {
    dispatch(change(payload));
  };

  const siteData = useSelector((state) => state?.site?.siteData);

  const getUserLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(

        // in success state
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

          // const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
          const url = ` https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1,
`;
          try {
            setLoadingLocation(true)
            const response = await fetch(url);
            const data = await response.json();
            setLocation(data);
          } catch (error) {
            setError('Error fetching location data');
            console.error('Error fetching the country name:', error);
          } finally{
            setLoadingLocation(false)

          }
        },

        // in error state
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              setError("An unknown error occurred.");
              break;
            default:
              setError("An unexpected error occurred.");
              break;
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(()=>{
    getUserLocation();
  },[])


  useEffect(() => {
    if (language.toLowerCase() == "ar") {
      document.body.classList.add("arVersion");
      document.body.classList.remove("enVersion");
    } else {
      document.body.classList.add("enVersion");
      document.body.classList.remove("arVersion");
    }
  }, [language]);
  useEffect(() => {
    if (siteData?.logo) {
      setData(siteData);
    }
  }, [siteData]);

  return {
    language: language?.toLowerCase(),
    changeLanguage: changeLanguage,
    data: data,
    location,
    loadingLocation
  };
};

export default UseGeneral;
