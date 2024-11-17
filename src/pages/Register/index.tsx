import { useNavigate } from "react-router-dom";
import { $Button, $ButtonContainer, $Container, $FormContainer, $ImageForm, $Input, $InputContainer, $Label, $Link, $LinkContainer } from "../Login/styles";
import { useForm } from "react-hook-form";
import sorvetao from "../../assets/images/sorvetao.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { $TogglePasswordButton } from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

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
          const response = await axios.post("http://localhost:3000/users", data);
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
                <$Input type={passwordVisible ? "text" : "password"} {...register("password", { required: true })} />
                <$TogglePasswordButton onClick={togglePasswordVisibility}>
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </$TogglePasswordButton>
            </$InputContainer>
            <$ButtonContainer>
                <$Button type="submit">CADASTRAR</$Button>
                <$LinkContainer>
                    <p>Já possui conta?</p>
                    <$Link onClick={() => navigate('/')}>Entre aqui</$Link>
                </$LinkContainer>
            </$ButtonContainer>
        </$FormContainer>
    </$Container>
    );
};

export default Register;