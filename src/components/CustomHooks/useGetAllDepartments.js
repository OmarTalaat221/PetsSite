import axios from "axios";
import React, { useState } from "react";

import { toast } from "react-hot-toast";
import { base_url } from "./../../utils";

const useGetDepartments = () => {
  const [loading, setLoading] = useState(false);

  const [departments, setDepartments] = useState([]);
  const [originalDepartments, setOriginalDepartments] = useState([]);

  const handleGetDepartments = async () => {
    setLoading(true);
    await axios
      .get(`${base_url}/admins/get_all_departmento_for_admin`)
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          setDepartments(res?.data?.Departments);
          setOriginalDepartments(res?.data?.Departments);
        } else {
          toast.error("There is a problem in departments!");
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    handleGetDepartments,
    departments,
    setDepartments,
    originalDepartments,
    setOriginalDepartments,
    loading,
    setLoading,
  };
};

export default useGetDepartments;
