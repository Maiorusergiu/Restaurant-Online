import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { FoodItem } from "../models/food.model";

// new FoodItem('https://cdn.pixabay.com/photo/2016/07/07/19/51/soup-1503117_960_720.jpg',
//     'Beef Soup', [new Ingredient('Meat', 100), new Ingredient('Ingredient', 200), new Ingredient('Supa', 100)], 0, 40, 10, 'hamburger'),
// new FoodItem('https://cdn.pixabay.com/photo/2017/03/17/17/33/potato-soup-2152254_960_720.jpg',
//     'Potatoes Soup', [new Ingredient('Meat', 100), new Ingredient('Ingredient', 200)], 0, 50, 13, 'soup'),
// new FoodItem('https://cdn.pixabay.com/photo/2019/02/22/23/50/goulash-4014661_960_720.jpg',
//     'Gulas Soup', [new Ingredient('Meat', 100), new Ingredient('Ingredient', 200)], 0, 45, 11, 'soup'),

@Injectable({ providedIn: 'root' })
export class FoodService {
    apiURL = "https://tasty-food-oradea-default-rtdb.firebaseio.com/fooditem.json";
    constructor(private http: HttpClient) {

    }
    public foodSubjectChanged = new Subject<FoodItem[]>();
    public foodItems: FoodItem[];
    public foodItemSubject = new Subject<FoodItem>();


    getFood() {
        return this.foodItems.slice();

    }
    returnFoodItemsFromDataBase() {
        return this.http.get<FoodItem[]>(this.apiURL);
    }
    // returnFoodItem() {
    //     return this.http.get<FoodItem[]>(this.apiURL).pipe(map(foodItems => {
    //         return foodItems.map(foodItem => {
    //             return { ...foodItem, ingredients: foodItem.ingredients ? foodItem.ingredients : [] }
    //         })
    //     }))
    // }
    getFoodById(id: number) {
        this.foodItemSubject.next(this.foodItems[id]);
        return this.foodItems[id];

    }
    getFoodByIdFromDatabase(id: number) {

        return this.http.get<FoodItem>(`https://tasty-food-oradea-default-rtdb.firebaseio.com/fooditem/${id}.json`);
    }
    addFoodItem(foodItem: FoodItem) {
        this.foodItems = this.foodItems || [];
        this.foodItems.push(foodItem);
        this.foodSubjectChanged.next(this.foodItems.slice());
        return this.http.put(this.apiURL, this.foodItems.slice()).subscribe(res => {
            console.log(res);
        })

    }

    deleteFoodItem(id: number) {

        return this.http.delete(`https://tasty-food-oradea-default-rtdb.firebaseio.com/fooditem/${id}.json`);
    }
    updateFoodItem(id: number, newFoodItem: FoodItem) {

        return this.http.put(`https://tasty-food-oradea-default-rtdb.firebaseio.com/fooditem/${id}.json`, newFoodItem);
    }
    setFoodItems(foodItems: FoodItem[]) {
        this.foodItems = foodItems;
        this.foodSubjectChanged.next(this.foodItems.slice());
    }
}