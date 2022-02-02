import styled from "styled-components";

export const NavItemStyled = styled.div<{ first?: boolean, last?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 70px;
    border-radius: 4px;
    height: 65px;
    margin: 10px;
    border: 1px solid #00000011;
    :hover{
        cursor: pointer;
    }
`