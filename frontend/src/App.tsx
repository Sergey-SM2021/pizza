import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Basket, Container, Header, Nav, NavItem, Wrapper } from './app-style';
import products, { IItem } from './mobX/pizzaStore'

const MainPage: FC = observer(() => {
  return (<>
    <Nav>
      <div>Акции</div>
      <div>Пицца</div>
      <div>Суши</div>
      <div>Напитки</div>
      <div>Закуски</div>
      <div>Комбо</div>
      <div>Десерты</div>
      <div>Соусы</div>
    </Nav>
    <Nav>
      <div>3 средние пиццы
        от 999 рублей</div>
      <div>Кэшбек 10% на самовывоз (доставка)</div>
      <div>3 средние пиццы
        от 999 рублей</div>
      <div>Кэшбек 10% на самовывоз (доставка)</div>
    </Nav>
    {/* <Search></Search> */}
    <input type="text" />
    <Nav>
      <div>Пицца</div>
      <div>фильтры</div>
    </Nav>
    {
      products.products.map((el) => (<>div</>))
    }
  </>)
})

const Item: FC<IItem> = ({ img, name, price, structure }) => {
  return (<>
  </>)
}

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

export default App;
