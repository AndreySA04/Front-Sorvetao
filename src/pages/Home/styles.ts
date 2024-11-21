import styled from "styled-components";

const $Container = styled.div`
  height: 100%;
  padding: 20px;
`;

const $Select = styled.select`
  width: 60%;
  height: 55px;
  padding: 10px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  background-color: #bebebe;

  option {
    padding: 10px;
    background-color: white;
    color: #333;
  }
`;

const $SideContainer = styled.div`
  width: 100%;
  height: 35vh;
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
  background-color: #bebebe;
  border: none;
`;

const $Label = styled.label`
  font-size: 22px;
  font-weight: bold;
`;

const $Button = styled.button`
  width: 70%;
  height: 65px;
  font-size: 25px;
  font-weight: bold;
  background-color: #bebebe;
  border: none;
  border-radius: 15px;
  cursor: pointer;
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
