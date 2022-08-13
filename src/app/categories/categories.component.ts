import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../models/food.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
foodItems: FoodItem[];
  user: User;
  constructor(private authService: AuthService, private foodService: FoodService) {
    this.authService.user.subscribe(response => this.user = response);
  }

  ngOnInit(): void {
    this.foodService.returnFoodItemsFromDataBase().subscribe(res => {
      this.foodItems = res;
      this.foodService.foodItems = res;
      this.foodService.foodSubjectChanged.next(this.foodItems);
      console.log(res);
    })

  }



}
