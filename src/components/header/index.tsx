import { useNavigate } from "react-router-dom";
import { $ButtonContainer, $HeaderButton, $HeaderContainer, $HeaderIconUser } from "./styles";
import { LuUserCircle2 } from "react-icons/lu";

const Header = () => {
    const navigate = useNavigate();

    return (
        <$HeaderContainer>
            <$ButtonContainer>
                <$HeaderButton onClick={() => navigate('/conciliar')}>CONCILIAR</$HeaderButton>
                <$HeaderButton onClick={() => navigate('/relatorio')}>RELATÓRIO</$HeaderButton>
                <$HeaderButton onClick={() => navigate('/configuracao')}>CONFIGURAÇÂO</$HeaderButton>
            </$ButtonContainer>
            <$HeaderIconUser>
                <LuUserCircle2 onClick={() => navigate('/user')} style={{ cursor: 'pointer' }} size={'100%'}/>
            </$HeaderIconUser>
        </$HeaderContainer>
    )
}

export default Header;