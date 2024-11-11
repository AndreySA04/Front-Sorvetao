import Header from "../../components/header";
import { $Button, $Container, $Input, $InputContainer, $Label, $Select, $SideContainer, $SmallContainer } from "./styles";

const Home = () => {

    return (
        <>
            <Header />
            <$Container>
                <$SideContainer>
                    <$SmallContainer>
                        <$Select>
                            <option value="1">Oi</option>
                            <option value="2">Olá</option>
                        </$Select>
                        <$InputContainer>
                            <$Label>Período</$Label>
                            <$Input type="text" />
                        </$InputContainer>
                    </$SmallContainer>
                    <$SmallContainer>
                        <$Button>Anexar CPLUG</$Button>
                        <$Button>Anexar OFX</$Button>
                    </$SmallContainer>
                    <$SmallContainer>
                        <$Button>Gerar Relatório</$Button>
                    </$SmallContainer>
                </$SideContainer>
            </$Container>
           
        </>
    )
}

export default Home;