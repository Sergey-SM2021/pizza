import { observer } from "mobx-react-lite"
import { FC } from "react"

import { Nav } from "../App/app-style"
import products from '../../mobX/pizzaStore'
import Item from "../Item/Item"
import Input from "./Input/Input"
import { Container, Grid } from "./Styled"
import NavItem from "./NavItem/NavItem"

const MainPage: FC = () => (
    <>
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
    </>
)


export default observer(MainPage)

