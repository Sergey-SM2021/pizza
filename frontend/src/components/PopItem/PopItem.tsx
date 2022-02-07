import { observer } from "mobx-react-lite"
import popStore from "../../mobX/popStore"
import { Button } from "../globalStyle/style"
import { Pop, Modal, Title, Half, P, SpaceBetween, LinkButton } from "./Styled"
import basketStore from '../../mobX/basketStore'

const Popup = () => (<>
    {popStore.pop ?
        <Pop onClick={() => { popStore.switcer() }}>
            <Modal onClick={e => e.stopPropagation()}>
                <img src={popStore.item.img} />
                <Half>
                    <Title>{popStore.item.name}</Title>
                    <P><span>Состав: </span>{popStore.item.structure.join(", ")}</P>
                    <SpaceBetween>
                        <Button>20</Button>
                        <Button default={true}>28</Button>
                        <Button default>33</Button>
                    </SpaceBetween>
                    <SpaceBetween>
                        <LinkButton>Итого: 379$</LinkButton>
                        <Button onClick={()=>{basketStore.add(popStore.item)}}>Добавить</Button>
                    </SpaceBetween>
                </Half>
            </Modal>
        </ Pop> :
        <></>
    }
</>)

export default observer(Popup)