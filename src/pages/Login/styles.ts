import styled from "styled-components";

const $Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const $FormContainer = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 520px;
  border-radius: 20px;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  justify-content: space-around;
`;

const $ImageForm = styled.img`
  width: 55%;
`;

const $InputContainer = styled.div`
  position: relative;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const $Label = styled.label`
  font-size: 17px;
  font-weight: bold;
`;

const $Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: 2px solid #9c27b0; /* Borda roxa */
  background-color: #f3e5f5; /* Fundo roxo claro */
  padding-left: 10px;
  border-radius: 8px;
  color: #4a0072; /* Texto roxo escuro */
  transition: all 0.3s ease;

  /* Foco: destaque com borda e sombra roxas */
  &:focus {
    outline: none;
    border: 2px solid #7b1fa2; /* Borda roxa mais intensa */
    box-shadow: 0 0 5px rgba(123, 31, 162, 0.6); /* Sombra roxa */
  }
`;

const $TogglePasswordButton = styled.span`
  position: absolute;
  top: 52%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
`;

const $ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const $Button = styled.button`
  width: 100%;
  height: 5.5vh;
  font-size: 20px;
  border: none;
  background-color: #9c27b0; /* Laranja padrão */
  border-radius: 10px;
  color: #ffffff; /* Texto branco */
  transition: all 0.3s ease;

  /* Hover: fundo roxo com efeito de elevação */
  &:hover:enabled {
    opacity: 0.8;
    cursor: pointer;
    transform: translateY(-3px); /* Leve efeito de elevação */
  }

  /* Foco: destaque com borda roxa */
  &:focus {
    outline: none;
    border: 2px solid #9c27b0; /* Borda roxa */
    box-shadow: 0px 0px 10px rgba(156, 39, 176, 0.6); /* Sombra roxa */
  }
`;

const $LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1vh;
`;

const $Link = styled.a`
  color: #60247a;
  font-size: 15px;
  cursor: pointer;
`;

export {
  $Container,
  $FormContainer,
  $ImageForm,
  $InputContainer,
  $Label,
  $Input,
  $TogglePasswordButton,
  $ButtonContainer,
  $Button,
  $LinkContainer,
  $Link,
};
