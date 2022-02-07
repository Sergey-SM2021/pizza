import { makeAutoObservable } from 'mobx'

import Pizza1 from "../img/Pizza1.png"
import Pizza2 from "../img/Pizza2.png"
import Pizza3 from "../img/Pizza3.png"
import Pizza4 from "../img/Pizza4.png"

import Sushi from "../img/sushi.png"
import Sushi1 from "../img/sushi1.png"
import Sushi2 from "../img/sushi2.png"
import Sushi3 from "../img/sushi3.png"

import { TypeProducts } from './Models/StoreModel'

class Poducts {
    products:TypeProducts = [
        {
            name:"Pizza",
            items:[
                {
                    name:"Чикен Сладкий Чили",
                    img:Pizza1,
                    price:570,
                    structure:["Курица", "Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"],
                    id:212903
                },
                {
                    name:"Цезарь",
                    img:Pizza2,
                    price:345,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"],
                    id: 922121
                },
                {
                    name:"Римская",
                    img:Pizza3,
                    price:570,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"],
                    id: 21000
                },
                {
                    name:"Грушевая",
                    img:Pizza4,
                    price:546,
                    structure:["Груша","Ананас" , "Крем", "Сыр Моцарелла", "Сливки", "Чеснок"],
                    id: 201010101010100100001010
                },
                {
                    name:"Чикен Сладкий Чили",
                    img:Pizza1,
                    price:570,
                    structure:["Курица", "Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"],
                    id: 129289287812275
                },
                {
                    name:"Цезарь",
                    img:Pizza2,
                    price:345,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"],
                    id: 919191919129
                },
                {
                    name:"Римская",
                    img:Pizza3,
                    price:546,
                    structure:["Курица","Лук" , "Перец Халапеньо", "Сыр Моцарелла", "Томатный соуc", "Чеснок", "Томатный соус"],
                    id:87878785656
                },
                {
                    name:"Грушевая",
                    img:Pizza4,
                    price:854,
                    structure:["Груша","Ананас" , "Крем", "Сыр Моцарелла", "Сливки", "Чеснок"],
                    id:898786564543423
                },
            ]
        },
        {
            name:"Sushi",
            items:[
                {
                    name:"Опалённый лосось",
                    img:Sushi,
                    price:870,
                    structure:[ "Рис", "Лосось" , "Кисло-сладкий соус" ],
                    id:2891290
                },
                {
                    name:"Филодельфия",
                    img:Sushi1,
                    price:234,
                    structure:["Семга", "рис", "сыр креметто", "соус унаги", "креветка", "авокадо"],
                    id: 909111
                },
                {
                    name:"Тигр мама",
                    img:Sushi2,
                    price:346,
                    structure:["Сливочный сыр", "семга татаки с тростниковым сахаром"],
                    id:82727811100
                },
                {
                    name:"Супер филадельфия",
                    img:Sushi3,
                    price:215,
                    structure:["Действительно много семги", "сливочный сыр", "огурец", "рис"],
                    id: 819019027346756
                },
            ]
        }
    ]
    
    constructor() {
        makeAutoObservable(this)
    }

}

export default new Poducts()