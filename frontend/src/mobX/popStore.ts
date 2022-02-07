import { IItem } from './Models/StoreModel';
import { makeAutoObservable } from "mobx"
import Sushi2 from "../img/sushi2.png"

class Pop {

    item: IItem = {
        img: Sushi2,
        name: "cc",
        structure: ["Рис отборный", "Молочный соус", "карри", "мясо сельди"],
        price: 210,
    }

    pop: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    switcer = () => {
        this.pop = !this.pop
    }

    setItem = (item: IItem) => {
        this.item = item
    }
}

export default new Pop()