import React from "react";
import axios from "axios";
import { setUser } from "../store/slice/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    axios
      .post(" https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        const data = response.data;
        if (data.access.token) {
          dispatch(
            setUser({
              email: email,
              id: data.id,
              token: data.access_token,
            })
          );
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form title="sign in" handleClick={handleLogin} />
    </>
  );
};

export default Login;
