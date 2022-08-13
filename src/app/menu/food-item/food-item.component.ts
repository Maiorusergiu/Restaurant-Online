import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FoodItem } from 'src/app/models/food.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit, OnDestroy {

  constructor(private foodService: FoodService, private cartService: CartService, private router: Router) { }
  //subscription: Subscription
  public foodItems: FoodItem[];
  public id: number;
  public ingredientOfFoodItem;
  public foodItem: FoodItem;

  ngOnInit(): void {
    this.foodService.returnFoodItemsFromDataBase().subscribe((res) => {
  this.foodItems = res;
  this.foodService.foodSubjectChanged.next(this.foodItems);

  

})
    
   
    for (let i in this.foodItems) {
      this.ingredientOfFoodItem = this.foodItems[i].ingredients;
     
    }
  }
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
