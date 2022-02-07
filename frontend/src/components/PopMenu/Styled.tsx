import styled from "styled-components";

export const Pop = styled.div`
    position: fixed;
    backdrop-filter: blur(8px);
    background: #4545;
    top: 0px;
    width: 100%;
    height: 100vh;
    right: 0px;
`

export const PopInner = styled.div`
    position: absolute;
    right: 0px;
    top:0px;
    bottom: 0px;
    width:40%;
    background: #ffffff;
    height:100vh;
` 

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
` 

export const Title = styled.h2`
    margin: 0px;
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-around;
` 

export const Items = styled.div`
    height: 100%;
    overflow-y: scroll;
`
