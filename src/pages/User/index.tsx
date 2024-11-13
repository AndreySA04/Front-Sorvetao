import { $Button, $ButtonContainer, $Container, $FormContainer, $ImageForm, $Input, $InputContainer, $Label } from "./styles";
import sorvetao from "../../assets/images/sorvetao.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { $TogglePasswordButton } from "./styles";
import Header from "@/components/header";

const User = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <Header />
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
                    <$Button>ATUALIZAR</$Button>
                </$ButtonContainer>
            </$FormContainer>
        </$Container>
    </>
    );
};

export default User;