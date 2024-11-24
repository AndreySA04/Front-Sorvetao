import {
  $Button,
  $ButtonContainer,
  $Container,
  $FormContainer,
  $ImageForm,
  $Input,
  $InputContainer,
  $Label,
  $Link,
  $TogglePasswordButton,
} from "./styles";
import sorvetao from "../../assets/images/sorvetao.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "@/utils/api";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await api.post("/users/authenticate", data);

      const { token } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", data.email);

      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
      });

      navigate("/conciliar");
    } catch (error) {
      toast.error("Erro ao realizar login. Verifique suas credenciais.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <$Container>
      <$FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)(e);
        }}
      >
        <$ImageForm src={sorvetao} />
        <$InputContainer>
          <$Label>EMAIL</$Label>
          <$Input
            type="email"
            {...register("email", { required: "O email é obrigatório" })}
          />
        </$InputContainer>
        <$InputContainer>
          <$Label>SENHA</$Label>
          <$Input
            type={passwordVisible ? "text" : "password"}
            {...register("password", { required: "A senha é obrigatória" })}
          />
          <$TogglePasswordButton onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <FaEye color="#9c27b0" />
            ) : (
              <FaEyeSlash color="#9c27b0" />
            )}
          </$TogglePasswordButton>
          <$Link onClick={() => navigate("esqueceu")}>Esqueceu a senha?</$Link>
        </$InputContainer>
        <$ButtonContainer>
          <$Button type="submit">ENTRAR</$Button>
        </$ButtonContainer>
      </$FormContainer>
    </$Container>
  );
};

export default Login;
