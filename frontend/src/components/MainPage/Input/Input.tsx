import styled from "styled-components"
import { Button } from "../../globalStyle/style"

const Input = () => {
    return (<Container>
        <div>Проверить адрес доставки</div>
        <Search placeholder="Адрес"/>
        <Button > Проверить </Button>
    </Container>)
}

const Search = styled.input`
    width: 60%;
    height: 20px;
    border: 1px solid #00000030;
    border-radius: 4px;
`

const Container = styled.div`
    border: 1px solid #00000021;
    background: #fff;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export default Input