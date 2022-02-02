import { NavLink, Route, Routes } from 'react-router-dom'

import { Container, Header, Nav, NavItem } from '../../app-style'
import Basket from '../../Busket'
import Items from '../Navigate/Nav'

const Head = () => {
    return (<Routes>

        <Route path='*' element={
            <Header>
                <Container>
                    <Nav>
                        <NavLink to={"/"}>Куда пицца</NavLink>
                        <Items />
                        <div>Другое</div>
                        <Basket />
                    </Nav>
                </Container>
            </Header>
        } />

        <Route path='/' element={
            <Header>
                <Container>
                    <Nav>
                        <Nav>
                            <NavItem firsItem={true}>Москва</NavItem>
                            <NavItem>Проверить адресс</NavItem>
                            <NavItem>Среднее время доставки</NavItem>
                        </Nav>
                        <Nav>
                            <NavItem>Время работы: с 11:00 до 23:00</NavItem>
                            <NavItem>Войти в аккаунт</NavItem>
                        </Nav>
                    </Nav>
                </Container>
                <Container><Nav>
                    <div>Куда пицца</div>
                    <Basket />
                </Nav></Container>
            </Header>
        } />

    </Routes>)
}

export default Head