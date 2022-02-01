import { Route, Routes } from 'react-router-dom'

import { Basket, Container, Header, Nav, NavItem, Wrapper } from './app-style'
import MainPage from './components/MainPage/MainPage'

function App() {
  return (<Wrapper>
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
      <Routes>
        <Route path="*" element={<Container><Nav>
          <div>Куда пицца</div>
          <Basket>basket 0$</Basket>
        </Nav></Container>} />
      </Routes>
    </Header>
    <Container>
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Container>
  </Wrapper>)
}

export default App
