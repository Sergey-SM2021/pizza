import { Route, Routes } from 'react-router-dom'

import { Container, Header, Nav, NavItem, Wrapper } from './app-style'
import { Button } from './app-style'
import MainPage from './components/MainPage/MainPage'

function App() {
  return (<Wrapper>
    <Routes>
      <Route path="main" element={
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
            <Button>basket 0$</Button>
          </Nav></Container>
        </Header>
      } />
      <Route path="*" element={
        <Header>
          <Container>
            <Nav>
              <Nav>
                <NavItem firsItem={true}>Куда пицца</NavItem>
                <NavItem >Москва</NavItem>
                <NavItem>Проверить адресс</NavItem>
                <NavItem>Среднее время доставки</NavItem>
              </Nav>
              <Nav>
                <NavItem>Время работы: с 11:00 до 23:00</NavItem>
                <NavItem>Войти в аккаунт</NavItem>
                <Button>basket 0$</Button>
              </Nav>
            </Nav>
          </Container>
        </Header>
      } />
    </Routes>
    <Container>
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Container>
  </Wrapper>)
}

export default App
