import Header from "@/components/header";
import {
  $Button,
  $Container,
  $Input,
  $InputContainer,
  $Label,
  $Select,
  $SideContainer,
} from "./styles";

const Config = () => {
  return (
    <>
      <Header />
      <$Container>
        <$SideContainer>
          <$InputContainer>
            <$Label>Selecione a Loja</$Label>
            <$Select>
              <option value={undefined}></option>
              <option value={13381369}>Loja Teste</option>
            </$Select>
          </$InputContainer>
          <$InputContainer>
            <$Label>Taxa da Loja</$Label>
            <$Input type="text" />
          </$InputContainer>
          <$Button>Salvar</$Button>
        </$SideContainer>
      </$Container>
    </>
  );
};

export default Config;
