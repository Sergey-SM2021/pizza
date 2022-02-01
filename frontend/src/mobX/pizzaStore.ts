import { makeAutoObservable } from 'mobx'
import Pizza1 from "../img/Pizza1.png"
import Pizza2 from "../img/Pizza2.png"
import Pizza3 from "../img/Pizza3.png"
import Pizza4 from "../img/Pizza4.png"

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
                    structure:["Курица", "Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"]
                },
                {
                    name:"Цезарь",
                    img:Pizza2,
                    price:570,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"]
                },
                {
                    name:"Римская",
                    img:Pizza3,
                    price:570,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"]
                },
                {
                    name:"Грушевая",
                    img:Pizza4,
                    price:570,
                    structure:["Груша","Ананас" , "Крем", "Сыр Моцарелла", "Сливки", "Чеснок"]
                },
            ]
        }
    ]
    
    constructor() {
        makeAutoObservable(this)
    }

}

export default new Poducts()