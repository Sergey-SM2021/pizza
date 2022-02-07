import { observer } from "mobx-react-lite"
import { FC } from "react"
import basketStore from "../../../mobX/basketStore"
import { ItemStored } from "../../../mobX/Models/StoreModel"
import { Block, H4, Img, Main, Price, Сalc } from "./Styled"


const Pizza: FC<ItemStored> = ({ count, img, name, price, structure, id }) =>
(<Main>
    <Img src={img} />
    <Block>
        <H4>{name}</H4>
        <Сalc>
            <div onClick={() => { basketStore.add(id) }}>+</div><div>{count}</div><div onClick={() => { }}>-</div>
        </Сalc>
    </Block>
    <Price>
        {price}$
    </Price>
</Main>
)

export default observer(Pizza)