import { FC } from "react"
import styled from "styled-components"

import { Nav } from "../../app-style"
import { IItem } from "../../mobX/Models/StoreModel"
import { Button } from "../globalStyle/style"
import popStore from "../../mobX/popStore"

const Item: FC<IItem> = ({ img, name, price, structure }) => {
    return (<Container onClick={()=>{popStore.switcer()}}>
      <img src={img} />
      <h3>{name}</h3>
      <div>{structure.join(",")}</div>
      <Nav>
        <Button>Выбрать</Button>
        <Price>от{price}</Price>
      </Nav>
    </Container>)
  }

  const Container = styled.div`
    border: #00000021 solid 1px;
  `

  const Price = styled.button`
    background: #fff;
    border: none;
    color: #FF7010;
  `

export default Item
