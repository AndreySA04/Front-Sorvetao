import styled from "styled-components";

const $Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const $FormContainer = styled.form`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 520px;
  border-radius: 20px;
  padding: 10px;
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
  border: 2px solid #000000;
  padding-left: 3px;
  border-radius: 8px;
`;

const $TogglePasswordButton = styled.span`
  position: absolute;
  top: 72%;
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
  background-color: #D9D9D9;
  border-radius: 10px;
  
  &:hover:enabled {
    opacity: 0.8;
    cursor: pointer;
  }
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
}