import { observer } from 'mobx-react-lite'
import { Button } from './components/globalStyle/style'
import basketStore from './mobX/basketStore'

const Basket = () => {
  return (<Button>basket {basketStore.price}</Button>)
}

export default observer(Basket)