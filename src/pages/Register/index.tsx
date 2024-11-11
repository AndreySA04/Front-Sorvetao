import { useNavigate } from "react-router-dom";
import { $Button, $ButtonContainer, $Container, $FormContainer, $ImageForm, $Input, $InputContainer, $Label, $Link, $LinkContainer } from "../Login/styles";
import { useForm } from "react-hook-form";
import sorvetao from "../../assets/images/sorvetao.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { $TogglePasswordButton } from "./styles";

const Register = () => {
    const navigate = useNavigate();
    const { handleSubmit } = useForm();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <$Container>
        <$FormContainer>
            <$ImageForm src={sorvetao} />
            <$InputContainer>
                <$Label>NOME DE USUÁRIO</$Label>
                <$Input type="text" />
            </$InputContainer>
            <$InputContainer>
                <$Label>EMAIL</$Label>
                <$Input type="email" />
            </$InputContainer>
            <$InputContainer>
                <$Label>SENHA</$Label>
                <$Input type={passwordVisible ? 'text' : 'password'}/>
                <$TogglePasswordButton onClick={togglePasswordVisibility}>
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </$TogglePasswordButton>
            </$InputContainer>
            <$ButtonContainer>
                <$Button>CADASTRAR</$Button>
                <$LinkContainer>
                    <p>Já possui conta?</p>
                    <$Link onClick={handleSubmit(() => navigate('/'))}>Entre aqui</$Link>
                </$LinkContainer>
            </$ButtonContainer>
        </$FormContainer>
    </$Container>
    );
};

export default Register;