import styled from "styled-components";


export const Button = styled.button<{default?:boolean}>`
    background: ${ props => props.default?"#fff":"#FF7010" };
    height: 27px;
    min-width: 65px;
    color: ${ props => props.default?"black":"#fff" };
    border: ${ props => props.default?"black solid 1px":"none" };
    border-radius: 2px;
`