import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import pizzaStore from "../../mobX/pizzaStore"
import Item from "../Item/Item"

const CategoryPage = () => {
    const params = useParams().name

    return (<Grid>{pizzaStore.products.find((grup) => grup.name == params)!.items.map(item => <Item {...item} />)}</Grid>)
}

const Grid = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
`

export default observer(CategoryPage)