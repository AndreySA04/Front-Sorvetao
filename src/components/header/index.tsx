import { $ButtonContainer, $HeaderButton, $HeaderContainer, $HeaderIconUser } from "./styles";
import { LuUserCircle2 } from "react-icons/lu";

const Header = () => {

    return (
        <$HeaderContainer>
            <$ButtonContainer>
                <$HeaderButton>CONCILIAR</$HeaderButton>
                <$HeaderButton>RELATÓRIO</$HeaderButton>
                <$HeaderButton>CONFIGURAÇÂO</$HeaderButton>
            </$ButtonContainer>
            <$HeaderIconUser>
                <LuUserCircle2 style={{ cursor: 'pointer' }} size={'100%'}/>
            </$HeaderIconUser>
        </$HeaderContainer>
    )
}

export default Header;