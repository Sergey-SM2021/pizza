import { observer } from "mobx-react-lite"
import { NavLink } from "react-router-dom"
import pizzaStore from "../../mobX/pizzaStore"

const Items = () =>
(<>{
    pizzaStore.products.map((product) =>
        (<NavLink to={`category/${product.name}`}>{product.name}</NavLink>))
}
</>)

export default observer(Items)