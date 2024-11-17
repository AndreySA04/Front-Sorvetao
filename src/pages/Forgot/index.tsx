import { FaEye, FaEyeSlash } from "react-icons/fa";
import { $Button, $ButtonContainer, $Container, $FormContainer, $ImageForm, $Input, $InputContainer, $Label, $Link, $LinkContainer } from "../Login/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import sorvetao from "../../assets/images/sorvetao.png";
import { $TogglePasswordButton } from "./styles";

const Forgot = () => {
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <$Container>
            <$FormContainer>
                <$ImageForm src={sorvetao} />
                <$InputContainer>
                    <$Label>EMAIL</$Label>
                    <$Input required type="email" />
                </$InputContainer>
                <$InputContainer>
                    <$Label>NOVA SENHA</$Label>
                    <$Input required type={passwordVisible ? 'text' : 'password'}/>
                        <$TogglePasswordButton onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                        </$TogglePasswordButton>
                </$InputContainer>
                <$ButtonContainer>
                    <$Button type="submit" onClick={() => navigate("/")}>CADASTRAR NOVA SENHA</$Button>
                    <$LinkContainer>
                        <p>Deseja voltar ao login?</p>
                        <$Link onClick={() => navigate("/")}>Clique aqui</$Link>
                    </$LinkContainer>
                </$ButtonContainer>
            </$FormContainer>
        </$Container>
    );
};

export default Forgot;