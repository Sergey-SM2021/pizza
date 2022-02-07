import styled from "styled-components"

export const Modal = styled.div`
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    width: 900px;
    height: 470px;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
`

export const Pop = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position:fixed;
    top: 0px;
    left: 0px;
    background: #0000008b;
    backdrop-filter: blur(8px);
    overflow: hidden;
`

export const Title = styled.h3`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Half = styled.div`
    width: 100%;
    padding: 15px;
`

export const P = styled.p`
    display: flex;
    justify-content: center;
`

export const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const Price = styled.div`
display: inline-block;
color: #FF7010;
background: #fff;
`