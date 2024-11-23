import styled from "styled-components";

const $HeaderContainer = styled.div`
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #fff; /* Manter o fundo branco */
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
`;

const $ButtonContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  gap: 50px;
`;

const $HeaderButton = styled.button<{ active?: boolean }>`
  width: 200px;
  height: 100%;
  background-color: ${(props) => (props.active ? "#FF9800" : "#FFC107")}; /* Laranja e amarelo vibrante */
  color: #ffffff; /* Texto branco */
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  /* Efeito Hover */
  &:hover:enabled {
    opacity: 0.9;
    background-color: #9c27b0; /* Roxo no hover */
    color: #ffffff;
    border: 2px solid #9c27b0; /* Borda roxa */
    transform: translateY(-3px); /* Leve efeito de elevação */
  }

  /* Estilo ativo */
  ${(props) =>
    props.active &&
    `
    background-color: #9c27b0; /* Roxo ativo */
    color: #fff;
    border: 2px solid #9c27b0; /* Borda roxa */
    opacity: 0.9;
  `}
`;

export { $HeaderContainer, $ButtonContainer, $HeaderButton };
