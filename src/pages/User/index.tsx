import {
  $Button,
  $ButtonContainer,
  $Container,
  $FormContainer,
  $ImageForm,
  $Input,
  $InputContainer,
  $Label,
} from "./styles";
import sorvetao from "../../assets/images/sorvetao.png";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import { toast } from "react-toastify";
import api from "@/utils/api";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = localStorage.getItem("userData");

      if (!data) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await api.get(`/users/${data}`);
        setUserData({
          name: response.data.name,
          email: response.data.email,
        });
        setUpdatedData({
          name: response.data.name,
          email: response.data.email,
        });
      } catch (err: any) {
        toast.error("Erro ao buscar dados.", {
          position: "top-right",
          autoClose: 3000,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await api.patch(`/users/${userData.email}`, updatedData);
      setUserData(updatedData);
      localStorage.setItem("userData", updatedData.email);
      toast.success("Dados atualizados com sucesso!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (err: any) {
      toast.error("Erro ao atualizar dados.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      <$Container>
        {loading && <p>Carregando...</p>}
        {!loading && (
          <$FormContainer>
            <$ImageForm src={sorvetao} />
            <$InputContainer>
              <$Label>NOME DE USUÁRIO</$Label>
              <$Input
                type="text"
                name="name"
                value={updatedData.name}
                onChange={handleInputChange}
              />
            </$InputContainer>
            <$InputContainer>
              <$Label>EMAIL</$Label>
              <$Input
                type="email"
                name="email"
                value={updatedData.email}
                onChange={handleInputChange}
              />
            </$InputContainer>
            <$ButtonContainer>
              <$Button type="button" onClick={handleUpdate}>
                ATUALIZAR
              </$Button>
            </$ButtonContainer>
          </$FormContainer>
        )}
      </$Container>
    </>
  );
};

export default User;
