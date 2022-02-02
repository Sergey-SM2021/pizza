import { Button } from "../../globalStyle/style"
import { Container, Search } from "./Styled"

const Input = () => {
    return (<Container>
        <div>Проверить адрес доставки</div>
        <Search placeholder="Адрес"/>
        <Button > Проверить </Button>
    </Container>)
}

export default Input