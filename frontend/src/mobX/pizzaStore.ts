import { makeAutoObservable } from 'mobx'
import Pizza1 from "../img/Rectangle 4.png"

type TypeProducts = Array<IGrup>

interface IGrup {
    name: string,
    items: Array<IItem>
}

export interface IItem {
    name: string,
    price: number,
    img: any,
    structure: Array<string>,
}

class Poducts {

    products:TypeProducts = [
        {
            name:"Pizza",
            items:[
                {
                    name:"Чикен Сладкий Чили",
                    img:Pizza1,
                    price:570,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"]
                },
                {
                    name:"Цезарь",
                    img:Pizza1,
                    price:570,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"]
                },
                {
                    name:"Римская",
                    img:Pizza1,
                    price:570,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"]
                },
            ]
        }
    ]
    
    constructor() {
        makeAutoObservable(this)
    }

}

export default new Poducts()