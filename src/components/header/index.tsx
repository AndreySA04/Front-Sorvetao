import { useLocation, useNavigate } from "react-router-dom";
import { $ButtonContainer, $HeaderButton, $HeaderContainer } from "./styles";
import { LuUserCircle2 } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const isActiveRoute = (route: string) => location.pathname === route;

  return (
    <$HeaderContainer>
      <$ButtonContainer>
        <$HeaderButton
          onClick={() => navigate("/conciliar")}
          active={isActiveRoute("/conciliar")}
        >
          CONCILIAR
        </$HeaderButton>
        <$HeaderButton
          onClick={() => navigate("/relatorio")}
          active={isActiveRoute("/relatorio")}
        >
          RELATÓRIO
        </$HeaderButton>
        <$HeaderButton
          onClick={() => navigate("/configuracao")}
          active={isActiveRoute("/configuracao")}
        >
          CONFIGURAÇÃO
        </$HeaderButton>
      </$ButtonContainer>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LuUserCircle2 style={{ cursor: "pointer" }} size={"100%"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Informações da Conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/user")}>
            Minha Conta
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/cadastrar")}>
            Adicione um usuário
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </$HeaderContainer>
  );
};

export default Header;
