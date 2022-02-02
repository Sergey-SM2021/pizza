import { FC } from "react"

import { Container, Nav } from "../App/app-style"
import { IItem } from "../../mobX/Models/StoreModel"
import { Button } from "../globalStyle/style"
import popStore from "../../mobX/popStore"
import { Price } from "./Styled"

const Item: FC<IItem> = ({ img, name, price, structure }) => (
  <Container onClick={() => { popStore.switcer() }}>
    <img src={img} />
    <h3>{name}</h3>
    <div>{structure.join(",")}</div>
    <Nav>
      <Button>Выбрать</Button>
      <Price>от{price}</Price>
    </Nav>
  </Container>)

export default Item
