import { FC } from "react"

import { Nav } from "../App/app-style"
import { IItem } from "../../mobX/Models/StoreModel"
import { Button } from "../globalStyle/style"
import popStore from "../../mobX/popStore"
import { Container, Price } from "./Styled"

const Item: FC<IItem> = (props) => {

  const HandleClick = () => {
    popStore.switcer()
    popStore.setItem(props)
  }

  return (
    <Container onClick={HandleClick}>
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div>{props.structure.join(",")}</div>
      <Nav>
        <Button>Выбрать</Button>
        <Price>от{props.price}</Price>
      </Nav>
    </Container>)
}

export default Item
