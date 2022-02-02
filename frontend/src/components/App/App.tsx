import { Wrapper } from './app-style'
import Header from './Header/Header'
import Popup from '../PopItem/PopItem'
import Content from './Content/Content'

const App = () => (<>
  <Wrapper>
    <Header />
    <Content />
    <Popup/>
  </Wrapper>
</>)

export default App
