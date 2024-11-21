import { useNavigate } from "react-router-dom";
import {
  $Button,
  $ButtonContainer,
  $FormContainer,
  $ImageForm,
  $Input,
  $InputContainer,
  $Label,
  $Link,
  $LinkContainer,
} from "../Login/styles";
import { useForm } from "react-hook-form";
import sorvetao from "../../assets/images/sorvetao.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { $Container, $TogglePasswordButton } from "./styles";
import { toast } from "react-toastify";
import api from "@/utils/api";
import Header from "@/components/header";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<RegisterFormData>();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await api.post("/users", data);
      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso!", {
          position: "top-right",
        });

        reset();
        navigate("/");
      }
    } catch (error) {
      toast.error("Erro ao cadastrar. Tente novamente.", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Header />
      <$Container>
        <$FormContainer onSubmit={handleSubmit(onSubmit)}>
          <$ImageForm src={sorvetao} />
          <$InputContainer>
            <$Label>NOME DE USUÁRIO</$Label>
            <$Input type="text" {...register("name", { required: true })} />
          </$InputContainer>
          <$InputContainer>
            <$Label>EMAIL</$Label>
            <$Input type="email" {...register("email", { required: true })} />
          </$InputContainer>
          <$InputContainer>
            <$Label>SENHA</$Label>
            <$Input
              type={passwordVisible ? "text" : "password"}
              {...register("password", { required: true })}
            />
            <$TogglePasswordButton onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </$TogglePasswordButton>
          </$InputContainer>
          <$ButtonContainer>
            <$Button type="submit">CADASTRAR</$Button>
          </$ButtonContainer>
        </$FormContainer>
      </$Container>
    </>
  );
};

export default Register;
