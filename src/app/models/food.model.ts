
import { Ingredient } from "./ingredient.model";

export class FoodItem {
    public id: string;
    public imagePath: string;
    public name: string;
    public ingredients: Ingredient[];
    public valueRate: number;
    public deliveryTime: number;
    public price: number;
    public category: string;

    constructor(id: string,imagePath: string, name: string, ingredients: Ingredient[], valueRate: number, deliveryTime: number, price: number, category: string) {
        this.id = id;
        this.imagePath = imagePath;
        this.name = name;
        this.ingredients = ingredients;
        this.valueRate = valueRate;
        this.deliveryTime = deliveryTime;
        this.price = price;
        this.category = category;
    }
}