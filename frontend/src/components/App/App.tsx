import { Wrapper } from './app-style'
import Header from './Header/Header'
import Popup from '../PopItem/PopItem'
import Content from './Content/Content'
import PopMenu from '../PopMenu/PopMenu'

const App = () => (<>
  <Wrapper>
    <Header />
    <Content />
    <Popup/>
    <PopMenu />
  </Wrapper>
</>)

export default App
