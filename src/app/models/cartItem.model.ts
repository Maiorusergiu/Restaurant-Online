import { FoodItem } from "./food.model";

export class CartItem {
    constructor(public foodItem: FoodItem){
        
    }
    price: number = this.foodItem.price;
    quantity: number = 1;

    
}