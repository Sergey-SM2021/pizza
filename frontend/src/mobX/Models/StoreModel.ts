export type TypeProducts = Array<IGrup>

interface IGrup {
    name: string,
    items: Array<IItem>
}

export interface IItem {
    name: string,
    price: number,
    img: any,
    structure: Array<string>,
    id:number
}

export interface ItemStored extends IItem{
    count: number
}