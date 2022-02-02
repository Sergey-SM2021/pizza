import { observer } from "mobx-react-lite"
import { NavLink } from "react-router-dom"
import pizzaStore from "../../mobX/pizzaStore"

const Items = observer(() => {
    return (<>{pizzaStore.products.map((el) => (<NavLink to={`category/${el.name}`}>{el.name}</NavLink>))}</>)
})

export default Items