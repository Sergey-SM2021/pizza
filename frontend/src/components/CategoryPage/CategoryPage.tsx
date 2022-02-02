import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"

import pizzaStore from "../../mobX/pizzaStore"
import Item from "../Item/Item"
import { Grid } from "./Styled"

const CategoryPage = () => {

    const params = useParams().name

    return (<Grid>{
        pizzaStore.products.find( grup => grup.name == params)!.items.map( item => <Item {...item} />)
    }</Grid>)
}

export default observer(CategoryPage)