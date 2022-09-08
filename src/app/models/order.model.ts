import { CartItem } from "./cartItem.model";
import * as uuid from "uuid";


export class Order {

    id: string = uuid();
    items: CartItem[];
    address: string;
    fullName: string;
    email: string
    totalPrice: number;
    totalQuantity: number
    createdAt: Date = new Date();
    status: Status = Status.NOTPAYED;
}
export enum Status{
    PAYED,
    NOTPAYED
}