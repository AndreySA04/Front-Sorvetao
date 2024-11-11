import { $Button, $ButtonContainer, $Container, $FormContainer, $ImageForm, $Input, $InputContainer, $Label, $Link, $LinkContainer, $TogglePasswordButton } from "./styles";
import sorvetao from "../../assets/images/sorvetao.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/conciliar');
    }
    
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <$Container>
            <$FormContainer onSubmit={() => handleLogin()}>
                <$ImageForm src={sorvetao} />
                <$InputContainer>
                    <$Label>EMAIL</$Label>
                    <$Input type="email" />
                </$InputContainer>
                <$InputContainer>
                    <$Label>SENHA</$Label>
                    <$Input type={passwordVisible ? 'text' : 'password'}/>
                        <$TogglePasswordButton onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                        </$TogglePasswordButton>
                    <$Link  onClick={() => navigate('esqueceu')}>Esqueceu a senha?</$Link>
                </$InputContainer>
                <$ButtonContainer>
                    <$Button type="submit">ENTRAR</$Button>
                    <$LinkContainer>
                        <p>Sua primeira vez aqui?</p>
                        <$Link onClick={() => navigate('cadastrar')}>Crie sua conta</$Link>
                    </$LinkContainer>
                </$ButtonContainer>
            </$FormContainer>
        </$Container>
    );
};

export default Login;