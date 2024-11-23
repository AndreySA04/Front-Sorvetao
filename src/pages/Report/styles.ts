import styled from "styled-components";

const $Container = styled.div`
  height: 100%;
  padding: 20px;
`;

const $SideContainer = styled.div`
  width: 100%;
  height: 14vh;
  display: flex;
  gap: 20px;
`;

const $InputContainer = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const $DateInput = styled.input`
  width: 100%;
  height: 55px;
  font-size: 18px;
  padding-left: 10px;
  border-radius: 8px;
  border: 2px solid #d3d3d3;
  background-color: #fff3f0;
  color: #333333;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff9800;
    box-shadow: 0px 0px 8px rgba(255, 152, 0, 0.6);
  }

  &::-webkit-calendar-picker-indicator {
    background-color: #ff9800;
    border-radius: 5px;
    margin-right: 5px;
  }

  &::-webkit-input-placeholder {
    color: #777;
  }

  &:-ms-input-placeholder {
    color: #777;
  }
`;

const $Label = styled.label`
  font-size: 22px;
  font-weight: bold;
  color: #333333; /* Cor do texto padrão */
  transition: color 0.3s ease;

  /* Destaque no foco do input */
  ${$DateInput}:focus + & {
    color: #ff9800; /* Laranja vibrante */
  }
`;

const $Select = styled.select`
  width: 100%;
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

const $Button = styled.button`
  width: 250px;
  height: 65px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 30px;
  background-color: #ff9800; /* Laranja padrão */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  color: #ffffff; /* Texto branco */
  transition: all 0.3s ease;

  &:hover {
    background-color: #9c27b0; /* Amarelo vibrante */
    color: #ffffff; /* Cor roxa */
    transform: translateY(-3px); /* Leve efeito de elevação */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Sombra ao passar o mouse */
  }

  &:focus {
    outline: none;
    border: 2px solid #9c27b0; /* Borda roxa */
    box-shadow: 0px 0px 10px rgba(156, 39, 176, 0.6); /* Sombra roxa */
  }

  &:disabled {
    background-color: #9e9e9e; /* Cinza claro */
    color: #000; /* Texto cinza médio */
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export {
  $Container,
  $SideContainer,
  $InputContainer,
  $DateInput,
  $Label,
  $Select,
  $Button,
};
