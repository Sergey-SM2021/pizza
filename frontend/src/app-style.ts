import styled from "styled-components"

export const Basket = styled.button`
background: #FF7010;
border-radius: 3px;
border: none;
color: #ffffff;
`

export const Container = styled.div`
margin: 0px auto;
width: 75%;
`

export const Header = styled.div`
background: #fff;
`

export const Nav = styled.div`
display:flex ;
justify-content: space-between;
`

export const Wrapper = styled.div`
background: #F9F9F9;
`

export const NavItem = styled.div<{firsItem?:boolean}>`
margin-left: ${props => props.firsItem ? '0px' : '15px'} ;
`