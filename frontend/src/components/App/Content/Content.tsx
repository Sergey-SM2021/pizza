import { Route, Routes } from 'react-router-dom'

import { Container } from '../app-style'
import CategoryPage from '../../CategoryPage/CategoryPage'
import MainPage from '../../MainPage/MainPage'

const Content = () => {
    return (<Container>
        <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="category/:name" element={<CategoryPage />} />
        </Routes>
    </Container>)
}

export default Content