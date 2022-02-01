import { FC } from "react"

import { Nav } from "../../app-style"
import { IItem } from "../../mobX/Models/StoreModel"

const Item: FC<IItem> = ({ img, name, price, structure }) => {
    return (<div>
      <img src={img} />
      <h3>{name}</h3>
      <div>{structure.join(",")}</div>
      <Nav>
        <button>Выбрать</button>
        <button>от{price}</button>
      </Nav>
    </div>)
  }

export default Item
