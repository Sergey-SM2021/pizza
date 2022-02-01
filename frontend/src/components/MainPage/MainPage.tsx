import { observer } from "mobx-react-lite"
import { FC } from "react"

import { Nav } from "../../app-style"
import products from '../../mobX/pizzaStore'
import Item from "../Item/Item"

const MainPage: FC = () => {
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

            // products.products.map( (el) => el.items.map((it)=>(<Item {...it}/>)) )
            products.products.map(grup => (<>
                <h1>{grup.name}</h1>
                {
                    grup.items.map(item => <Item {...item} />)
                }
            </>))

        }
    </>)
}

export default observer(MainPage)