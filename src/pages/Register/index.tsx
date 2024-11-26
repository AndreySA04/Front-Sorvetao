import {
  $Button,
  $ButtonContainer,
  $FormContainer,
  $ImageForm,
  $Input,
  $InputContainer,
  $Label,
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
      }
    } catch (error: any) {
      console.log(error.response.data.message);
      const errorMessage = error.response?.data?.message || "Erro inesperado.";
      if (errorMessage === "Dados inválidos") {
        toast.error("A senha deve ter no mínimo 6 caracteres.", {
          position: "top-right",
        });
      } else if(errorMessage === "Usuário já existe") {
        toast.error("Este email já está sendo utilizado por outro usuário.", {
          position: "top-right",
        });
      } else {
        toast.error("Erro ao cadastrar. Tente novamente.", {
          position: "top-right",
        });
      }
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
              {passwordVisible ? (
                <FaEye color="#9c27b0" />
              ) : (
                <FaEyeSlash color="#9c27b0" />
              )}
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
