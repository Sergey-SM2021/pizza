import { makeAutoObservable } from "mobx"
import { IItem } from "./Models/StoreModel"
import Sushi2 from "../img/sushi2.png"

class ItemStore{
    constructor(){
        makeAutoObservable(this)
    }
    Item : IItem = {
        img : Sushi2,
        name : "Филадельфия",
        structure : ["Рис отборный", "Молочный соус", "карри", "мясо сельди"],
        price : 210
    } 
}

export default new ItemStore()