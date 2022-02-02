import { Route, Routes } from 'react-router-dom'

import { Container, Wrapper } from './app-style'
import CategoryPage from './components/CategoryPage/CategoryPage'
import Head from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Popup from './components/PopItem/PopItem'

const Content = () => {
  return (<Container>
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="category/:name" element={<CategoryPage />} />
    </Routes>
  </Container>)
}

const App = () => (<>
  <Wrapper>
    <Head />
    <Content />
    <Popup/>
  </Wrapper>
</>)

export default App
