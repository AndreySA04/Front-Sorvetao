import { FaEye, FaEyeSlash } from "react-icons/fa";
import { $Button, $ButtonContainer, $Container, $FormContainer, $ImageForm, $Input, $InputContainer, $Label, $Link, $LinkContainer } from "../Login/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import sorvetao from "../../assets/images/sorvetao.png";
import { $TogglePasswordButton } from "./styles";
import { toast } from "react-toastify";
import axios from "axios";

const Forgot = () => {
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [updatedData, setUpdatedData] = useState({
        email: "",
        password: "",
    });

    const handleUpdate = async () => {
        try {
            await axios.patch(`http://localhost:3000/users/${updatedData.email}`, updatedData);
            toast.success("Senha atualizada com sucesso!", {
                position: "top-right",
                autoClose: 3000,
            });
        } catch (err: any) {
            toast.error("Erro ao atualizar senha.", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <$Container>
            <$FormContainer>
                <$ImageForm src={sorvetao} />
                <$InputContainer>
                    <$Label>EMAIL</$Label>
                    <$Input required 
                        type="email"
                        name="email"
                        value={updatedData.email}
                        onChange={handleInputChange}
                    />
                </$InputContainer>
                <$InputContainer>
                    <$Label>NOVA SENHA</$Label>
                    <$Input required type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        value={updatedData.password}
                        onChange={handleInputChange}
                    />
                        <$TogglePasswordButton onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                        </$TogglePasswordButton>
                </$InputContainer>
                <$ButtonContainer>
                    <$Button type="button" onClick={handleUpdate}>CADASTRAR NOVA SENHA</$Button>
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