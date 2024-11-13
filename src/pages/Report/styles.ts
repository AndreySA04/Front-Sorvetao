import styled from "styled-components";

const $Container = styled.div`
    height: 100%;
    padding: 20px;
`;

const $SideContainer = styled.div`
    width: 100%;
    height: 14vh;
    display: flex;
`;

const $InputContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const $Input = styled.input`
    width: 100%;
    height: 55px;
    font-size: 22px;
    padding-left: 5px;
    border-radius: 12px;
    background-color: #BEBEBE;
    border: none;
`;

const $Label = styled.label`
    font-size: 22px;
    font-weight: bold;
`;

export {
    $Container,
    $SideContainer,
    $InputContainer,
    $Input,
    $Label,
};