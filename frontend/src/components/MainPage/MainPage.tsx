import { observer } from "mobx-react-lite"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { Nav } from "../../app-style"
import products from '../../mobX/pizzaStore'
import Item from "../Item/Item"
import Input from "./Input/Input"

const NavItem = (props: { name: string }) => {
    const nav = useNavigate()
    return (<NavItemStyled onClick={() => { nav(`category/${props.name}`) }}>{props.name}</NavItemStyled>)
}

const MainPage: FC = () => {
    return (<>
        <Container>
            {
                products.products.map((el) => (<NavItem name={el.name} />))
            }
        </Container>
        <Nav>
            <div>3 средние пиццы
                от 999 рублей</div>
            <div>Кэшбек 10% на самовывоз (доставка)</div>
            <div>3 средние пиццы
                от 999 рублей</div>
            <div>Кэшбек 10% на самовывоз (доставка)</div>
        </Nav>
        <Input />
        <Nav>
            <div>Пицца</div>
            <div>фильтры</div>
        </Nav>
        {
            products.products.map(grup => (<>
                <h1>{grup.name}</h1>
                <Grid>
                    {
                        grup.items.map(item => <Item {...item} />)
                    }
                </Grid>
            </>))

        }
    </>)
}

const Grid = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
`

const Container = styled.div`
display: flex;
justify-content: center;
`

const NavItemStyled = styled.div<{ first?: boolean, last?: boolean }>`
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

export default observer(MainPage)

