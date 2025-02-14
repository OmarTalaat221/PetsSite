import axios from "axios";
import React, { useState } from "react";

import { toast } from "react-hot-toast";
import { base_url } from "../../utils";

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);

  const handleGetUsers = async () => {
    setLoading(true);
    await axios
      .get(`${base_url}/admins/all_users`)
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          setUsers(res?.data?.result);
          setOriginalUsers(res?.data?.result);
        } else {
          toast.error("There is a problem in users data!");
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    handleGetUsers,
    users,
    setUsers,
    originalUsers,
    setOriginalUsers,
    loading,
    setLoading,
  };
};

export default useGetUsers;
