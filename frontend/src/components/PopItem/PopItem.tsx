import { observer } from "mobx-react-lite"
import styled from "styled-components"
import popStore from "../../mobX/popStore"

const Popup = observer(() => (<>
        {popStore.pop ? <Pop onClick={() => { popStore.switcer() }}>
            <Modal onClick={e => e.stopPropagation()}></Modal>
        </ Pop> : <></>}</>))

const Modal = styled.div`
    background: #ffffff;
    width: 900px;
    height: 470px;
    border-radius: 8px;
`

const Pop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position:fixed;
    top: 0px;
    left: 0px;
    background: #0000008b;
    backdrop-filter: blur(8px);
`

export default (Popup)