import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { Button } from './components/globalStyle/style'
import basketStore from './mobX/basketStore'

const Basket: FC = () => (
  <Button onClick={() => { basketStore.setVisible(true) }}>
    basket {basketStore.price}
  </Button>)

export default observer(Basket)