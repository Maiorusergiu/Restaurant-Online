import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {
foodItems: FoodItem[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.returnFoodItemsFromDataBase().subscribe(res => {
      this.foodItems = res;
    })
  }

}
