import { IItem } from './Models/StoreModel';
import { makeAutoObservable } from "mobx"

import Pizza1 from "../img/Pizza1.png"
import Pizza2 from "../img/Pizza2.png"

class Basket {
    constructor() {
        makeAutoObservable(this)
    }
    items: Array<IItem> = [
        {
            name: "Чикен Сладкий Чили",
            img: Pizza1,
            price: 570,
            structure: ["Курица", "Лук", "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"]
        },
        {
            name: "Цезарь",
            img: Pizza2,
            price: 345,
            structure: ["Курица", "Лук", "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"]
        },
    ]
    price: number = 1983
}

export default new Basket()