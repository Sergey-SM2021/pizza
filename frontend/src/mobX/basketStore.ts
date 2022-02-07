import { ItemStored, IItem } from './Models/StoreModel';
import { makeAutoObservable } from "mobx"

import Pizza1 from "../img/Pizza1.png"
import Pizza2 from "../img/Pizza2.png"

class Basket {

    constructor() {
        makeAutoObservable(this)
    }

    items: Array<ItemStored> = [
        {
            name: "Чикен Сладкий Чили",
            img: Pizza1,
            price: 570,
            structure: ["Курица", "Лук", "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"],
            count: 1,
            id: 8923783783
        },
        {
            name: "Цезарь",
            img: Pizza2,
            price: 345,
            structure: ["Курица", "Лук", "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"],
            count: 3,
            id: 90309303039
        },
    ]

    get price() {
        return (this.items.reduce((calculate, current) => {
            return calculate + current.price
        }, 0))
    }

    add = (Item: IItem) => {
        this.items.push({ ...Item, count: 1 })
        console.log(this.items)
    }

    isVisible = false

    setVisible = (flag: boolean) => {
        this.isVisible = flag
    }
}

export default new Basket()