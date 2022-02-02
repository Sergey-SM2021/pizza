import { useNavigate } from "react-router-dom"
import { NavItemStyled } from "./Styled"

const NavItem = (props: { name: string }) => {
    const handleNavItemCliced = () => { nav(`category/${props.name}`) }
    const nav = useNavigate()
    return (
        <NavItemStyled onClick={handleNavItemCliced}>
            {props.name}
        </NavItemStyled>
    )
}

export default NavItem