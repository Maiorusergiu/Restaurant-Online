import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FoodItem } from 'src/app/models/food.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit, OnDestroy {

  constructor(private foodService: FoodService) { }
  subscription: Subscription
  public foodItems: FoodItem[];
  public ingredientOfFoodItem;
  public foodItem: FoodItem;

  ngOnInit(): void {
    this.subscription = this.foodService.foodSubjectChanged.subscribe((foodItems: FoodItem[]) => {
      this.foodItems = foodItems;
    })
    this.subscription = this.foodService.returnFoodItemsFromDataBase();

    for (let i in this.foodItems) {
      this.ingredientOfFoodItem = this.foodItems[i].ingredients;
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
