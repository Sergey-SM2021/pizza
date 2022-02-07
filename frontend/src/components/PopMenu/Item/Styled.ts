import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    &:after{
        content:"";
        display:block;
        background: black;
        height:1px;
        width: 100%;
        position:absolute;
        bottom: 0px;
    }
`

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:120px;
    height: 100%;
`

export const Price = styled.div`
    color: #FF7010;
    font-weight: 600;
`

export const Img = styled.img`
    height: 70px;
`

export const H4 = styled.h4`
    margin: 0px;
    padding: 0px;
`

export const Сalc = styled.div`
    display: flex;
    background: #FF7010;
    justify-content: space-around;
`