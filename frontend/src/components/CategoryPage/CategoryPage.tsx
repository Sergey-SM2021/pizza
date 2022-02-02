import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import pizzaStore from "../../mobX/pizzaStore"
import Item from "../Item/Item"

const CategoryPage = () => {
    const params = useParams().name

    return (<div>{pizzaStore.products.find((grup) => grup.name == params)!.items.map(item => <Item {...item} />)}</div>)
}

export default observer(CategoryPage)