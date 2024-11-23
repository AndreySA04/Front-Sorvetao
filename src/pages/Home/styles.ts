import styled from "styled-components";

const $Container = styled.div`
  height: 100%;
  padding: 20px;
`;

const $Select = styled.select`
  width: 60%;
  height: 55px;
  padding: 10px;
  border: 2px solid #d3d3d3; /* Borda neutra padrão */
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff3f0; /* Amarelo claro para o fundo */
  color: #333333; /* Cor do texto */
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff9800; /* Laranja vibrante no foco */
    box-shadow: 0px 0px 8px rgba(255, 152, 0, 0.6); /* Realce com sombra laranja */
  }

  option {
    padding: 10px;
    background-color: #ffffff; /* Fundo branco */
    color: #333333; /* Texto padrão */
    font-size: 16px;
    font-weight: normal;

    &:hover {
      background-color: #ffe0b2; /* Amarelo claro ao passar o mouse */
    }
  }
`;

const $Label = styled.label`
  font-size: 22px;
  font-weight: bold;
  color: #333333; /* Tom escuro padrão */
  transition: color 0.3s ease;

  /* Destaque no foco do select */
  ${$Select}:focus + & {
    color: #ff9800; /* Laranja vibrante */
  }
`;

const $SideContainer = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const $SmallContainer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const $InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1vh;
`;

const $Input = styled.input`
  width: 100%;
  height: 55px;
  font-size: 20px;
  padding-left: 5px;
  border-radius: 12px;
  background-color: #bebebe; /* Cor neutra para o input */
  border: none;
`;

const $Button = styled.button`
  width: 70%;
  height: 65px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  color: #ffffff; /* Texto branco */
  background-color: #ff9800; /* Laranja padrão */
  transition: all 0.3s ease;

  /* Hover: fundo amarelo com texto roxo */
  &:hover {
    background-color: #9c27b0; /* Amarelo vibrante */
    color: #ffffff; /* Roxo */
    transform: translateY(-3px); /* Leve efeito de elevação */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Sombra ao passar o mouse */
  }

  /* Foco: destaque com borda roxa */
  &:focus {
    outline: none;
    border: 2px solid #9c27b0; /* Borda roxa */
    box-shadow: 0px 0px 10px rgba(156, 39, 176, 0.6); /* Sombra roxa */
  }

  /* Botão desabilitado: fundo cinza claro com opacidade reduzida */
  &:disabled {
    background-color: #9e9e9e; /* Cinza claro */
    color: #000; /* Texto cinza médio */
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export {
  $Container,
  $Select,
  $SideContainer,
  $SmallContainer,
  $Input,
  $Label,
  $InputContainer,
  $Button,
};
