import styled from "styled-components"
import { Button as GlobalButton } from "../globalStyle/style"

export const Button = styled(GlobalButton)`
margin-left: 10px;
`

export const Container = styled.div`
margin: 0px auto;
width: 75%;
`

export const Header = styled.div`
background: #fff;
`

export const Nav = styled.div`
align-items: center;
display:flex ;
justify-content: space-between;
`

export const Wrapper = styled.div`
background: #F9F9F9;
`

export const NavItem = styled.div<{firsItem?:boolean}>`
margin-left: ${props => props.firsItem ? '0px' : '15px'} ;
`