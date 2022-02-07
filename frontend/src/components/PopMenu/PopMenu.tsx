import { observer } from "mobx-react-lite"
import { FC, SyntheticEvent } from "react"
import basketStore from "../../mobX/basketStore"
import { Button } from "../globalStyle/style"
import Pizza from "./Item/Pizza"
import { Container, Footer, Header, Items, Pop, PopInner, Title } from "./Styled"

const PopMenu: FC = () => {

    const WithOutMenuClick = () => { basketStore.setVisible(false) }

    const MenuClick = (e: SyntheticEvent) => { e.stopPropagation() }

    return (<>
        {basketStore.isVisible ? <Pop onClick={WithOutMenuClick}>
            <PopInner onClick={MenuClick}>
                <Container>
                    <Header>
                        <Title>Ваш заказ:</Title>
                        <div>Close</div>
                    </Header>
                    <Items>{
                        basketStore.items.map( item => <Pizza {...item}/> )
                        }</Items>
                    <Footer>
                        <div>Итого: {basketStore.price}</div>
                        <Button>Оформить заказ</Button>
                    </Footer>
                </Container>
            </PopInner>
        </Pop> : <></>}
    </>)
}

export default observer(PopMenu)