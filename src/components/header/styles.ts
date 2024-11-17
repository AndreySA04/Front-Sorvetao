import styled from "styled-components";

const $HeaderContainer = styled.div`
    top: 0;
    width: 100%;
    height: 75px;
    background-color: #FFF;
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

const $HeaderButton = styled.button`
    width: 200px;
    height: 100%;
    background-color: #BEBEBE;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover:enabled {
        opacity: 0.9;
        border: 2px solid #000
    }
`;

export {
    $HeaderContainer,
    $ButtonContainer,
    $HeaderButton,
}