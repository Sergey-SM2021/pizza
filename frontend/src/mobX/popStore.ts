import { makeAutoObservable } from "mobx"

class Pop{
    constructor(){
        makeAutoObservable(this)
    }
    pop:boolean = true
    switcer = () => {
        this.pop = !this.pop
    }
}

export default new Pop()