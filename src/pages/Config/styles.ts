import styled from "styled-components";

const $Container = styled.div`
  height: 100%;
  padding: 20px;
`;

const $SideContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  gap: 1.5vw;
`;

const $Select = styled.select`
  width: 90%;
  height: 55px;
  padding: 10px;
  border: 2px solid #d3d3d3; /* Borda neutra */
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff3f0; /* Cor de fundo suave */
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
    color: #333333; /* Cor do texto */
  }
`;

const $InputContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const $Input = styled.input`
  width: 60%;
  height: 55px;
  font-size: 20px;
  padding-left: 5px;
  border-radius: 12px;
  background-color: #fff3f0; /* Cor de fundo suave (como o select) */
  border: 2px solid #d3d3d3; /* Borda neutra */
  color: #333333; /* Cor do texto */
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff9800; /* Laranja vibrante no foco */
    box-shadow: 0px 0px 8px rgba(255, 152, 0, 0.6); /* Realce com sombra laranja */
  }
`;

const $Label = styled.label`
  font-size: 22px;
  font-weight: bold;
  color: #333333; /* Cor do texto padrão */
  transition: color 0.3s ease;

  /* Destaque no foco do input/select */
  ${$Input}:focus + &,
  ${$Select}:focus + & {
    color: #ff9800; /* Laranja vibrante */
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
`;

export {
  $Container,
  $SideContainer,
  $InputContainer,
  $Input,
  $Label,
  $Select,
  $Button,
};
