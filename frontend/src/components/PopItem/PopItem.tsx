import { observer } from "mobx-react-lite"
import popStore from "../../mobX/popStore"
import { Modal, Pop } from "./Styled"

const Popup = () => (<>
    {popStore.pop ?
        <Pop onClick={() => { popStore.switcer() }}>
            <Modal onClick={e => e.stopPropagation()}></Modal>
        </ Pop> :
        <></>
    }
</>)

export default observer(Popup)