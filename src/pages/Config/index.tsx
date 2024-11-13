import Header from "@/components/header";
import { $Button, $Container, $Input, $InputContainer, $Label, $Select, $SideContainer } from "./styles";

const Config = () => {

    return (
        <>
            <Header />
            <$Container>
                <$SideContainer>
                    <$InputContainer>
                        <$Label>Selecione a Loja</$Label>
                        <$Select>
                            <option value="1">Loja 1</option>
                            <option value="2">Loja 2</option>
                            <option value="3">Loja 3</option>
                            <option value="4">Loja 4</option>
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
    )
}

export default Config;