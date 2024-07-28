import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (token) {
      axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setProfile(response.data))
        .catch((Error) => console.log(Error));
    }
  }, [token]);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
gg;
