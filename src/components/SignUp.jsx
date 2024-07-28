import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slice/userSlice";
import Form from "./Form";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    axios
      .post("https://api.escuelajs.co/api/v1/users/", {
        email,
        password,
      })
      .then((response) => {
        const data = response.data;
        dispatch(
          setUser({ email: data.email, id: data.id, token: data.token })
        );
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
